"use client";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function CustomPopover({ triggerText, content }: { triggerText: string; content: JSX.Element }) {
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setIsOpen(false), 300); // 300ms gecikme
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <span
          className="text-blue-500 cursor-pointer hover:underline"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {triggerText}
        </span>
      </PopoverTrigger>
      <PopoverContent
        className="w-80"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </PopoverContent>
    </Popover>
  );
}


export default function ClientComponent() { 

return (
  <div className="h-full preview-width md:w-1/2 rounded-md p-6">
    <h1 className="text-3xl font-bold mb-4 pb-2 border-b border-gray-850">
      ÜZEYİR ASKYER
    </h1>
    <p className="text-lg mb-4">
      Mekatronik Mühendisliği Öğrencisi | IoT ve Otomasyon Sistemleri
      Geliştirici
    </p>
    <p className="mb-4">
      Mekatronik ve yazılım alanındaki bilgilerimi birleştirerek IoT tabanlı
      otomasyon sistemleri ve web tabanlı kontrol panelleri geliştiriyorum.
      Gerçek zamanlı veri izleme, uzaktan kontrol ve verimli süreç yönetimi
      konularında çözümler sunuyorum.
    </p>
    <p className="mb-4"> Anahtar:</p>
    <ul className="list-disc list-inside mb-4">
      <li>IoT ve Otomasyon</li>
      <li>Gerçek Zamanlı Veri İzleme</li>
      <li>Yazılım ve Robotik Entegrasyonu</li>
      <li>Web Tabanlı Sistemler</li>
      <li>Veri Güvenliği ve Yönetimi</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6 mb-4 pb-2 border-b border-gray-850">
      İLETİŞİM
    </h2>
    <p className="mb-2">
📞 Telefon:{" "}
<a
  href="tel:+905347189425"
  className="text-blue-500 hover:underline"
>
  +90 534 718 94 25
</a>
</p>

    <p className="mb-2">
    📨 E-posta:{" "}
      <a
        href="mailto:huzarh44@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        huzarh44@gmail.com
      </a>
    </p>
    <p className="mb-2">
    🔧 GitHub:{" "}
      <a
        href="https://github.com/huzarh"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        github.com/huzarh
      </a>
    </p>
    <p className="mb-4">
      🔗 LinkedIn:{" "}
      <a
        href="https://www.linkedin.com/in/uzeyiraskyer/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        linkedin.com/in/uzeyiraskyer
      </a>
    </p>

    <h2 className="text-2xl font-bold mt-6 mb-4 pb-2 border-b border-gray-850">
      EĞİTİM
    </h2>
    <p className="mb-4">
      <strong>SUBÜ – Mekatronik Mühendisliği</strong>
    </p>

    <h2 className="text-2xl font-bold mt-6 mb-4 pb-2 border-b border-gray-850">
      TEKNİK YETENEKLER
    </h2>
    <p className="mb-2">
      <strong>CAD ve Elektronik</strong>: CATIA, AutoCAD, Altium, Proteus
    </p>
    <p className="mb-2">
      <strong>Programlama Dilleri</strong>: JavaScript, C/Cpp, Python
    </p>
    <p className="mb-2">
      <strong>Arayüz</strong>: React.js, Next.js, Three.js, Vue.js,
      Material-UI, Figma
    </p>
    <p className="mb-2">
      <strong>Server</strong>: Node.js, Express.js, Ubuntu&amp;Nginx
    </p>
    <p className="mb-2">
      <strong>Veritabanları</strong>: MongoDB, MySQL, Firebase
    </p>
    <p className="mb-2">
      <strong>Robotik ve Otomasyon</strong>: ROS (Neotic), uzaktan komutlu
      sistemler, endüstriyel otomasyon araçları
    </p>
    <p className="mb-2">
      <strong>Araçlar ve Tool</strong>: Git, GitHub, npm, yarn
    </p>
    <p className="mb-4">
      <strong>İletişim Protokolleri</strong>: WebSocket (WS), MQTT, HTTP/HTTPS
    </p>

    <h2 className="text-2xl font-bold mt-6 mb-4 pb-2 border-b border-gray-850">
      PROJELER ve Araştırma
    </h2>
    <p className="mb-2">
      <strong>
        1. Lidar Sensör ve 3D Tarama Teknolojisi Üzerine Araştırma (Özet)
      </strong>
    </p>
    <ul className="list-disc pl-5 mb-4">
    <li className="ml-2">
    Kızılötesi lazer ve fotodetektör kullanarak lidar sensör tasarımı
    üzerine araştırmalar{" "}
        <CustomPopover
          triggerText="yapıldı"
          content={
            <div className="flex flex-col items-center gap-4">
              <img
                src="/assets/osc.jpeg"
                alt="Khuzair Point Cloud"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-gray-600">Araştırma</p>
            </div>
          }
        />. Şu an, test sensörüyle alınan verilerle
        2D (range: 9.5m) tarama yapılabiliyor.
      </li> 
      <li className="ml-2">
        Sensörü geliştirmek için C++ ile veri analizi ve optimizasyon
        script’leri yazılmakta, verimliliği artırmayı ve modern lidar sensör
        performansında 70% ücüz sensör yapayı hedefliyorum.
      </li>
      <li className="ml-2">
        Altium ile PCB tasarımına başlanmış olup, sensör ve veri işleme
        sisteminin entegrasyonu için çalışıyorum.
      </li>
    </ul>

    <p className="mb-2">
      <strong>
        2. Tetra Otonom Sürücü Aracı ve Güzergah Topluluğunda Çalışmalar
      </strong>
    </p>
    <ul className="list-disc pl-5 mb-4">
      <li className="mb-2">
        Tetra Otonom Sürücü Aracı: Otonom sürüş sistemleri ve yazılım
        geliştirmede yer aldım.
      </li>
      <li className="mb-2">
        Güzergah Topluluğu: Uzaktan kontrol arayüzü geliştirerek, araçların
        izlenmesini <CustomPopover
          triggerText="sağladım"
          content={
            <div className="flex flex-col items-center gap-4">
              <img
                src="/assets/2dscan.png"
                alt="Khuzair Point Cloud"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-gray-600">geliştiriyoruz</p>
            </div>
          }
        />.
      </li>
    </ul>

    <p className="mb-2">
      <strong>3. Three.js ile 3D Point Cloud Görselleştirme</strong>
    </p>
    <ul className="list-disc list-inside mb">
      <li>
        Three.js ile 3D{" "}
        <CustomPopover
          triggerText="point cloud"
          content={
            <div className="flex flex-col items-center gap-4">
              <img
                src="/assets/point_clouds.png"
                alt="Khuzair Point Cloud"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-gray-600">Point cloud render.</p>
            </div>
          }
        />{" "}
        render edildi.
      </li>
      <li>WebSocket ile gerçek zamanlı veri senkronizasyonu sağlandı.</li>
    </ul>

    <p className="mb-2">
      <strong>4. Web Tabanlı Uzaktan Komutlu Otomasyon Sistemi (IoT)</strong>
    </p>
    <ul className="list-disc pl-5 mb-4">
      <li className="mb-2">
        Node.js ve React.js kullanarak geliştirdiğim sistem, gerçek zamanlı
        veri izleme ve uzaktan kontrol imkanı sunarak işletmelerin operasyonel
        verimliliğini artırmayı hedeflemektedir.
      </li>
    </ul>

    <h2 className="text-2xl font-bold mt-6 mb-4 pb-2 border-b border-gray-850">
      DİL BECERİLERİ
    </h2>
    <p className="mb-4 pb-2 border-b border-gray-850">
      <strong>Türkçe</strong>: C1
      <br />
      <strong>İngilizce</strong>: B1
      <br />
      <strong>Kazakça</strong>: B2
      <br />
      <strong>Moğolca</strong>: Ana dil
    </p>

    <p className="mt-6 pb-2 border-b border-gray-850 ont-sans font-normal">
    📎 Okuduğunuz için teşekkür ederim. Eksiklerimi veya geliştirebileceğim
      yönlerimi bana söylerseniz çok memnun olurum. Geri bildirim benim için
      değerlidir.
    </p>

    <p className="text-xs text-gray-300  mt-5 align-middle justify-self-center">
      <strong>2025 © Khuzair Askyer</strong>
    </p>
  </div>
);
}