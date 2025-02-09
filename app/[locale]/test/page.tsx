"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LidarMap360 from "./LidarMap";
import Draggable from "react-draggable";
import ROSLIB from "roslib";
import { useEffect, useState } from "react";

export default function Home() {
  // State to store live LiDAR data
  const [lidarData, setLidarData] = useState(null);

  useEffect(() => {
    // Create a ROS connection
    const ros = new ROSLIB.Ros({
      url: "ws://localhost:9090", // Replace with your ROSBridge WebSocket URL
    });

    // Handle connection events
    ros.on("connection", () => {
      console.log("Connected to ROSBridge");
    });

    ros.on("error", (error) => {
      console.error("Error connecting to ROSBridge:", error);
    });

    ros.on("close", () => {
      console.log("Connection to ROSBridge closed");
    });

    // Subscribe to the LiDAR topic
    const lidarTopic = new ROSLIB.Topic({
      ros: ros,
      name: "/lidar", // Replace with your LiDAR topic name
      messageType: "sensor_msgs/LaserScan", // Replace with the correct message type
    });

    lidarTopic.subscribe((message) => {
      console.log("Received LiDAR data:", message);
      // Update state with live LiDAR data
      setLidarData(message);
    });

    // Cleanup the subscription when the component unmounts
    return () => {
      lidarTopic.unsubscribe();
      ros.close();
    };
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    author: "khuzairaskyer",
    isPublished: true,
    tags: ["GUZARGAH | SUBÜ"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="w-screen h-screen flex justify-center items-center">
        {/* LIDAR Verisi Card - Draggable */}
        <div className="fixed inset-0 bg-red-500 z-[9999] sm:hidden flex items-center justify-center">
          <p className="text-white text-2xl font-bold">
            bilgisayardan açmanız lazım
          </p>
        </div>
        <Draggable defaultPosition={{ x: -420, y: -270 }}>
          <Card className="absolute z-50 dark:bg-gray-800 dark:border-gray-700 cursor-move">
            <CardHeader>
              <CardTitle className="dark:text-white">LIDAR Verisi</CardTitle>
              <CardDescription className="dark:text-gray-400">
                Gerçek zamanlı LIDAR mesafe verileri en uzak en yakın vb
              </CardDescription>
            </CardHeader>
          </Card>
        </Draggable>

        {/* Kamera Görüntüsü Card - Draggable */}
        <Draggable defaultPosition={{ x: -490, y: 0 }}>
          <Card className="absolute z-50 dark:bg-gray-800 dark:border-gray-700 cursor-move">
            <CardHeader>
              <CardTitle className="dark:text-white">Kamera Görüntüsü</CardTitle>
              <CardDescription className="dark:text-gray-400">
                bu canlı olacak
              </CardDescription>
            </CardHeader>
            {/* Kamera Görüntüsü (PNG) */}
            <div className="p-4">
              <img
                src="/assets/lidarrobo.png" // Kamera görüntüsü (PNG) dosyası
                alt="Kamera Görüntüsü"
                className="w-64 h-48 object-cover rounded-lg"
              />
            </div>
          </Card>
        </Draggable>

        {/* LIDAR Haritası */}
        {lidarData ? (
          <LidarMap360 lidarData={lidarData} />
        ) : (
          <p className="text-white">Loading LiDAR data...</p>
        )}

        {/* Footer */}
        <div className="fixed right-0 top-0 bottom-0 w-32 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 z-50">
          <div className="flex flex-col gap-8">
            {/* QR Code */}
            <div className="flex items-center bg-gray-100 rounded">
              <img
                src="/assets/qr.png" // QR code image
                alt="QR Code"
                className="w-12 h-12"
              />
              <span className="ml-2 dark:text-black ">QR Kod</span>
            </div>
            {/* Mesafe */}
            <div className="text-center">
              <span className="block text-sm dark:text-gray-400">Mesafe</span>
              <span className="text-lg font-bold dark:text-white">
                {lidarData?.ranges?.length > 0
                  ? Math.min(...lidarData.ranges).toFixed(2) + " m"
                  : "N/A"}
              </span>
            </div>
            {/* Motor Sıcaklık */}
            <div className="text-center">
              <span className="block text-sm dark:text-gray-400">
                Motor Sıcaklık
              </span>
              <span className="text-lg font-bold dark:text-red-700">999°C</span>
            </div>
            {/* Yük Durumu */}
            <div className="text-center">
              <span className="block text-sm dark:text-gray-400">Yük Durumu</span>
              <span className="text-lg font-bold dark:text-red-700">Yük Yok</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}