"use client";
import { useMyContext } from "@/context/context";
import { useTheme } from "next-themes";
import React from "react";

export default function Projects() {
  const { value, setValue } = useMyContext();
  const { theme } = useTheme();
  const projects = [
    {
      baslik: "# Günlük Haber Sitesi",
      // baslik: value,
      aciklama:
        "İlk projelerimden biri olarak, web teknolojilerini, içerik yönetimini ve veri aktarımını anlamama yardımcı oldu. Bu proje bana pratik deneyim kazandırdı. Bir web sitesi oluşturmanın ve yönetmenin temellerini öğrendim.",
      surec: 75,
      experience: [
        "HTML",
        "CSS",
        "JavaScript",
        `PHP-${theme === "dark" ? "Dark" : "Light"}`,
        `MySQL-${theme === "dark" ? "Dark" : "Light"}`,
      ],
    },
    {
      baslik: "📊 Öğrenciler İçin Yetenek Analizi",
      aciklama:
        "Bu proje, lise öğrencilerin yeteneklerini keşfetmelerine yardımcı olmayı amaçladı. Öğrenciler çeşitli beceri ve ilgi alanlarını girebilir ve bu bilgiler doğrultusunda kariyer seçim süreçleri kolaylaşabilirdi.",
      surec: 35,
      experience: [
        `Python-${theme === "dark" ? "Dark" : "Light"}`,
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    {
      baslik: "📚 BITurk – Türkçe Dil Öğrenme Uygulaması",
      aciklama:
        "BITurk, kullanıcılara Türkçe dilini öğrenmelerinde yardımcı olmak için tasarlanmış bir mobil ve web uygulamaydı. Bu proje, uygulama geliştirme konusundaki deneyimimi artırdı ve özellikle etkileşimli ve ilgi çekici öğrenme araçları tasarlamada tecrübe kazandım.",
      surec: 65,
      experience: [
        `Ubuntu-${theme === "dark" ? "Dark" : "Light"}`,
        `React-${theme === "dark" ? "Dark" : "Light"}`,
        `MaterialUI-${theme === "dark" ? "Dark" : "Light"}`,
        "Redux",
        "CSS",
        `ExpressJS-${theme === "dark" ? "Dark" : "Light"}`,
        "JavaScript",
        "MongoDB",
        `NodeJS-${theme === "dark" ? "Dark" : "Light"}`,
      ],
    },
    {
      baslik: "⌗ Gerçek Zamanlı Veri Aktarımı İçin NPM Kütüphanesi",
      aciklama:
        "Bu proje, gerçek zamanlı veri aktarımına odaklandı ve üniversitemin LMS sisteminde sınav takvimleri ve duyurularla ilgili gecikmeler yaşamamdan ilham aldım. Bu sorunu çözmek için, LMS platformlarına kolayca entegre edilebilecek basit bir kütüphane tasarladım. Bu kütüphane, duyuruların ve sınav takvimlerinin anında ulaşılmasını sağlıyor. Ayrıca, veri şifreleme ve şifre çözme özelliklerini entegre ederek veri güvenliği konusunda da önemli deneyimler edindim.",
      surec: 87,
      experience: [
        `Npm-${theme === "dark" ? "Dark" : "Light"}`,
        `React-${theme === "dark" ? "Dark" : "Light"}`,
        "CSS",
        `ExpressJS-${theme === "dark" ? "Dark" : "Light"}`,
        "MongoDB",
        `NodeJS-${theme === "dark" ? "Dark" : "Light"}`,
      ],
    },
    {
      baslik: "🎯 Sosyal Özelliklere Sahip Çevrimiçi Oyun",
      aciklama:
        "Bu kullanıcıların buluşup birlikte oyun oynamalarını sağlar. Gerçek zamanlı çok oyunculu sistemler, kullanıcı etkileşimi ve ölçeklenebilir çevrimiçi hizmetler kurmanın karmaşıklıkları hakkında çok şey öğrendim.",
      surec: 85,
      experience: [
        "Nginx",
        `React-${theme === "dark" ? "Dark" : "Light"}`,
        `MaterialUI-${theme === "dark" ? "Dark" : "Light"}`,
        "Redux",
        "CSS",
        `ExpressJS-${theme === "dark" ? "Dark" : "Light"}`,
        "JavaScript",
        "MongoDB",
        `NodeJS-${theme === "dark" ? "Dark" : "Light"}`,
      ],
    },
    {
      baslik: "🍪 3D Kurabiye Kalıbı Üretici",
      aciklama:
        "Bu projede, kullanıcılar resim yükleyip sistemin kenarları algılayarak 3D yazdırılabilir kurabiye kalıbı dosyaları oluşturmasını sağlayabiliyordu. Her ne kadar geniş çapta kullanılmasa da, tarayıcı ortamında görüntü konusunda geliştirdi. Ayrıca, kullanıcıların web üzerinde doğrudan çizim yapmasına olanak tanıyan bir özellik ekledim.",
      surec: 80,

      experience: [
        `TensorFlow-${theme === "dark" ? "Dark" : "Light"}`,
        `ThreeJS-${theme === "dark" ? "Dark" : "Light"}`,
        "HTML",
        "JavaScript",
      ],
    },
    {
      baslik: "🌍 360 Derece Sanal Tur Web Uygulaması",
      aciklama:
        "Three.js kullanarak sanal ortamları 360 derece keşfetme imkanı sunan bir web uygulaması geliştirdim. Bu proje, 3D teknolojileri ve etkileşimli kullanıcı deneyimleri oluşturmak için JavaScript çerçevelerindeki deneyimimi artırdı.",
      surec: 45,
      experience: [
        `ThreeJS-${theme === "dark" ? "Dark" : "Light"}`,
        `React-${theme === "dark" ? "Dark" : "Light"}`,
        "HTML",
        "JavaScript",
      ],
    },
    {
      baslik: "🏠 Uzaktan Ev Kontrol Uygulaması",
      aciklama:
        "Bu proje, WiFi sistemlerini kullanarak ev aletlerini uzaktan kontrol etmeye odaklandı ve gerçek zamanlı canlı izleme özelliklerine sahipti. IoT sistemleri, ağ oluşturma ve kullanıcı arayüzü geliştirme konularında deneyim kazandım. Ayrıca, donanım entegrasyonu, sinyal işleme ve enerji tasarrufu özelliklerini araştırarak, ev otomasyonu projelerinin hem yazılım hem de donanım yönlerinde geniş bir öğrenme deneyimi elde ettim.",
      surec: 89,
      experience: ["Arduino", "C", "Html"],
    },
  ];

  return projects.map((e, i) => (
    <article
      className="flex flex-col justify-between border-t border-indigo-150 pt-6 mt-2"
      key={i}
    >
      <div>
        <h2 className="font-bold underline underline-offset-4 mb-2">
          {e.baslik}
        </h2>
        <span>{e.aciklama}</span>
      </div>
      {e.experience && (
        <div>
          {e.experience.map((img, id) => (
            <img
              key={img + id}
              alt={img}
              src={`/assets/icons/${img}.svg`}
              className="inline-block h-10 w-10 p-2 cursor-pointer"
            />
          ))}
        </div>
      )}
    </article>
  ));
}
