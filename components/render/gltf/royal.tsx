"use client"; // Mark as a Client Component

import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
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

// Güneş benzeri ışık kaynağı
const SunLight = () => {
  const pointLightRef = useRef<THREE.PointLight>(null);
  const { scene } = useThree(); // Access the Three.js scene
  const pos = [5, 5, 10];

  useEffect(() => {
    if (pointLightRef.current) {
      console.log("PointLight position:", pointLightRef.current.position); // Debug light position
      const helper = new THREE.PointLightHelper(pointLightRef.current, 2); // Increase helper size
      scene.add(helper); // Add the helper to the scene
      console.log("PointLightHelper added to scene"); // Debug helper addition

      // Cleanup function to remove the helper when the component unmounts
      return () => {
        scene.remove(helper);
        console.log("PointLightHelper removed from scene"); // Debug helper removal
      };
    }
  }, [pointLightRef.current, scene]);

  return (
    <group>
      {/* PointLight */}
      <pointLight
        ref={pointLightRef}
        position={pos}
        intensity={1000}
        color={"white"}
      />
      {/* Küre (Güneş) */}
      <mesh position={pos}>
        <sphereGeometry args={[1, 32, 32]} /> {/* Küre boyutu ve detayı */}
        <meshBasicMaterial color={"yellow"} /> {/* Parlak sarı renk */}
      </mesh>
    </group>
  );
};

const Royal: React.FC<GLTFViewerProps> = ({ gltfPath }) => {
  return (
    <div
      className="w-screen h-full bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/back.jpg')"}}
      suppressHydrationWarning
    >
      <Canvas gl={{ alpha: true }}>
        <CustomCamera />
        {/* Güneş benzeri ışık kaynağı */}
        <SunLight />
        {/* <ambientLight intensity={5} /> */}

        <Suspense fallback={null}>
          <GLTFModel gltfPath={gltfPath} />
        </Suspense>

        <axesHelper args={[15]} />
        <OrbitControls
          target={[0, 0, 0]} // Focus on the center of the model
          minDistance={10} // Minimum camera zoom distance
          maxDistance={70} // Maximum camera zoom distance
          minPolarAngle={Math.PI / 5} // Lock the camera horizontally
        />
      </Canvas>
    </div>
  );
};

export default Royal;
