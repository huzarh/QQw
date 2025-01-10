"use client";
import { FC } from "react";

export default function E_campus() {
  return (
    <div className="min-h-screen z-[99999] flex flex-col w-screen items-center justify-center bg-gray-50 p-4">
      <div className="text-center">
        {/* Başlık */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-800">
          <strong style={{ color: "#007BFF" }}>E</strong>_CAMPUS
        </h1>
        {/* Alt Başlık */}
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600 mt-4">
          public test server
        </h2>
        {/* Açıklama Metni */}
        <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-2 mb-8">
          ______  _______  ______  _______  ______  _______  
        </p>
        {/* İletişim Butonu */}
        <a
          onClick={() => alert("Whatsapp: +90 534 718 9425")}
          className="cursor-pointer"
        >
          <strong className="underline decoration-sky-500/[.33] text-sky-600 text-sm sm:text-base">
            #contact us
          </strong>
        </a>
      </div>
    </div>
  );
}