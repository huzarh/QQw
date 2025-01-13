"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import GLBViewer from "@/components/render/glb/model";
import LidarMap from "./lidar-map";

export default function RobotControlPanel() {
  // Örnek LIDAR verileri (100-190 cm aralığında)
  const lidarData = [100, 110, 120, 130, 140, 150, 160, 170, 180, 190];

  // Diğer örnek veriler
  const qrScanned = true; // QR kod okundu mu?
  const distance = 120; // Mesafe sensörü verisi (cm)
  const motorTemperature = 75; // Motor sıcaklığı (°C)
  const isLoadPicked = true; // Yük alındı mı?

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">
        GUZERGAH Robot Araba Kontrol Paneli
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* LIDAR Verisi */}
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">LIDAR Verisi</CardTitle>
            <CardDescription className="dark:text-gray-400">
              Gerçek zamanlı LIDAR mesafe verileri
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LidarMap lidarData={lidarData} />
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">
              QR Kod ve Mesafe Sensörü
            </CardTitle>
            <CardDescription className="dark:text-gray-400">
              QR kod okuma durumu ve engel mesafesi
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* QR Kod Durumu */}
            <div className="text-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                QR Kod Durumu
              </p>
              <span
                className={`text-2xl font-bold ${
                  qrScanned ? "text-green-600" : "text-red-600"
                }`}
              >
                {qrScanned ? "OKUNDU" : "OKUNMADI"}
              </span>
            </div>

            {/* Mesafe Sensörü */}
            <div className="text-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Engel Mesafesi
              </p>
              <span className="text-2xl font-bold dark:text-white">
                {distance} cm
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">
              Motor ve Yük Durumu
            </CardTitle>
            <CardDescription className="dark:text-gray-400">
              Motor sıcaklığı ve yük durumu bilgileri
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Motor Sıcaklığı */}
            <div className="text-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Motor Sıcaklığı
              </p>
              <span className="text-2xl font-bold dark:text-white">
                {motorTemperature} °C
              </span>
              <Progress
                value={motorTemperature}
                className="mt-4 dark:bg-gray-600"
              />
            </div>

            {/* Yük Durumu */}
            <div className="text-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Yük Durumu
              </p>
              <span
                className={`text-2xl font-bold ${
                  isLoadPicked ? "text-green-600" : "text-red-600"
                }`}
              >
                {isLoadPicked ? "ALINDI" : "ALINMADI"}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* 3D Robot Modeli */}
        <Card className="col-span-full dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">3D Robot Modeli</CardTitle>
            <CardDescription className="dark:text-gray-400">
              Robot arabanın 3D görselleştirmesi
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[400px]">
            <GLBViewer glbPath="/models/glb/robot3.glb" />
          </CardContent>
        </Card>
      </div>

      {/* Kontrol Butonları */}
      <div className="mt-8 flex justify-center gap-4">
        <Button
          variant="default"
          className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          Başlat
        </Button>
        <Button
          variant="outline"
          className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          Durdur
        </Button>
      </div>
      <br />
      {/* Alt Kısım: Telif Hakkı Bilgisi */}
      <div className="border-t border-gray-300 dark:border-gray-700 pt-8 text-center">
        <p className="text-sm">Copyright © 2025 GUZERGAH</p>
      </div>
    </div>
  );
}
