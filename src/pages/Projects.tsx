import { DarkModeContext } from "../Context/DarkModeProvider";
import ProjectCards from "../Components/ProjectCards";
import style from "./styles/Projects.module.css";
import projects from "../Datas/Project";
import { DarkModeContextType, ProjectType } from "../services/types";
import { useContext } from "react";

const Projects = () => {
  const { darkMode } = useContext<DarkModeContextType>(DarkModeContext);
  return (
    <>
      <div
        className={
          darkMode
            ? style.project_card_container_dark
            : style.project_card_container
        }
      >
        <h1 className={darkMode ? style.title_dark : style.title}>Projets</h1>
        <div className={style.project_cards}>
          {projects?.map((project: ProjectType) => {
            return <ProjectCards key={project.id} project={project} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
