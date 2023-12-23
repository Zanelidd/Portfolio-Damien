import style from "./styles/Home.module.css";
import { useContext } from "react";
import { DarkModeContext } from "../Context/DarkModeProvider";
import { DarkModeContextType } from "../services/types";
import profilPic from "../assets/20171009_120133.jpg";

const Home = () => {
  const { darkMode, setDarkMode } =
    useContext<DarkModeContextType>(DarkModeContext);
  return (
    <>
      <div
        className={darkMode ? style.home_container_dark : style.home_container}
      >
        <button
          className={darkMode ? style.buttonDarkMode : style.buttonLightMode}
          type="button"
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          Dark Mode
        </button>
        <img
          className={darkMode ? style.homepage_img_dark : style.homepage_img}
          src={profilPic}
          alt="image"
        />
        <p className={darkMode ? style.homepage_txt_dark : style.homepage_txt}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget
          dui eget nulla tristique lacinia eu sit amet diam. Maecenas placerat
          sit amet lorem porttitor ultricies. Proin id ipsum sit amet tortor
          pretium rutrum. Pellentesque ut maximus mauris. Aliquam eu libero at
          orci blandit sagittis. Proin feugiat porta enim ac tempus. Nunc quis
          efficitur felis. In non justo interdum, hendrerit ligula a, laoreet
          nisi. Donec ligula magna, egestas non aliquet nec, pellentesque a
          massa. Nam sodales metus metus, vel vehicula lacus rutrum vel. Fusce
          finibus accumsan elit non vulputate. Integer ipsum eros, facilisis in
          nisl et, faucibus finibus velit.
        </p>
      </div>
    </>
  );
};

export default Home;
