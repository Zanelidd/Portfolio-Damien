import { Cloud } from "@react-three/drei";
import { CloudData, DarkModeContextType } from "../services/types";
import { useFrame } from "@react-three/fiber";
import { useContext, useRef } from "react";
import { DarkModeContext } from "../Context/DarkModeProvider";

type CustomCloudProps = {
  cloud: CloudData;
  clicked: boolean;
};

const CustomCloud = ({ cloud }: CustomCloudProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { darkMode } = useContext<DarkModeContextType>(DarkModeContext);

  useFrame(() => {
    if (meshRef.current) {
      const cloudSpeed = 0.05;

      if (cloud.position.z < 20) {
        cloud.position.z += cloudSpeed;
      } else {
        cloud.position.z = Math.floor(Math.random() * (-55 + 45 + 1) - 45);
        cloud.position.x = Math.floor(Math.random() * (55 + 65 + 1) - 65);
        cloud.opacity = Math.floor(Math.random() * (1 + 0.8 + 1) - 0.8);
      }
      meshRef.current.position.set(
        cloud.position.x,
        cloud.position.y,
        cloud.position.z
      );
    }
    darkMode && (cloud.opacity = 1);
  });

  return (
    <Cloud
      ref={meshRef}
      key={cloud.opacity.toString()}
      seed={1}
      visible
      segments={1}
      bounds={[200, 20, 10]}
      volume={50}
      fade={15}
      speed={cloud.speed}
      opacity={cloud.opacity}
      position={[cloud.position.x, cloud.position.y, cloud.position.z]}
    />
  );
};

export default CustomCloud;
