"use client";

import React, { Suspense, useEffect } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";

type GLTFViewerProps = {
  gltfPath: string;
};

const GLTFModel: React.FC<{ gltfPath: string }> = ({ gltfPath }) => {
  const gltf = useLoader(GLTFLoader, gltfPath);
  const { scene } = gltf;

  const bbox = new THREE.Box3().setFromObject(scene);
  const center = new THREE.Vector3();
  bbox.getCenter(center);
  scene.position.sub(center);

  return <primitive object={scene} />;
};

function CustomCamera() {
  const { camera } = useThree();

  useEffect(() => {
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.position.set(-5.4, -6, -1);
      camera.fov = 26;
      camera.rotation.set(Math.PI / -8, 0, Math.PI / 5);
      camera.updateProjectionMatrix();
    }
  }, [camera]);

  return null;
}

const GLTFViewer: React.FC<GLTFViewerProps> = ({ gltfPath }) => {
  return (
    <>
      <div className="w-full h-screen"  suppressHydrationWarning>
        <Canvas camera={{ fov: 50, position: [5, 5, 5] }}>
          <CustomCamera />
          <Suspense fallback={null}>
            <GLTFModel gltfPath={gltfPath} />
          </Suspense>
          <OrbitControls 
            makeDefault
            target={[-1, -5, 8]}
            minDistance={6}
            maxDistance={30}  
            minPolarAngle={Math.PI / 45}  
          />
        </Canvas>
      </div>
      <Loader 
        containerStyles={{
          background: 'rgba(0, 0, 0, 0.5)',
        }}
        barStyles={{
          height: '5px',
          background: '#7f00ff',
        }}
        dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}
      />
    </>
  );
};

export default GLTFViewer;