"use client"; // Mark as a Client Component

import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useThree, extend, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { EffectComposer, RenderPass, BloomEffect, EffectPass } from "postprocessing"; // Import from postprocessing
import { IoPlayCircleOutline, IoStopCircleOutline } from "react-icons/io5"; // Icons

// Extend React Three Fiber with post-processing classes
extend({ EffectComposer, RenderPass, BloomEffect, EffectPass });

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
      camera.position.set(0, 0, 50);
      camera.fov = 26;
      camera.rotation.set(Math.PI / -8, 0, Math.PI / 5);
      camera.updateProjectionMatrix();
    }
  }, [camera]);

  return null;
}

// Sun-like light source
const SunLight = () => {
  const pointLightRef = useRef<THREE.PointLight>(null);
  // const { scene } = useThree(); // Access the Three.js scene
  const vector = new THREE.Vector3(5, 5, 10);

  // useEffect(() => {
  //   if (pointLightRef.current) {
  //     console.log("PointLight position:", pointLightRef.current.position);
  //     const helper = new THREE.PointLightHelper(pointLightRef.current, 0.5);
  //     scene.add(helper);
  //     console.log("PointLightHelper added to scene");
      
  //     return () => {
  //       scene.remove(helper);
  //       console.log("PointLightHelper removed from scene");
  //     };
  //   }
  // }, [scene]);

  return (
    <group>
      {/* PointLight */}
      <pointLight
        ref={pointLightRef}
        position={vector}
        intensity={1000}
        color={"orange"}
      />
      {/* Sphere (Sun) with glowing effect */}
      <mesh position={vector}>
        <sphereGeometry args={[0.5, 32, 32]} /> {/* Sphere size and detail */}
        <meshBasicMaterial color={"yellow"} toneMapped={false} /> {/* Disable tone mapping for brighter color */}
      </mesh>
    </group>
  );
};

// Custom EffectComposer component
const Effects = () => {
  const { gl, scene, camera, size } = useThree();

  const composer = useRef<EffectComposer>();

  useEffect(() => {
    if (!composer.current) {
      composer.current = new EffectComposer(gl);

      // Add a render pass for the scene
      const renderPass = new RenderPass(scene, camera);
      composer.current.addPass(renderPass);

      // Add a bloom effect
      const bloomEffect = new BloomEffect({
        intensity: 5, // Strength of the bloom
        luminanceThreshold: 0.85, // Threshold for what gets bloomed
        luminanceSmoothing: 0.4, // Smoothness of the bloom
      });
      const effectPass = new EffectPass(camera, bloomEffect);
      composer.current.addPass(effectPass);
    }
  }, [gl, scene, camera, size]);

  useEffect(() => {
    if (composer.current) {
      composer.current.setSize(size.width, size.height);
    }
  }, [size]);

  // Use useFrame to render the composer
  useFrame(() => {
    if (composer.current) {
      composer.current.render();
    }
  }, 1); // Render after the main scene

  return null;
};

const Royal: React.FC<GLTFViewerProps> = ({ gltfPath }) => {
  const [isPlaying, setIsPlaying] = useState(false); // Music play state
  const audioRef = useRef<HTMLAudioElement>(null); // Audio element reference

  // Toggle music play/pause
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className="w-screen h-full bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/back.jpg')" }}
      suppressHydrationWarning
    >
      {/* Background music */}
      <audio ref={audioRef} loop>
        <source src="/assets/music/music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Music control button */}
      <button
        onClick={toggleMusic}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          zIndex: 1000,
          padding: "10px",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: "32px",
          color: isPlaying ? "#ff4444" : "#44ff44",
        }}
      >
        {isPlaying ? <IoStopCircleOutline /> : <IoPlayCircleOutline />}
      </button>

      <Canvas gl={{ alpha: true }}>
        <CustomCamera />
        {/* Sun-like light source */}
        <SunLight />
        {/* <ambientLight intensity={5} /> */}

        <Suspense fallback={null}>
          <GLTFModel gltfPath={gltfPath} />
        </Suspense>

        {/* <axesHelper args={[15]} /> */}
        <OrbitControls
          target={[0, 0, 0]} // Focus on the center of the model
          minDistance={10} // Minimum camera zoom distance
          maxDistance={70} // Maximum camera zoom distance
          minPolarAngle={Math.PI / 5} // Lock the camera horizontally
        />

        {/* Post-processing */}
        <Effects />
      </Canvas>
    </div>
  );
};

export default Royal;