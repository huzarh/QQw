"use client"; // Next.js'de client-side kod için bu directive gereklidir

import React, { useState, useEffect } from "react";
import { MenubarDemo } from "./bar";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true); // Header'ın görünürlüğünü kontrol eder
  const [prevScrollPos, setPrevScrollPos] = useState(0); // Önceki scroll pozisyonunu saklar

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Aşağı kaydırma durumunda Header'ı gizle
      if (currentScrollPos > prevScrollPos) {
        setIsVisible(false);
      }
      // Yukarı kaydırma durumunda Header'ı göster
      else {
        setIsVisible(true);
      }

      // Önceki scroll pozisyonunu güncelle
      setPrevScrollPos(currentScrollPos);
    };

    // Scroll event'ini dinle
    window.addEventListener("scroll", handleScroll);

    // Temizleme fonksiyonu: Component unmount olduğunda event listener'ı kaldır
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`w-full p-6 md:w-[1024px] flex justify-between items-center fixed z-[1000] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <h2 className="w-10 cursor-pointer border-b text-3xl font-semibold tracking-tight">
        Uz
      </h2>
      <MenubarDemo />
    </div>
  );
}