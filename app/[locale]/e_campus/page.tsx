"use client";
import { FC } from "react";
import Head from "next/head"; // Next.js'de Head component'ini kullanın

export default function E_campus() {
  return (
    <>
      {/* Meta Tag'ler */}
      <Head>
        <title>E_CAMPUS - Public Test Server</title>
        <meta name="description" content="E_CAMPUS genel test sunucusu. Daha fazla bilgi için bizimle iletişime geçin" />
        
        {/* Open Graph Meta Tags (Facebook, WhatsApp, Discord vb.) */}
        <meta property="og:title" content="E_CAMPUS - Public Test Server" />
        <meta property="og:description" content="E_CAMPUS genel test sunucusu. Daha fazla bilgi için bizimle iletişime geçin" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://uzeyiraskyer.com" /> {/* Sayfanızın URL'si */}
        <meta property="og:image" content="https://uzeyiraskyer.com/assets/store.png" /> 
        <meta property="og:site_name" content="E_CAMPUS" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="E_CAMPUS - Public Test Server" />
        <meta name="twitter:description" content="E_CAMPUS genel test sunucusu. Daha fazla bilgi için bizimle iletişime geçin" />
        <meta name="twitter:image" content="https://uzeyiraskyer.com/assets/icons/Twitter.svg" />
      </Head>

      {/* Sayfa İçeriği */}
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
    </>
  );
}