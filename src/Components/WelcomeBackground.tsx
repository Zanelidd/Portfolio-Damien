import { Sky, Html, Stars, Stats } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../pages/styles/WelcomePage.module.css";
import { useContext } from "react";
import { DarkModeContext } from "../Context/DarkModeProvider";
import { CloudData, DarkModeContextType } from "../services/types";
import CustomCloud from "./Cloud";
import { Vector3 } from "three";

const WelcomeBackground = () => {
  const [cliked, setClicked] = useState(false);
  const [clouds, setClouds] = useState<CloudData[]>([]);
  const { darkMode, setDarkMode } =
    useContext<DarkModeContextType>(DarkModeContext);

  const navigate = useNavigate();
  const goHome = () => {
    navigate("/home");
  };

  const animate = () => {
    setClicked(true);
    setTimeout(() => {
      goHome();
    }, 500);
  };

  const generateCloud = useCallback(() => {
    if (clouds.length < 20) {
      const newClouds = [];
      for (let i = 0; i < 20; i++) {
        const newCloud: CloudData = {
          position: new Vector3(
            Math.random() * 40 - 20,
            -22,
            Math.random() * 30 - 15
          ),
          speed: 0.2,
          opacity: Math.random() * 0.5 + 0.5,
        };
        newClouds.push(newCloud);
      }
      setClouds(newClouds);
    }
  }, [clouds]);

  useEffect(() => {
    generateCloud();
  }, [generateCloud]);

  const Rig = () => {
    useFrame((state) => {
      if (cliked) {
        state.camera.position.lerp(new Vector3(0, 0, -150), 0.005);
        // state.camera.lookAt(0, 0, 0);
        state.camera.updateProjectionMatrix();
      }
      const cloudSpeed = 0.05;
      const updatedClouds = clouds.map((cloud) => {
        if (cloud.position.z > 15) {
          cloud.position.z = -35;
          cloud.position.x = Math.random() * 40 - 20;
          cloud.opacity = Math.random() * 0.5 + 0.5;
        } else {
          cloud.position.z += cloudSpeed;
        }
        darkMode ? (cloud.opacity = 1) : cloud.opacity;
        return cloud;
      });
      setClouds(updatedClouds);
    });

    return clouds.map((cloud, index: number) => {
      return <CustomCloud key={index} cloud={cloud} />;
    });
  };

  return (
    <div className={style.background}>
      <Canvas
        style={{
          height: "100vh",
          width: "100vw",
        }}
        camera={{ position: [0, 0, 15], fov: 65 }}
      >
        <ambientLight intensity={darkMode ? 0.55 : 0.8} />
        <pointLight intensity={2} position={[0, 0, -1000]} />
        <Rig />

        {darkMode && (
          <Stars
            radius={100}
            depth={100}
            count={10000}
            factor={4}
            saturation={0}
            fade
            speed={3}
          />
        )}

        <Sky
          azimuth={0.25}
          turbidity={15}
          rayleigh={darkMode ? -0.15 : 0.2}
          inclination={0.75}
          distance={1000}
          sunPosition={[50, 10, 15]}
        />
        <Stats />

        <Html center>
          <div className={style.background}>
            <button
              className={
                darkMode ? style.buttonDarkMode : style.buttonLightMode
              }
              type="button"
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            >
              Dark Mode
            </button>
            <div className={style.welcomeContainer}>
              <button
                type="button"
                className={darkMode ? style.nameDarkMode : style.name}
                onClick={animate}
              >
                ARNAUD DAMIEN
              </button>
              <span
                className={darkMode ? style.subtitleDarkMode : style.subtitle}
              >
                Web & Web Mobile Developper
              </span>
            </div>
          </div>
        </Html>
      </Canvas>
    </div>
  );
};

export default WelcomeBackground;
