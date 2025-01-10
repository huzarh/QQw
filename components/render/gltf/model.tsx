"use client"; // Mark as a Client Component

import React, { Suspense,useEffect } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls,PerspectiveCamera  } from "@react-three/drei";
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
function CustomCamera() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(-8, -6, -1);
    camera.fov = 26;
    camera.rotation.set(Math.PI / -8, 0, Math.PI / 5); // Rotate 8 degrees on the X-axis
    camera.updateProjectionMatrix(); // Apply changes
  }, [camera]);

  return null;
}

const GLTFViewer: React.FC<GLTFViewerProps> = ({ gltfPath }) => {
  return (
    <div className="w-full h-screen">

      <Canvas   > 
      <CustomCamera />
        
        {/* Arka plandan gelen güneş benzeri ışık  */}
        {/* <directionalLight
          position={[-90, 10, -10]} // Işığın konumu (modelin arkasından geliyor)
          intensity={52} // Işık şiddeti  ckgroundImage: 'url("/assets/1.")', backgroundSize: 'cover'
          color={"blue"} // Güneş rengi (sarımsı turuncu)
        /> */}
 
        {/* Ortam ışığı */}
        {/* <ambientLight intensity={2} /> */}

        {/* Model */}
        <Suspense fallback={null}>
          <GLTFModel gltfPath={gltfPath} />
        </Suspense>

        {/* Eksen Yardımcısı */}
        {/*<axesHelper args={[50]} />  5 birim uzunluğunda bir eksen çizer */}
        {/* OrbitControls */}
        <OrbitControls 
          makeDefault // OrbitControls'u varsayılan kontroller yap
          target={[-1, -5, 8]} // Modelin merkezine odaklan
          minDistance={6} // Kameranın modele minimum yakınlaşma mesafesi
          maxDistance={30} // Kameranın modelden maksimum uzaklaşma mesafesi
          minPolarAngle={Math.PI / 45} // Kamera yatayda sabitlensin
          // maxPolarAngle={Math.PI / 2} // Kamera yatayda sabitlensin
          // minAzimuthAngle={Math.PI / -1.23} // Kamera belirli bir yöne sabitlensin
          //  maxAzimuthAngle={Math.PI / -1.23}
          // maxPolarAngle={Math.PI / 2} Kameranın maksimum dikey açısı (radyan cinsinden)
          //enablePan={true}  Pan (kaydırma) özelliğini devre dışı bırak
         //  enableRotate={false} 
        />
      </Canvas>
    </div>
  );
};

export default GLTFViewer;