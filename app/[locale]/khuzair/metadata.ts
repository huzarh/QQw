import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khuzair Askyer - Mekatronik  Mühendisliği Öğrencisi",
  description:
    "Khuzair Askyer, Sakarya Uygulamalı Bilimler Üniversitesi'nde Mekatronik  Mühendisliği öğrencisi. Teknoloji ve tasarım tutkusuyla geleceğin elektronik sistemlerini şekillendiriyor.",
  keywords: [
    "Khuzair Askyer",
    "Mekatronik  Mühendisliği",
    "Sakarya Üniversitesi",
    "elektronik sistemler",
    "teknoloji",
    "tasarım",
  ],
  icons: {
    icon: "/assets/khuzairaskyer.jpeg", // Favicon for the page
  },
  openGraph: {
    title: "Khuzair Askyer - Mekatronik  Mühendisliği Öğrencisi",
    description:
      "Khuzair Askyer, Sakarya Uygulamalı Bilimler Üniversitesi'nde Mekatronik  Mühendisliği öğrencisi. Teknoloji ve tasarım tutkusuyla geleceğin elektronik sistemlerini şekillendiriyor.",
    images: [
      {
        url: "/assets/khuzairaskyer.jpeg", // Full URL recommended for production
        width: 800,
        height: 600,
        alt: "Khuzair Askyer",
      },
    ],
    url: "https://uzeyiraskyer.com/en/khuzair", // Full URL recommended for production
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khuzair Askyer - Mekatronik  Mühendisliği Öğrencisi",
    description:
      "Khuzair Askyer, Sakarya Uygulamalı Bilimler Üniversitesi'nde Mekatronik  Mühendisliği öğrencisi. Teknoloji ve tasarım tutkusuyla geleceğin elektronik sistemlerini şekillendiriyor.",
    images: ["/assets/khuzairaskyer.jpeg"], // Full URL recommended for production
  },
  alternates: {
    canonical: 'https://uzeyiraskyer.com/en/khuzair',
  },
}; 