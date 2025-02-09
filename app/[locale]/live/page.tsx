"use client";

import { useEffect, useState, useRef } from "react";
import ROSLIB from "roslib";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Home() {
  const [lidarData, setLidarData] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pointsRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    // Connect to ROSBridge
    const ros = new ROSLIB.Ros({ url: "ws://localhost:9090" });

    ros.on("connection", () => setLidarData("✅ Bağlandı, veri bekleniyor..."));
    ros.on("error", (error) => setLidarData(`❌ Hata: ${error.message}`));
    ros.on("close", () => setLidarData("🔴 Bağlantı kapatıldı."));

    // Listen to LiDAR data
    const lidarTopic = new ROSLIB.Topic({
      ros,
      name: "/velodyne_points", // Velodyne LiDAR topic
      messageType: "sensor_msgs/PointCloud2",
    });

    lidarTopic.subscribe((message) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      const formattedData = `📡 Gelen Veri: ${JSON.stringify(message).slice(0, 300)}...`;
      setLidarData(formattedData);

      // 3 seconds later, clear the data message
      timeoutRef.current = setTimeout(() => {
        setLidarData(null);
      }, 3000);

      // Process and display LiDAR data with downsampling
      const points = processPointCloudData(message);

      if (pointsRef.current) {
        updatePointCloud(points);
      }
    });

    return () => {
      lidarTopic.unsubscribe();
      ros.close();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Process PointCloud2 data into 3D points and normalize the coordinates
  const processPointCloudData = (message: any) => {
    const pointCloudData = message.data;
    const width = message.width;
    const height = message.height;
    const pointStep = message.point_step;

    const points: THREE.Vector3[] = [];
    let offset = 0;

    // Variables to find the min and max for normalization
    let minX = Infinity, minY = Infinity, minZ = Infinity;
    let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;

    // First pass to find the min and max coordinates
    for (let i = 0; i < width * height; i++) {
      const x = readFloat32(pointCloudData, offset);
      const y = readFloat32(pointCloudData, offset + 4);
      const z = readFloat32(pointCloudData, offset + 8);

      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      minZ = Math.min(minZ, z);

      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
      maxZ = Math.max(maxZ, z);

      offset += pointStep;
    }

    // Second pass to normalize the points to [-1, 1] range
    offset = 0;
    for (let i = 0; i < width * height; i++) {
      const x = readFloat32(pointCloudData, offset);
      const y = readFloat32(pointCloudData, offset + 4);
      const z = readFloat32(pointCloudData, offset + 8);

            // İstenilen normalizasyon aralığını belirtin
        const targetMin = -2;  // Örneğin, -2'ye normalizasyon yapmak
        const targetMax = 2;   // Örneğin, 2'ye normalizasyon yapmak

        // Normalizasyon işlemi
        const normalizedX = (x - minX) / (maxX - minX) * (targetMax - targetMin) + targetMin;
        const normalizedY = (y - minY) / (maxY - minY) * (targetMax - targetMin) + targetMin;
        const normalizedZ = (z - minZ) / (maxZ - minZ) * (targetMax - targetMin) + targetMin;


      points.push(new THREE.Vector3(normalizedX, normalizedY, normalizedZ));

      offset += pointStep;
    }

    return points;
  };

  const readFloat32 = (data: string, offset: number) => {
    const view = new DataView(new ArrayBuffer(4));
    for (let i = 0; i < 4; i++) {
      view.setUint8(i, data.charCodeAt(offset + i));
    }
    return view.getFloat32(0, true); // little-endian format
  };

  // Create and update the point cloud in the scene
  const updatePointCloud = (points: THREE.Vector3[]) => {
    if (!pointsRef.current) return;

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.PointsMaterial({
      size: 0.05, // Küçük boyutlu noktalar
      color: 0x00ff00,
      opacity: 0.7,
      transparent: true,
    });

    pointsRef.current.geometry = geometry;
    pointsRef.current.material = material;
    pointsRef.current.visible = true;
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black text-white">
      <Canvas camera={{ fov: 60, far: 100, position: [0, 0, 50] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <points ref={pointsRef} />
        <OrbitControls />
      </Canvas>

      {lidarData ? (
        <p className="absolute top-0 left-0 text-center p-4">{lidarData}</p>
      ) : (
        <p className="absolute top-0 left-0 text-center p-4 opacity-50">🔄 Veri bekleniyor...</p>
      )}
    </div>
  );
}
