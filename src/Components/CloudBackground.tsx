import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { CloudData } from "../services/types";

import CustomCloud from "./Cloud";
import { Clouds } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

type CloudBackgroundProps = {
  clouds: CloudData[];
  setClouds: Dispatch<SetStateAction<CloudData[]>>;
  clicked: boolean;
};

const CloudBackground = ({
  clouds,
  setClouds,
  clicked,
}: CloudBackgroundProps) => {
  const [cloudGenerate, setCloudGenerate] = useState<boolean>(false);

  const generateCloud = useCallback(() => {
    if (clouds.length < 100) {
      const newClouds = [];
      for (let i = 0; i < 100; i++) {
        const newCloud: CloudData = {
          position: {
            x: Math.floor(Math.random() * (55 + 65 + 1) - 65),
            y: -22,
            z: Math.floor(Math.random() * (15 + 35 + 1) - 35),
          },
          speed: 0.1,
          opacity: Math.floor(Math.random() * (1 + 0.8 + 1) - 0.8),
        };
        newClouds.push(newCloud);
      }
      setClouds(newClouds);
    }
  }, [clouds, setClouds]);

  useEffect(() => {
    if (!cloudGenerate) {
      const intervalId = setInterval(generateCloud, 100); // Generate a cloud every 1 second
      setCloudGenerate(true);
      return () => clearInterval(intervalId);
    } else if (cloudGenerate && clouds.length < 20) {
      generateCloud();
      setCloudGenerate(true);
    }
  }, [generateCloud, cloudGenerate, clouds.length]);

  useFrame((state) => {
    if (clicked) {
      state.camera.position.lerp(new Vector3(0, 0, -150), 0.005);
      state.camera.updateProjectionMatrix();
    }
  });

  return (
    <Clouds>
      {clouds.map((cloud: CloudData, index: number) => {
        return <CustomCloud key={index} cloud={cloud} clicked={clicked} />;
      })}
    </Clouds>
  );
};

export default CloudBackground;
