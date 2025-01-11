import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import * as THREE from "three";

const FBXModel: React.FC<{ fbxPath: string }> = ({ fbxPath }) => {
  const fbx = useLoader(FBXLoader, fbxPath);

  fbx.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({
        color: 0x00ff00,
      });
    }
  });

  return <primitive object={fbx} />;
};

const FBXViewer: React.FC<{ fbxPath: string }> = ({ fbxPath }) => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ position: [30, 300, 600], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={<div>Loading...</div>}>
          <FBXModel fbxPath={fbxPath} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default FBXViewer;