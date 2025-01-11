"use client";

import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Loader, useProgress } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import * as THREE from "three";

type GLTFViewerProps = {
  gltfPath: string;
};

const GLTFModel: React.FC<{ gltfPath: string }> = ({ gltfPath }) => {
  const [visibleMeshes, setVisibleMeshes] = useState<string[]>([]);
  const modelRef = useRef<THREE.Group>(null);

  const gltf = useLoader(GLTFLoader, gltfPath, (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/');
    loader.setDRACOLoader(dracoLoader);
  });

  useEffect(() => {
    if (!gltf) return;

    const meshes: THREE.Mesh[] = [];
    gltf.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.visible = false;
        meshes.push(child);
      }
    });

    // Show meshes one by one
    meshes.forEach((mesh, index) => {
      setTimeout(() => {
        setVisibleMeshes(prev => [...prev, mesh.uuid]);
      }, index * 200); // Adjust timing here (200ms between each mesh)
    });

    // Center the model
    const box = new THREE.Box3().setFromObject(gltf.scene);
    const center = box.getCenter(new THREE.Vector3());
    gltf.scene.position.sub(center);

    if (modelRef.current) {
      modelRef.current.add(gltf.scene);
    }
  }, [gltf]);

  useEffect(() => {
    if (!gltf) return;

    gltf.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        // Create a fade-in effect
        if (visibleMeshes.includes(child.uuid)) {
          child.visible = true;
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach(mat => {
                mat.transparent = true;
                mat.opacity = 0;
                fadeInMaterial(mat);
              });
            } else {
              child.material.transparent = true;
              child.material.opacity = 0;
              fadeInMaterial(child.material);
            }
          }
        }
      }
    });
  }, [visibleMeshes, gltf]);

  const fadeInMaterial = (material: THREE.Material) => {
    const animate = () => {
      if (material.opacity < 1) {
        material.opacity += 0.05;
        requestAnimationFrame(animate);
      }
    };
    animate();
  };

  return <group ref={modelRef} />;
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
  const { progress } = useProgress();

  return (
    <>
      <div className="w-full h-screen" suppressHydrationWarning>
        <Canvas camera={{ fov: 50, position: [5, 5, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
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