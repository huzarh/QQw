"use client";

import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import * as THREE from "three";

type GLTFViewerProps = {
  gltfPath: string;
};

const GLTFModel: React.FC<{ gltfPath: string }> = ({ gltfPath }) => {
  const [visibleMeshes, setVisibleMeshes] = useState<string[]>([]);
  const modelRef = useRef<THREE.Group>(null);
  const loadedMeshesRef = useRef<THREE.Mesh[]>([]);
  const processingInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/');
    loader.setDRACOLoader(dracoLoader);

    // Start processing meshes immediately as they load
    const startProcessingMeshes = () => {
      if (processingInterval.current) return;

      processingInterval.current = setInterval(() => {
        const unprocessedMeshes = loadedMeshesRef.current.filter(
          mesh => !visibleMeshes.includes(mesh.uuid)
        );

        if (unprocessedMeshes.length > 0) {
          const nextMesh = unprocessedMeshes[0];
          setVisibleMeshes(prev => [...prev, nextMesh.uuid]);
        }
      }, 100); // Process a new mesh every 100ms
    };

    loader.load(
      gltfPath,
      (gltf) => {
        if (modelRef.current) {
          // Center the model
          const box = new THREE.Box3().setFromObject(gltf.scene);
          const center = box.getCenter(new THREE.Vector3());
          gltf.scene.position.sub(center);

          // Collect all meshes and prepare them
          gltf.scene.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.visible = false;
              loadedMeshesRef.current.push(child);

              // Prepare material for fade-in
              if (child.material) {
                if (Array.isArray(child.material)) {
                  child.material.forEach(mat => {
                    mat.transparent = true;
                    mat.opacity = 0;
                  });
                } else {
                  child.material.transparent = true;
                  child.material.opacity = 0;
                }
              }
            }
          });

          modelRef.current.add(gltf.scene);
          startProcessingMeshes();
        }
      },
      (progress) => {
        // Optional: You can handle loading progress here
        const percentComplete = (progress.loaded / progress.total) * 100;
        console.log(`Loading: ${percentComplete}% complete`);
      },
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    return () => {
      if (processingInterval.current) {
        clearInterval(processingInterval.current);
      }
      dracoLoader.dispose();
    };
  }, [gltfPath]);

  useEffect(() => {
    if (!modelRef.current) return;

    modelRef.current.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        if (visibleMeshes.includes(child.uuid)) {
          child.visible = true;
          if (child.material) {
            const materials = Array.isArray(child.material) ? child.material : [child.material];
            materials.forEach(material => {
              if (!material.userData.fadeStarted) {
                material.userData.fadeStarted = true;
                fadeInMaterial(material);
              }
            });
          }
        }
      }
    });
  }, [visibleMeshes]);

  const fadeInMaterial = (material: THREE.Material) => {
    const fadeSpeed = 0.03;
    const animate = () => {
      if (material.opacity < 1) {
        material.opacity = Math.min(material.opacity + fadeSpeed, 1);
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

  return (
    <>
      <div className="w-full h-screen" suppressHydrationWarning>
        <Canvas camera={{ fov: 50, position: [5, 5, 5] }} >
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