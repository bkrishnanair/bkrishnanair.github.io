import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Dodecahedron } from '@react-three/drei'; // Using dodecahedron for a more complex shape

const Scene = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Dodecahedron ref={meshRef} args={[1, 0]} scale={1.2}>
      <meshStandardMaterial color="#D4AF37" wireframe={true} />
    </Dodecahedron>
  );
};

const ThreeDObject = () => {
  return (
    <Canvas camera={{ position: [0, 0, 3.5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Scene />
    </Canvas>
  );
};

export default ThreeDObject;
