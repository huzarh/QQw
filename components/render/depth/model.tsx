"use client"; // Mark as a Client Component
import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import * as THREE from "three";
import * as dat from "dat.gui"; // Doğru şekilde içe aktar

type DepthMapViewerProps = {
  depthMapPath: string; // Path to the depth map PNG
  texturePath: string; // Path to the texture PNG (optional)
};

const DepthMapModel: React.FC<DepthMapViewerProps & { wireframe: boolean }> = ({
  depthMapPath,
  texturePath,
  wireframe,
}) => {
  const depthMap = useLoader(TextureLoader, depthMapPath); // Load depth map
  const texture = useLoader(TextureLoader, texturePath); // Load texture
  const meshRef = useRef<THREE.Mesh>(null);
  const [geometry, setGeometry] = useState<THREE.BufferGeometry | null>(null);

  // Create 3D geometry from depth map
  useEffect(() => {
    if (typeof document !== "undefined") {
      const depthData = getDepthData(depthMap);
      const newGeometry = createDepthMapGeometry(depthMap, depthData);
      setGeometry(newGeometry);
    }
  }, [depthMap]);

  if (!geometry) return null; // Don't render until geometry is ready

  return (
    <>
      {/* Ana Mesh (Wireframe veya Texture) */}
      <mesh ref={meshRef} geometry={geometry}>
        {wireframe ? (
          // Wireframe modunda segmentleri göster
          <meshBasicMaterial
            wireframe={true}
            color="white" // Segment rengi
          />
        ) : (
          // Normal modda texture'yi göster
          <meshStandardMaterial
            map={texture}
            wireframe={false}
          />
        )}
      </mesh>

      {/* Wireframe Modunda Segment Çizgileri ve Noktalar */}
      {wireframe && (
        <>
          {/* Segment Çizgileri (Optimize Edilmiş) */}
          <lineSegments>
            <edgesGeometry attach="geometry" args={[geometry]} />
            <lineBasicMaterial color="cyan" linewidth={1} />
          </lineSegments>

          {/* Noktalar (Optimize Edilmiş) */}
          <points>
            <bufferGeometry attach="geometry" {...geometry} />
            <pointsMaterial color="red" size={0.05} /> {/* Nokta boyutunu küçült */}
          </points>
        </>
      )}
    </>
  );
};

// Create geometry from depth map
const createDepthMapGeometry = (depthMap: THREE.Texture, depthData: number[]) => {
  const width = depthMap.image.width;
  const height = depthMap.image.height;
  const geometry = new THREE.PlaneGeometry(5, 5, width / 2 - 1, height / 2 - 1); // Segment sayısını azalt

  // Displace vertices based on depth data
  const vertices = geometry.attributes.position.array;

  for (let i = 0; i < vertices.length; i += 3) {
    const x = (i / 3) % (width / 2);
    const y = Math.floor(i / 3 / (width / 2));
    const depth = depthData[y * width + x * 2]; // Depth map'ten veri al
    vertices[i + 2] = depth * 2; // Adjust Z-axis based on depth
  }

  geometry.attributes.position.needsUpdate = true;
  geometry.computeVertexNormals(); // Recalculate normals for lighting

  return geometry;
};

// Extract depth data from depth map
const getDepthData = (depthMap: THREE.Texture) => {
  const canvas = document.createElement("canvas");
  canvas.width = depthMap.image.width;
  canvas.height = depthMap.image.height;

  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas context not available");

  ctx.drawImage(depthMap.image, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

  const depthData = [];
  for (let i = 0; i < imageData.length; i += 4) {
    const depth = imageData[i] / 255; // Normalize grayscale value (0-1)
    depthData.push(depth);
  }

  return depthData;
};

const DepthMapViewer: React.FC<DepthMapViewerProps> = ({ depthMapPath, texturePath }) => {
  const [wireframe, setWireframe] = useState(false); // Wireframe state

  // dat.gui ayarları
  useEffect(() => {
    const gui = new dat.GUI(); // Doğru şekilde GUI örneği oluştur
    const controls = {
      wireframe: wireframe, // Wireframe kontrolü
    };

    // Wireframe kontrolünü ekle
    gui.add(controls, "wireframe")
      .name("Wireframe")
      .onChange((value: boolean) => setWireframe(value));

    // Component unmount olduğunda GUI'yi temizle
    return () => {
      gui.destroy();
    };
  }, [wireframe]);

  return (
    <div style={{ width: "100%", height: "80vh", border: "1px solid rgb(69,69,137)", borderRadius: 20, backgroundColor: "#D6CFC1" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 22 }} antialias={false}>         
        <ambientLight intensity={1} />

        {/* Depth map model */}
        <Suspense fallback={null}>
          <DepthMapModel depthMapPath={depthMapPath} texturePath={texturePath} wireframe={wireframe} />
        </Suspense>

        {/* OrbitControls */}
        <OrbitControls
          makeDefault
          target={[0, 0, 0]}
          minDistance={1}
          maxDistance={10}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
          enablePan={true}
        />
      </Canvas>
    </div>
  );
};

export default DepthMapViewer;