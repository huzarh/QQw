"use client"; // Mark as a Client Component

import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

type GLBViewerProps = {
  glbPath: string;
};

const GLBModel: React.FC<{ glbPath: string }> = ({ glbPath }) => {
  const gltf = useLoader(GLTFLoader, glbPath);
  return <primitive object={gltf.scene} />;
};

const GLBViewer: React.FC<GLBViewerProps> = ({ glbPath }) => {
  return (
    <div style={{ width: "100%", height: "100vh" ,background:"gray"}}>
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <GLBModel glbPath={glbPath} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default GLBViewer;