"use client"; // Ensure this component is only rendered on the client side

import { useEffect, useRef, useState } from "react";

type LidarData = {
  header: {
    seq: number;
    stamp: {
      secs: number;
      nsecs: number;
    };
    frame_id: string;
  };
  angle_min: number;
  angle_max: number;
  angle_increment: number;
  range_min: number;
  range_max: number;
  ranges: number[];
};

const CANVAS_WIDTH = 1024;
const SCALE = 80; // 1 metre = 50 pixels

export default function LidarMap360({ lidarData }: { lidarData: LidarData }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [robotImage, setRobotImage] = useState<HTMLImageElement | null>(null);
  const [canvasHeight, setCanvasHeight] = useState<number>(0); // Initialize canvas height

  // Set canvas height dynamically based on window height
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCanvasHeight(window.innerHeight);
    }
  }, []);

  // Robot PNG image load
  useEffect(() => {
    const img = new Image();
    img.src = "/assets/robot.png"; // Robot image from the public folder
    img.onload = () => {
      setRobotImage(img);
    };
  }, []);

  const drawLidarData = (ctx: CanvasRenderingContext2D) => {
    const { angle_min, angle_increment, ranges, range_min, range_max } = lidarData;

    // Clear the canvas
    ctx.clearRect(0, 0, CANVAS_WIDTH, canvasHeight);

    // Robot's position (center of the canvas)
    const robotX = CANVAS_WIDTH / 2;
    const robotY = canvasHeight / 2;

    // Draw LIDAR scan data
    ranges.forEach((range, index) => {
      if (range >= range_min && range <= range_max) {
        const angle = angle_min + index * angle_increment;
        const x = robotX + Math.cos(angle) * range * SCALE;
        const y = robotY + Math.sin(angle) * range * SCALE;

        // Draw detected point
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(x, y, 0.8, 0, 2 * Math.PI); // Draw point
        ctx.fill();

        // Draw line from center to the point
        ctx.strokeStyle = "gray"; // Line color
        ctx.lineWidth = 0.3; // Line thickness
        ctx.beginPath();
        ctx.moveTo(robotX, robotY); // Line start point (robot's center)
        ctx.lineTo(x, y); // Line end point (detected point)
        ctx.stroke();
      }
    });

    // Draw robot PNG image on top
    if (robotImage) {
      const robotWidth = 80; // Image width
      const robotHeight = 80; // Image height
      ctx.drawImage(
        robotImage,
        robotX - robotWidth / 2,
        robotY - robotHeight / 2,
        robotWidth,
        robotHeight
      );
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    drawLidarData(ctx);
  }, [lidarData, robotImage, canvasHeight]); // Redraw canvas when lidarData, robotImage, or canvasHeight changes

  return (
    <canvas
      ref={canvasRef}
      width={CANVAS_WIDTH}
      height={canvasHeight}
      style={{
        width: `${CANVAS_WIDTH}px`,
      }}
      className="h-full "
    ></canvas>
  );
}