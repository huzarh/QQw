"use client";

import { useEffect, useRef } from "react";

interface LidarMapProps {
  lidarData: number[]; // LIDAR mesafe verileri (cm cinsinden)
}

export default function LidarMap({ lidarData }: LidarMapProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Canvas'ı temizle
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // LIDAR verilerini çiz
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const angleIncrement = (2 * Math.PI) / lidarData.length; // Her bir LIDAR verisi arasındaki açı

    // Oda duvarlarını çiz
    ctx.strokeStyle = "blue";
    ctx.beginPath();

    lidarData.forEach((distance, index) => {
      const angle = index * angleIncrement;
      const x = centerX + distance * Math.cos(angle);
      const y = centerY + distance * Math.sin(angle);

      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });

    ctx.closePath();
    ctx.stroke();

    // Robotun konumunu çiz (merkezde bir daire)
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(centerX, centerY, 5, 0, 2 * Math.PI);
    ctx.fill();
  }, [lidarData]);

  return <canvas ref={canvasRef} width={400} height={400} className="border border-gray-300" />;
}