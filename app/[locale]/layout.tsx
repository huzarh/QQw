// app/layout.tsx
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "../providers";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import HeaderWrapper from "@/components/HeaderWrapper"; // HeaderWrapper'ı import edin
import { Metadata } from "next";
import { appMetaData } from "@/lib/appMetaData";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(appMetaData.siteUrl), // Base URL for relative URLs
  title: {
    template: `%s | ${appMetaData.title}`, // Dynamic title template
    default: appMetaData.title, // Default title
  },
  description: appMetaData.description, // Website description
  keywords: [
    // Kişisel Marka ve Profesyonel Kimlik
    "Khuzair Askyer",
    "Üzeyir Askyer",
    "Hosooo",
    "Mechatronics Engineering Student",
    "FullStack Developer",
    "Мехатроникийн инженерийн оюутан",
    "FullStack хөгжүүлэгч",
    "Mekatronik Mühendisliği Öğrencisi",
  
    // Proje Odaklı Anahtar Kelimeler
    "Türkçe öğrenme uygulaması",
    "Türkçe dil eğitimi",
    "Türkçe öğrenmek için uygulama",
    "Türkçe pratik yapma",
    "Türkçe dil kursu",
    "Türkçe öğrenme platformu",
    "Türkçe öğrenme oyunları",
    "Türkçe öğrenme mobil uygulama",
    "Duolingo benzeri uygulama",
  
    // Teknik Beceriler ve Uzmanlıklar
    "AutoCAD",
    "3D Modelleme",
    "Tasarım ve Simülasyon",
    "Kinematik Simülasyon",
    "Yüzey Tasarımı",
    "3D Montaj tasarımı",
    "Mekatronik Tasarım",
    "Yazılım Geliştirme",
    "Web Geliştirme",
    "Mobil Uygulama Geliştirme",
    "Point cloud",
    "sakarya mn",
    "sakarya uyugulamalı bilimler universitesi",
    "SADEM"
  ],
  authors: [{ name: appMetaData.author, url: appMetaData.siteUrl }], // Author information
  openGraph: {
    title: appMetaData.title, // OpenGraph title
    description: appMetaData.description, // OpenGraph description
    url: appMetaData.siteUrl, // Full URL to the page
    siteName: appMetaData.title, // Website name
    images: [
      {
        url: `${appMetaData.siteUrl}${appMetaData.socialBanner}`, // Full URL to the OpenGraph image
        width: 1200,
        height: 630,
        alt: appMetaData.title, // Alt text for the image
      },
    ],
    locale: appMetaData.locale, // Locale (e.g., 'en-US')
    type: "website", // Type of content (e.g., 'website', 'article')
  },
  twitter: {
    card: "summary_large_image", // Twitter card type
    title: appMetaData.title, // Twitter title
    description: appMetaData.description, // Twitter description
    images: [`${appMetaData.siteUrl}${appMetaData.socialBanner}`], // Twitter image
  },
  robots: {
    index: true, // Allow search engines to index this page
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico", // Path to your favicon
    shortcut: "/favicon-16x16.png", // Path to your shortcut icon
    apple: "/apple-touch-icon.png", // Path to your Apple touch icon
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="en">
      <NextIntlClientProvider messages={messages}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} grid justify-items-center antialiased min-w-80`}
        >
          <meta
            name="google-site-verification"
            content="_6hZElubIlAU_jlpUA_eUuZnMudfeAWKbt_f0vwn2MI"
          />
          <Providers>
            <HeaderWrapper /> {/* Header yerine HeaderWrapper kullanın */}
            {children}
          </Providers>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
