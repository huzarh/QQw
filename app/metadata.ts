import type { Metadata } from "next";

type Props = {
  params: { lang: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: "Khuzair Askyer - Mikroelektronik Mühendisliği Öğrencisi",
    description:
      "Khuzair Askyer, Sakarya Uygulamalı Bilimler Üniversitesi'nde Mikroelektronik Mühendisliği öğrencisi. Teknoloji ve tasarım tutkusuyla geleceğin elektronik sistemlerini şekillendiriyor.",
    keywords: [
      "Khuzair Askyer",
      "Mikroelektronik Mühendisliği",
      "Sakarya Üniversitesi",
      "elektronik sistemler",
      "teknoloji",
      "tasarım",
    ],
    icons: {
      icon: "/favicon.png",
    },
    openGraph: {
      title: "Khuzair Askyer - Mikroelektronik Mühendisliği Öğrencisi",
      description:
        "Khuzair Askyer, Sakarya Uygulamalı Bilimler Üniversitesi'nde Mikroelektronik Mühendisliği öğrencisi. Teknoloji ve tasarım tutkusuyla geleceğin elektronik sistemlerini şekillendiriyor.",
      images: [
        {
          url: "/assets/khuzairaskyer.jpeg",
          width: 800,
          height: 600,
          alt: "Khuzair Askyer",
        },
      ],
      url: `https://uzeyiraskyer.com/${params.lang}/khuzair`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Khuzair Askyer - Mikroelektronik Mühendisliği Öğrencisi",
      description:
        "Khuzair Askyer, Sakarya Uygulamalı Bilimler Üniversitesi'nde Mikroelektronik Mühendisliği öğrencisi. Teknoloji ve tasarım tutkusuyla geleceğin elektronik sistemlerini şekillendiriyor.",
      images: ["/assets/khuzairaskyer.jpeg"],
    },
  };
}