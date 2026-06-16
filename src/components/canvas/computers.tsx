import { Float, Line, OrbitControls, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import type { Group } from "three";

import CanvasLoader from "../loader";

type DataSceneProps = {
  isMobile: boolean;
};

const NODE_POINTS: Array<[number, number, number]> = [
  [-2.7, 0.3, 0],
  [-1.4, 1.2, 0],
  [0, 0.4, 0],
  [1.4, 1.15, 0],
  [2.7, 0.25, 0],
];

const DataNode = ({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) => (
  <group position={position}>
    <mesh>
      <sphereGeometry args={[0.18, 32, 32]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.55} />
    </mesh>
  </group>
);

const DatabaseStack = () => (
  <group position={[-3.35, -0.75, 0]}>
    {[-0.34, 0, 0.34].map((y, index) => (
      <mesh key={y} position={[0, y, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.55, 0.55, 0.28, 48]} />
        <meshStandardMaterial
          color={index === 2 ? "#56ccf2" : "#2f80ed"}
          emissive="#1456b8"
          emissiveIntensity={0.25}
          metalness={0.25}
          roughness={0.35}
        />
      </mesh>
    ))}
  </group>
);

const DashboardPanel = () => (
  <group position={[3.25, -0.7, 0]} rotation={[0, -0.25, 0]}>
    <mesh>
      <boxGeometry args={[1.55, 1.1, 0.08]} />
      <meshStandardMaterial
        color="#111827"
        emissive="#1d1836"
        emissiveIntensity={0.55}
        metalness={0.2}
        roughness={0.35}
      />
    </mesh>

    {[-0.48, -0.16, 0.16, 0.48].map((x, index) => (
      <mesh key={x} position={[x, -0.25 + index * 0.07, 0.08]}>
        <boxGeometry args={[0.18, 0.35 + index * 0.16, 0.06]} />
        <meshStandardMaterial
          color={index % 2 === 0 ? "#00cea8" : "#915eff"}
          emissive={index % 2 === 0 ? "#00a88a" : "#7c3aed"}
          emissiveIntensity={0.45}
        />
      </mesh>
    ))}

    <Line
      points={[
        [-0.62, 0.35, 0.09],
        [-0.25, 0.12, 0.09],
        [0.1, 0.28, 0.09],
        [0.43, 0.02, 0.09],
        [0.65, 0.34, 0.09],
      ]}
      color="#56ccf2"
      lineWidth={3}
    />

  </group>
);

const AiCore = () => (
  <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.7}>
    <group position={[0, -0.55, 0]}>
      <mesh>
        <icosahedronGeometry args={[0.78, 2]} />
        <meshStandardMaterial
          color="#915eff"
          emissive="#6d28d9"
          emissiveIntensity={0.55}
          metalness={0.2}
          roughness={0.22}
          wireframe
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.34, 32, 32]} />
        <meshStandardMaterial
          color="#00cea8"
          emissive="#00cea8"
          emissiveIntensity={0.75}
          metalness={0.15}
          roughness={0.25}
        />
      </mesh>
    </group>
  </Float>
);

const DataEngineeringScene = ({ isMobile }: DataSceneProps) => {
  const groupRef = useRef<Group | null>(null);

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.16;
    }
  });

  return (
    <group
      ref={groupRef}
      scale={isMobile ? 0.62 : 0.86}
      position={isMobile ? [0, -1.9, 0] : [2.25, -0.8, 0]}
      rotation={[0.05, -0.35, 0]}
    >
      <ambientLight intensity={0.45} />
      <pointLight position={[2, 3, 4]} intensity={1.25} color="#ffffff" />
      <pointLight position={[-3, -1, 2]} intensity={0.8} color="#915eff" />

      <mesh position={[0, 0, -2.5]}>
        <planeGeometry args={[12, 8]} />
        <meshBasicMaterial color="#050816" />
      </mesh>

      <DatabaseStack />
      <AiCore />
      <DashboardPanel />

      <Line points={NODE_POINTS} color="#915eff" lineWidth={3} />
      {NODE_POINTS.map((point, index) => (
        <DataNode
          key={point.join("-")}
          position={point}
          color={index % 2 === 0 ? "#56ccf2" : "#00cea8"}
        />
      ))}
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <Canvas
      camera={{
        position: [0, 0, 7],
        fov: 42,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor("#050816", 1);
      }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ background: "#050816" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.55}
          minPolarAngle={Math.PI / 2.8}
          maxPolarAngle={Math.PI / 1.6}
        />
        <DataEngineeringScene isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
