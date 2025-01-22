"use client";

import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Khuzair() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    author: "khuzairaskyer",
    isPublished: true,
    tags: [
      "Khuzair Askyer",
      "Mekatronik Mühendisliği",
      "Öğrenci",
      "Yazılım Geliştirme",
      "Web Geliştirme",
      "Full Stack Developer",
      "CAD",
      "AutoCAD",
      "3D Modelleme",
      "Tasarım ve Simülasyon",
      "Kinematik Simülasyon",
      "Yüzey Tasarımı",
      "3D Montaj tasarımı",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-transparent flex items-center justify-center p-4">
        <Card className="w-full max-w-md dark:bg-gray-900 dark:border-gray-850">
          <CardHeader className="flex flex-row items-center space-x-4 align-center">
            <div className="relative">
              <Avatar className="w-14 h-14 animate-ping absolute opacity-75" />
              <Avatar className="w-14 h-14 relative">
                <Image
                  src="/assets/khuzairaskyer.jpeg"
                  alt="Khuzair Askyer - Mekatronik Mühendisliği Öğrencisi"
                  width={56}
                  height={56}
                  className="rounded-full"
                  priority
                />
                <AvatarFallback>KA</AvatarFallback>
              </Avatar>
            </div>
            <div>
              {/* Use CardTitle directly without nesting <h1> */}
              <CardTitle className="text-xl dark:text-white font-semibold tracking-tight">
                Khuzair Askyer
              </CardTitle>
              <CardDescription className="text-sm dark:text-gray-300 font-medium text-gray-500">
                + 90 534 718 94 25
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            {/* Use <div> instead of <p> for the heading */}
            <div className="text-gray-700 dark:text-gray-200 font-bold text-lg mb-2">
              <h2>Mekatronik Mühendisliği Öğrencisi</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            Mekatronik ve yazılım alanındaki bilgilerimi birleştirerek IoT tabanlı otomasyon sistemleri ve web tabanlı kontrol panelleri geliştiriyorum. Gerçek zamanlı veri izleme, uzaktan kontrol ve verimli süreç yönetimi konularında çözümler sunuyorum.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}