"use client"; // Mark as a Client Component

import React, { Suspense, useEffect } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

type GLTFViewerProps = {
  gltfPath: string;
};

// Use useGLTF instead of useLoader for optimized loading
const GLTFModel: React.FC<{ gltfPath: string }> = ({ gltfPath }) => {
  const gltf = useGLTF(gltfPath, true); // Enable Draco compression
  const { scene } = gltf;

  // Center the model
  const bbox = new THREE.Box3().setFromObject(scene);
  const center = new THREE.Vector3();
  bbox.getCenter(center);
  scene.position.sub(center);

  return <primitive object={scene} />;
};

// Custom camera setup
function CustomCamera() {
  const { camera } = useThree();

  useEffect(() => {
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.position.set(-0.5, -1, 1);
      camera.fov = 26;
      camera.rotation.set(Math.PI / -8, 0, Math.PI / 5);
      camera.updateProjectionMatrix();
    }
  }, [camera]);

  return null;
}

const GLTFViewer2: React.FC<GLTFViewerProps> = ({ gltfPath }) => {
  return (
    <div className="w-full h-full"   suppressHydrationWarning>
      <Canvas>
        <CustomCamera />
        <directionalLight
          position={[-90, 10, -10]} // Işığın konumu (modelin arkasından geliyor)
          intensity={108} // Işık şiddeti
          color={"blue"} // Güneş rengi (sarımsı turuncu)
        />
        <ambientLight intensity={2} />

        <Suspense fallback={null}>
          <GLTFModel gltfPath={gltfPath} />
        </Suspense>

        {/* OrbitControls */}
        <OrbitControls
          makeDefault // OrbitControls'u varsayılan kontroller yap
          target={[0, 0, 0]} // Modelin merkezine odaklan
          minDistance={0.4} // Kameranın modele minimum yakınlaşma mesafesi
          maxDistance={1} // Kameranın modelden maksimum uzaklaşma mesafesi
          minPolarAngle={Math.PI / 1.5} // Kamera yatayda sabitlensin
        />
      </Canvas>
    </div>
  );
};

export default GLTFViewer2;