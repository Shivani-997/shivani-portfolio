import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";

function GlowSphere() {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.rotation.y += 0.005;
    ref.current.position.y = Math.sin(clock.elapsedTime) * 0.3;
  });

  return (
    <Sphere ref={ref} args={[1.2, 64, 64]}>
      <meshStandardMaterial
        color="#8b5cf6"
        emissive="#8b5cf6"
        emissiveIntensity={1.5}
        roughness={0.2}
      />
    </Sphere>
  );
}

function Particles() {
  const ref = useRef();

  const particles = useMemo(() => {
    const positions = new Float32Array(4000 * 3);

    for (let i = 0; i < 4000 * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }

    return positions;
  }, []);

  useFrame(({ mouse }) => {
    ref.current.rotation.x = mouse.y * 0.2;
    ref.current.rotation.y = mouse.x * 0.2;
  });

  return (
    <Points ref={ref} positions={particles} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

function ThreeBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6] }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#8b5cf6" />
      <pointLight position={[-5, -5, -5]} intensity={1} color="#00ffff" />

      {/* Effects */}
      <Particles />
      <GlowSphere />
    </Canvas>
  );
}

export default ThreeBackground;