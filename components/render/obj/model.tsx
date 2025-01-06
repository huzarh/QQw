import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

type ObjViewerProps = {
  objPath: string;
};

const ObjModel: React.FC<{ objPath: string }> = ({ objPath }) => {
  const obj = useLoader(OBJLoader, objPath);
  return <primitive object={obj} />;
};

const ObjViewer: React.FC<ObjViewerProps> = ({ objPath }) => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ position: [3, 3, 3], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <ObjModel objPath={objPath} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ObjViewer;