// app/layout.tsx
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "../providers";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import HeaderWrapper from "@/components/HeaderWrapper";  
import { globalMetaInfo } from '../../lib/info'; // globalMetaInfo nesnesini import edin

export const metadata = {
  // Varsayılan site başlığı
  title: {
    default: globalMetaInfo.defaultTitle, // Varsayılan başlık
    template: `%s | ${globalMetaInfo.siteName}`, // Sayfa başlığı + site adı
  },
  // Varsayılan site açıklaması
  description: globalMetaInfo.defaultDescription,
  // Varsayılan anahtar kelimeler
  keywords: globalMetaInfo.defaultKeywords.join(', '),
  // Open Graph meta verileri
  openGraph: {
    title: globalMetaInfo.defaultTitle,
    description: globalMetaInfo.defaultDescription,
    url: globalMetaInfo.defaultUrl,
    type: 'website',
    images: [
      {
        url: globalMetaInfo.defaultOgImage,
        width: 1200,
        height: 630,
        alt: globalMetaInfo.defaultTitle,
      },
    ],
    siteName: globalMetaInfo.siteName,
  },
  // Twitter Card meta verileri
  twitter: {
    card: 'summary_large_image',
    title: globalMetaInfo.defaultTitle,
    description: globalMetaInfo.defaultDescription,
    images: [globalMetaInfo.defaultOgImage],
  },
  // Diğer meta veriler
  metadataBase: new URL(globalMetaInfo.defaultUrl), // Temel URL
  alternates: {
    canonical: globalMetaInfo.defaultUrl, // Canonical URL
  },
};

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
