// app/layout.tsx 
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "../providers";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import HeaderWrapper from "@/components/HeaderWrapper"; // HeaderWrapper'ı import edin

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