"use client"; 
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

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
    <main className="relative w-screen h-screen overflow-hidden ">   
      {/* 3D Model (Tam Ekran) */}
      <div className="absolute inset-0 w-full h-full">
        <GLTFViewer gltfPath="/models/gltf/nature/scene.gltf" />
      </div>

      {/* Açıklama Bölümü (400px x 400px) */}
      <div className="absolute top-1/2 left-1/2 md:left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-[440px] h-[500px] bg-teal-950 bg-opacity-45 z-50 rounded-s-3xl rounded-e-3xl shadow-lg flex items-center justify-center overflow-hidden">
        {" "}
        <div className="w-full h-full  text-center flex flex-col items-center justify-start">
          <div className="pt-8">
            {" "}
            <h2 className="text-xl font-bold mb-2 text-white">
            {ab("fullName")}
            </h2>
            <div
              className="text-gray-300 text-sm"
              // style={{ maxHeight: "70%" }}
            >
                {t("adage")}
            </div>
          </div>{" "}
          <GLTFViewer2 gltfPath="/models/gltf/face/scene.gltf" />
        </div>
      </div>
    </main>
  );
}
