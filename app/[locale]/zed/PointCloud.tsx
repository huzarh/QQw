"use client";
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
// Import OrbitControls from three.js examples rather than from @react-three/drei
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface PointCloudProps {
  points: number[][]; // Array of [x, y, z] coordinates
}

const PointCloud: React.FC<PointCloudProps> = ({ points }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Create the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create the point cloud geometry
    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array(points.flat());
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

    // Create the material for the points
    const material = new THREE.PointsMaterial({
      color: 0x00ff00,
      size: 0.02,
    });

    // Create the Points object and add it to the scene
    const pointCloud = new THREE.Points(geometry, material);
    scene.add(pointCloud);

    // Position the camera
    camera.position.z = 5;

    // Set up OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Enable damping (inertia)
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop to update controls and render the scene
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      controls.dispose();
    };
  }, [points]);

  return <div ref={mountRef} />;
};

export default PointCloud;
