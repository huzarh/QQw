"use client"; 
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import LidarMap360 from "./LidarMap";
import Draggable from "react-draggable"; // Import Draggable

const lidarData = {
  header: {
    seq: 123,
    stamp: {
      secs: 1674382245,
      nsecs: 987654321,
    },
    frame_id: "base_scan",
  },
  angle_min: 0.0, // Başlangıç açısı (0 radyan)
  angle_max: 2 * Math.PI, // Bitiş açısı (360 derece, 2π radyan)
  angle_increment: Math.PI / 180, // 1 derece artış (π/180 radyan)
  range_min: 0.12, // Minimum algılama mesafesi (metre)
  range_max: 3.5, // Maksimum algılama mesafesi (metre)
  ranges: Array(360).fill(3.5).map((_, i) => {
    const angle = (i * Math.PI) / 180; // İndeksi radyana çevir
    // Belirli açılarda eşyalar oluştur
    if (angle >= Math.PI / 4 - 0.1 && angle <= Math.PI / 4 + 0.1) return 1.0; // 45 derece yönünde bir eşya
    if (angle >= Math.PI / 2 - 0.1 && angle <= Math.PI / 2 + 0.1) return 2.0; // 90 derece yönünde bir eşya
    if (angle >= (3 * Math.PI) / 4 - 0.1 && angle <= (3 * Math.PI) / 4 + 0.1) return 1.5; // 135 derece yönünde bir eşya
    if (angle >= (3 * Math.PI) / 2 - 0.1 && angle <= (3 * Math.PI) / 2 + 0.1) return 3.0; // 270 derece yönünde bir eşya
    return 3.5; // Diğer açılarda maksimum menzil (boş alan)
  }),
};

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {/* LIDAR Verisi Card - Draggable */}
      <Draggable>
        <Card className="absolute z-50 dark:bg-gray-800 dark:border-gray-700 cursor-move">
          <CardHeader>
            <CardTitle className="dark:text-white">LIDAR Verisi</CardTitle>
            <CardDescription className="dark:text-gray-400">
              Gerçek zamanlı LIDAR mesafe verileriler en uzak en yakın vb
            </CardDescription>
          </CardHeader>
        </Card>
      </Draggable>

      {/* Kamera Görüntüsü Card - Draggable */}
      <Draggable>
        <Card className="absolute z-50 dark:bg-gray-800 dark:border-gray-700 cursor-move">
          <CardHeader>
            <CardTitle className="dark:text-white">Kamera Görüntüsü</CardTitle>
            <CardDescription className="dark:text-gray-400">
              Gerçek zamanlı kamera görüntüsü
            </CardDescription>
          </CardHeader>
          {/* Kamera Görüntüsü (PNG) */}
          <div className="p-4">
            <img
              src="/assets/test.png" // Kamera görüntüsü (PNG) dosyası
              alt="Kamera Görüntüsü"
              className="w-64 h-48 object-cover rounded-lg"
            />
          </div>
        </Card>
      </Draggable>

      {/* LIDAR Haritası */}
      <LidarMap360 lidarData={lidarData} />

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 z-50">
        <div className="flex justify-between items-center">
          {/* QR Code */}
          <div className="flex items-center bg-gray-100 rounded">
            <img
              src="/assets/qr.png" // QR code image
              alt="QR Code"
              className="w-12 h-12"
            />
            <span className="ml-2 dark:text-black pr-2">QR Kod</span>
          </div>

          {/* Mesafe */}
          <div className="text-center">
            <span className="block text-sm dark:text-gray-400">Mesafe</span>
            <span className="text-lg font-bold dark:text-white">2.5 m</span>
          </div>

          {/* Motor Sıcaklık */}
          <div className="text-center">
            <span className="block text-sm dark:text-gray-400">Motor Sıcaklık</span>
            <span className="text-lg font-bold dark:text-white">45°C</span>
          </div>

          {/* Yük Durumu */}
          <div className="text-center">
            <span className="block text-sm dark:text-gray-400">Yük Durumu</span>
            <span className="text-lg font-bold dark:text-white">Yük Yok</span>
          </div>
        </div>
      </footer>
    </div>
  );
}