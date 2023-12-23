import style from "./styles/ProjectCards.module.css";
import { DarkModeContextType, ProjectType } from "../services/types";
import { useContext } from "react";
import { DarkModeContext } from "../Context/DarkModeProvider";

type ProjectCardsProps = {
  project: ProjectType;
};

const ProjectCards = ({ project }: ProjectCardsProps) => {
  const { darkMode } = useContext<DarkModeContextType>(DarkModeContext);

  return (
    <div
      className={
        darkMode ? style.project_container_dark : style.project_container
      }
    >
      <h2 className={darkMode ? style.project_title_dark : style.project_title}>
        {project.title}
      </h2>
      <div className={style.info_container}>
        <img
          className={style.project_img}
          src={`${project.img}`}
          alt={project.title}
          onClick={() => {
            location.href = project.url;
          }}
        />
        <p className={darkMode ? style.project_text_dark : style.project_text}>
          {project.description}
        </p>
      </div>
      <div className={style.skill_container}>
        {project.skillsValue.map((skillvalue: string) => {
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
