"use client";
import Footer from "@/components/Footer/page";
import About from "./pages/about";
import Projects from "@/components/Projects/page";
import { ContextProvider, useMyContext } from "@/context/context";
import Link from "next/link";

export default function Home() {
  const { value, setValue } = useMyContext();
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 left-0 w-full h-72 z-0 opacity-65 dark:opacity-25	drop-shadow-2xl">
        <img
          alt="Profile"
          src="/assets/2.jpeg"
          className="object-cover h-full w-full rounded-lg"
        />
      </div>
      {/* <div className="absolute pt-2 mt-72 left-0 w-full h-80 z-0 opacity-65 dark:opacity-25 	drop-shadow-2xl">
        <img
          alt="Profile"
          src="/assets/2.jpeg"
          className="object-cover h-full w-full"
        />
      </div> */}
      <p className="mt-6 border-l-2 pl-2 italic mt-4">
        "Sakla samanı, gelir zamanı"
      </p>
      <article className="relative z-10 flex flex-col items-center justify-between mb-44 pt-40">
        <img
          alt="Profile"
          src="/assets/profile.jpeg"
          className="inline-block h-56 w-56 rounded-full bg-white dark:bg-zinc-950  p-4"
        />
        <h3 className="text-2xl font-semibold tracking-tight pt-5 text-orange-400 font-iawriter">
          Khuzair Askyer
        </h3>
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
        {/* <h1>0000==={value}==</h1>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter some text"
        /> */}
      </article>
      <About />
      <br />
      <br />
      <br />
      <Projects />
      <Footer />
    </div>
  );
}
