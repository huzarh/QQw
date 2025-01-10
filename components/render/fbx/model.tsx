"use client"; // Mark as a Client Component

import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import * as THREE from "three";

type FBXViewerProps = {
  fbxPath: string;
};

const FBXModel: React.FC<{ fbxPath: string }> = ({ fbxPath }) => {
  const fbx = useLoader(FBXLoader, fbxPath);

  // Traverse the loaded object and apply a default material
  fbx.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); // Green color
    }
  });

  return <primitive object={fbx} />;
};

const FBXViewer: React.FC<FBXViewerProps> = ({ fbxPath }) => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ position: [30, 300, 600], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <FBXModel fbxPath={fbxPath} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default FBXViewer;