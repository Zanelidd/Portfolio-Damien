import { Cloud } from "@react-three/drei";
import { CloudData } from "../services/types";

type CustomCloudProps = {
  cloud: CloudData;
};

const CustomCloud = (cloud: CustomCloudProps) => {
  return (
    <Cloud
      key={cloud.cloud.opacity.toString()}
      seed={1}
      visible
      segments={1}
      bounds={[200, 20, 10]}
      volume={50}
      fade={2}
      color="white"
      speed={cloud.cloud.speed}
      opacity={cloud.cloud.opacity}
      position={cloud.cloud.position}
    />
  );
};

export default CustomCloud;
