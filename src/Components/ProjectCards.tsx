import style from "./styles/ProjectCards.module.css";
import { DarkModeContextType, ProjectType } from "../services/types";
import { useContext } from "react";
import { DarkModeContext } from "../Context/DarkModeProvider";

const ProjectCards = (proje: ProjectType) => {
  const { darkMode } = useContext<DarkModeContextType>(DarkModeContext);

  return (
    <div
      className={
        darkMode ? style.project_container_dark : style.project_container
      }
    >
      <h2 className={darkMode ? style.project_title_dark : style.project_title}>
        {proje.proje.title}
      </h2>
      <div className={style.info_container}>
        <img
          className={style.project_img}
          src={`${proje.proje.img}`}
          alt={proje.proje.title}
          onClick={() => {
            location.href = proje.proje.url;
          }}
        />
        <p className={darkMode ? style.project_text_dark : style.project_text}>
          {proje.proje.description}
        </p>
      </div>
      <div className={style.skill_container}>
        {proje.proje.skillsValue.map((skillvalue: string) => {
          console.log(skillvalue);

          return (
            <img
              key={skillvalue}
              className={style.skill}
              src={`${skillvalue}`}
              alt={skillvalue}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCards;
