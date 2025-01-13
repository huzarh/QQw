"use client";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import Section2 from "@/components/test/section2";
import Footer from "@/components/Footer/page";

const GLTFViewer = dynamic(() => import("@/components/render/gltf/model"), {
  ssr: false, // Disable SSR for this component
});
const GLTFViewer2 = dynamic(() => import("@/components/render/gltf/model2"), {
  ssr: false, // Disable SSR for this component
});

export default function Test() {
  const t = useTranslations("common");
  const ab = useTranslations("about");

  return (
    <main className="relative w-screen min-h-[245vh] overflow-hidden">
      {/* Section 1: 3D Model (Full Screen) */}
      <div className="absolute inset-0 w-full h-screen">
        <GLTFViewer gltfPath="/models/gltf/nature/scene.gltf" />
      </div>

      {/* Description Box (Centered) */}
      <div className="absolute top-[50vh] left-1/2 md:left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[440px] h-[450px] md:h-[550px] dark:bg-teal-950 bg-white dark:bg-opacity-45 z-50 rounded-3xl shadow-lg flex items-center justify-center overflow-hidden">
        <div className="w-full h-full text-center flex flex-col items-center justify-start">
          <div className="pt-8">
            <h2 className="text-xl font-bold mb-2 dark:text-white text-slate-950">
              {ab("fullName")}
            </h2>
            <div className="text-gray-650 text-sm">{t("adage")}</div>
          </div>
          <GLTFViewer2 gltfPath="/models/gltf/face/scene.gltf" />
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute top-[90vh] right-[5%] md:right-[18vw] z-50">
        <Button
          variant="outline"
          onClick={() => {
            window.scrollBy({
              top: 730, // Scrolls down 730px
              behavior: "smooth", // Smooth scroll animation
            });
          }}
        >
          Scroll Down
        </Button>
      </div>

      {/* Section 2: Video Player */}
      <Section2 />

      {/* Section 3: Placeholder */}
      <div className="relative z-20 mt-[200vh]">
        <Footer />
      </div>
    </main>
  );
}