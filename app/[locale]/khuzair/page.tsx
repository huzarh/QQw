"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";

export default function EmailNotificationCard() {
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-4">
      <Card className="w-full max-w-md dark:bg-gray-900 dark:border-gray-850">
        <CardHeader className="flex flex-row items-center space-x-4 align-center">
          <div className="relative">
            <Avatar className="w-14 h-14 animate-ping absolute opacity-75" />
            <Avatar className="w-14 h-14 relative">
              <Image
                src="/assets/khuzairaskyer.jpeg"
                alt="Khuzair Askyer - Mikroelektronik Mühendisliği Öğrencisi"
                width={56}
                height={56}
                className="rounded-full"
                priority
              />
              <AvatarFallback>KA</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <CardTitle className="text-xl dark:text-white font-semibold tracking-tight">
              <h1>Khuzair Askyer</h1>
            </CardTitle>
            <CardDescription className="text-sm dark:text-gray-300 font-medium text-gray-500">
              + 90 534 718 94 25
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-gray-200 font-bold text-lg mb-2">
            <h2>Mikroelektronik Mühendisliği Öğrencisi</h2>
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            Sakarya Uygulamalı Bilimler Üniversitesi&#39;nde Mikroelektronik
            Mühendisliği okuyorum. Teknoloji ve tasarım tutkusuyla, geleceğin
            elektronik sistemlerini şekillendirmek için çalışıyorum.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
