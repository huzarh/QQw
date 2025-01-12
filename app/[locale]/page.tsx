"use client";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
 
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
    <main className="relative w-screen h-[300vh] overflow-hidden ">
      {/* 3D Model (Tam Ekran) */}
      {/* section 1 */}
      <div className="absolute inset-0 w-full h-screen">
        <GLTFViewer gltfPath="/models/gltf/nature/scene.gltf" />
      </div>
      {/* Açıklama Bölümü (400px x 400px) */}
      <div className="absolute top-[50vh] left-1/2 md:left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-[440px] h-[550px] dark:bg-teal-950 bg-white dark:bg-opacity-45 z-50 rounded-s-3xl rounded-e-3xl shadow-lg flex items-center justify-center overflow-hidden">
        <div className="w-full h-full  text-center flex flex-col items-center justify-start">
          <div className="pt-8">
            <h2 className="text-xl font-bold mb-2 dark:text-white text-slate-950">
              {ab("fullName")}
            </h2>
            <div className="text-gray-650 text-sm">
              {t("adage")}
            </div>
          </div>
          <GLTFViewer2 gltfPath="/models/gltf/face/scene.gltf" />
        </div>
      </div>
      <div className="absolute top-[90vh] right-[18vw] z-50 from-teal-900 via-teal-800 to-teal-700 flex items-center justify-center">
        <Button
          variant="outline"
          onClick={() => {
            window.scrollBy({
              top: 730, // Scrolls down 300px
              behavior: "smooth", // Smooth scroll animation
            });
          }}
        >
          Scroll Down
        </Button>
        
      </div>
      {/* section 2 */}
      <section className="absolute top-[100vh] w-full h-[1000px] bg-cyan-950 from-teal-900 via-teal-800 to-teal-700 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          ______
        </h1>
      </section>
      <section className="absolute top-[200vh] w-full h-[1000px] bg-slate-400 from-teal-900 via-teal-800 to-teal-700 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          ______
        </h1>
      </section>
      
    </main>
  );
}
