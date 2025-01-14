import Royal from "@/components/render/gltf/royal";

export default function RoyalPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"> 
      <Royal gltfPath="/models/gltf/portrait/scene.gltf" />
    </div>
  );
}