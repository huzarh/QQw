"use client";
import About from "./pages/about";
import Projects from "@/components/Projects/page";
import { ContextProvider, useMyContext } from "@/context/context";
import Link from "next/link";

export default function Home() {
  const { value, setValue } = useMyContext();
  return (
    <div className="relative w-full h-full">
      {/* <div className="absolute top-0 left-0 w-full h-full z-0   	">
        <img
          alt="Profile"
          src="https://i.etsystatic.com/41590512/r/il/4231c8/4962397306/il_1140xN.4962397306_p1h1.jpg"
          className="w-full h-[10%] bg-cover bg-center"
        />
      </div> */}
      <p className="mt-6 border-l-2 pl-6 italic">
        "Sakla samanı, gelir zamanı"
      </p>
      <article className="relative z-10 flex flex-col items-center justify-between mb-44 pt-40">
        <img
          alt="Profile"
          src="/assets/profile.jpeg"
          className="inline-block h-48 w-48 rounded-full border-solid border border-gray-400 p-2"
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
      <Projects />
    </div>
  );
}
