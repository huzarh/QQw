import GLBViewer from "@/components/render/glb/model";
import dynamic from "next/dynamic";
import Head from "next/head";

const GLTFViewer = dynamic(() => import("@/components/render/gltf/model"), {
  ssr: false, // Disable SSR for this component
});

const DepthMapViewer = dynamic(() => import("@/components/render/depth/model"), {
  ssr: false, // Disable SSR for this component
});

export default function Test() {
  return (
    <>
    <Head>
      <title>Ana Sayfa | Üzeyir</title>
      <meta name="description" content="Üzeyir'nin projelerine göz atın." />
    </Head>
    <main className="relative w-[550px] h-full">
    <div className="absolute top-0 left-0 w-full h-72 z-0  drop-shadow-2xl">
      hi
      <br />
      <GLTFViewer gltfPath="/models/gltf/nature/scene.gltf" />
      <GLBViewer glbPath="/models/test3.glb" />
      <DepthMapViewer depthMapPath="/assets/test.png" texturePath="/assets/test.png" />
    </div>
    </main>
    </>
  );
}