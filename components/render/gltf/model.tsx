import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

type GLTFViewerProps = {
  gltfPath: string;
};

const GLTFModel: React.FC<{ gltfPath: string }> = ({ gltfPath }) => {
  const gltf = useLoader(GLTFLoader, gltfPath);
  const { scene } = gltf;

  // Modelin sınırlarını hesapla
  const bbox = new THREE.Box3().setFromObject(scene);
  const center = new THREE.Vector3();
  bbox.getCenter(center); // Modelin merkezini bul

  // Modeli orijine taşı (merkezde olması için)
  scene.position.sub(center);

  return <primitive object={scene} />;
};

const GLTFViewer: React.FC<GLTFViewerProps> = ({ gltfPath }) => {
  return (
    <div style={{ width: "100%", height: "80vh", border: "1px solid rgb(69,69,137)", borderRadius: 20 ,backgroundColor:"#D6CFC1"}}>

      <Canvas camera={{ position: [3, 0, 5], fov: 22 }}>
        {/* Arka plandan gelen güneş benzeri ışık 
        <directionalLight
          position={[-90, 10, -10]} // Işığın konumu (modelin arkasından geliyor)
          intensity={2} // Işık şiddeti  ckgroundImage: 'url("/assets/1.")', backgroundSize: 'cover'
          color={"blue"} // Güneş rengi (sarımsı turuncu)
        />*/}

        {/* Ortam ışığı */}
        <ambientLight intensity={1.} />

        {/* Model */}
        <Suspense fallback={null}>
          <GLTFModel gltfPath={gltfPath} />
        </Suspense>

        {/* OrbitControls */}
        <OrbitControls
          makeDefault // OrbitControls'u varsayılan kontroller yap
          target={[0, 0, 0]} // Modelin merkezine odaklan
          minDistance={1} // Kameranın modele minimum yakınlaşma mesafesi
          maxDistance={6} // Kameranın modelden maksimum uzaklaşma mesafesi
          minPolarAngle={0} // Kameranın minimum dikey açısı (radyan cinsinden)
          maxPolarAngle={Math.PI / 2} // Kameranın maksimum dikey açısı (radyan cinsinden)
          enablePan={true} // Pan (kaydırma) özelliğini devre dışı bırak
        />
      </Canvas>
    </div>
  );
};

export default GLTFViewer;