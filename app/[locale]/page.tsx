"use client";
import Footer from "@/components/Footer/page";
import About from "../pages/about";
import Projects from "@/components/Projects/page";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  const t = useTranslations("common");
  const ab = useTranslations("about");
  return (
    <>
      <Head>
        <title>Ana Sayfa | Üzeyir</title>
        <meta name="description" content="Üzeyir'nin projelerine göz atın." />
      </Head>
      <main className="relative w-full h-full">
        <div className="absolute top-0 left-0 w-full h-72 z-0 opacity-65 dark:opacity-25 drop-shadow-2xl">
          <Image
            priority
            alt="background"
            src="/assets/uzeyir-draw.jpeg"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
        <p className="mt-6 border-l-2 pl-2 italic mt-4">{t("adage")}</p>
        <article className="relative z-10 flex flex-col items-center justify-between mb-44 pt-36">
          <Image
            alt={ab("profile_alt")}
            src="/assets/uzeyir-askyer.jpeg"
            height={240}
            width={224}
            style={{ objectFit: "cover" }}
            className="inline-block  rounded-full bg-white dark:bg-zinc-950 p-4"
          />
          <h1 className="text-2xl font-semibold tracking-tight pt-5 text-orange-400 font-iawriter">
            {ab("fullName")}
          </h1>
          <p className="flex justify-between items-center opacity-60 w-36 font-thin">
            <Link href="https://github.com/huzarh" className="cursor-pointer">
              <strong className="underline decoration-sky-500/[.33] text-orange-600">
                #github
              </strong>
            </Link>{" "}
            <a
              onClick={() => alert("Whatsapp: +7 775 520 0463")}
              className="cursor-pointer"
            >
              <strong className="underline decoration-sky-500/[.33] text-sky-600">
                #whatsapp
              </strong>
            </a>
          </p>
        </article>
        <About />
        <br />
        <br />
        <br />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
