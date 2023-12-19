import { Suspense, useContext, useState } from "react";
import NavBar from "./NavBar";
import style from "./styles/Header.module.css";
import Hamburger from "hamburger-react";
import BurgerNavBar from "./BurgerNavBar";
import { DarkModeContext } from "../Context/DarkModeProvider";
import { DarkModeContextType } from "../services/types";
import { Canvas } from "@react-three/fiber";
import { Cloud, Html, Sky, Stars } from "@react-three/drei";

const Header = () => {
  const { darkMode, setDarkMode } =
    useContext<DarkModeContextType>(DarkModeContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    // <Canvas
    //   style={{
    //     height: "8vh",
    //     width: "100vw",
    //     // position: "absolute",
    //     // zIndex: "-10",
    //   }}
    //   camera={{ position: [0, 0, 15], fov: 90 }}
    // >
    //   <ambientLight intensity={darkMode ? 0.2 : 0.5} />
    //   <pointLight intensity={2} position={[0, 0, -1000]} />

    //   <Suspense fallback={null}>
    //     <Cloud position={[-4, -8, -25]} speed={0.2} opacity={1} />
    //     <Cloud position={[-5, -6, -10]} speed={0.2} opacity={1} />
    //     <Cloud position={[-35, -10, -10]} speed={0.2} opacity={1} />
    //     <Cloud position={[20, -10, -10]} speed={0.2} opacity={1} />
    //     <Cloud position={[0, -15, -10]} speed={0.2} opacity={1} />
    //     <Cloud position={[4, -6, -15]} speed={0.2} opacity={0.5} />
    //     <Cloud position={[-18, -10, -15]} speed={0.2} opacity={0.5} />
    //     <Cloud position={[4, -12, -5]} speed={0.2} opacity={0.5} />
    //     <Cloud position={[-25, -5, -5]} speed={0.2} opacity={0.5} />
    //     <Cloud position={[15, -8, -5]} speed={0.2} opacity={0.5} />
    //     <Cloud position={[-8, -8, -5]} speed={0.2} opacity={0.5} />
    //     <Cloud position={[4, -15, 0]} speed={0.2} opacity={0.75} />
    //     <Cloud position={[4, -10, 0]} speed={0.2} opacity={0.75} />
    //     <Cloud position={[-15, -10, 0]} speed={0.2} opacity={0.75} />
    //     <Cloud position={[10, -15, 0]} speed={0.2} opacity={0.75} />
    //     <Cloud position={[15, -8, 0]} speed={0.2} opacity={0.75} />

    //     {darkMode && (
    //       <Stars
    //         radius={100}
    //         depth={100}
    //         count={10000}
    //         factor={4}
    //         saturation={0}
    //         fade
    //         speed={3}
    //       />
    //     )}
    //   </Suspense>
    //   <Sky
    //     azimuth={0.25}
    //     turbidity={15}
    //     rayleigh={darkMode ? -0.15 : 0.2}
    //     inclination={0.75}
    //     distance={1000}
    //     sunPosition={[90, 10, 15]}
    //   />

    //   <Html center>
    <div
      className={
        darkMode ? style.dark_header_container : style.header_container
      }
    >
      <div className={style.navBarContainer}>
        <NavBar />
      </div>
      <div className={style.burger}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
        {isOpen && <BurgerNavBar isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
      <button
        className={darkMode ? style.buttonDarkMode : style.buttonLightMode}
        type="button"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        Dark Mode
      </button>
    </div>
    //   </Html>
    // </Canvas>
  );
};

export default Header;
