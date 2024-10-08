"use client";
import About from "./pages/about";
import Projects from "@/components/Projects/page";
import { ParallaxBanner } from "react-scroll-parallax";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      {/* <div className="absolute top-0 left-0 w-full h-full z-0   	">
        <img
          alt="Profile"
          src="https://i.etsystatic.com/41590512/r/il/4231c8/4962397306/il_1140xN.4962397306_p1h1.jpg"
          className="w-full h-[10%] bg-cover bg-center"
        />
      </div> */}

      <article className="relative z-10 flex flex-col items-center justify-between pt-40">
        <img
          alt="Profile"
          src="/assets/profile.jpeg"
          className="inline-block h-48 w-48 rounded-full border-solid border border-gray-400 p-2"
        />
        <h3 className="text-2xl font-semibold tracking-tight pt-5 pb-10 text-orange-400 font-iawriter">
          Khuzair Askyer
        </h3>
        <About />
        <Projects />
      </article>
    </div>
  );
}
