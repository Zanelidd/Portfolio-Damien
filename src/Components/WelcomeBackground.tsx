import { Sky, Html, Stars, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../pages/styles/WelcomePage.module.css";
import { useContext } from "react";
import { DarkModeContext } from "../Context/DarkModeProvider";
import { CloudData, DarkModeContextType } from "../services/types";
import CloudBackground from "./CloudBackground";

const WelcomeBackground = () => {
  const [clicked, setClicked] = useState(false);
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

  return (
    <div className={style.background}>
      <Canvas
        style={{
          height: "100vh",
          width: "100vw",
        }}
        camera={{ position: [0, 0, 15], fov: 65 }}
      >
        <ambientLight intensity={darkMode ? 0.2 : 1.5} />
        <pointLight intensity={1} position={[0, 5, 25]} />
        <CloudBackground
          clouds={clouds}
          setClouds={setClouds}
          clicked={clicked}
        />
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
          turbidity={3}
          rayleigh={darkMode ? -0.15 : 0.1}
          inclination={0.75}
          distance={1000}
          sunPosition={[0, 5, 15]}
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
