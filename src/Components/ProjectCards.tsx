import style from "./styles/ProjectCards.module.css";
import { ProjectType } from "../services/types";

const ProjectCards = (project: ProjectType) => {
  return (
    <div className={style.project_container}>
      <h2 className={style.project_title}>{project.title}</h2>
      <div className={style.info_container}>
        <img
          className={style.project_img}
          src={`../assets/${project.img}`}
          alt={project.title}
          onClick={() => {
            location.href = project.url;
          }}
        />
        <p className={style.project_text}>{project.description}</p>
      </div>
      <div className={style.skill_container}>
        {project.skillsValue.map((skillvalue: string) => {
          return (
            <img
              key={skillvalue}
              className={style.skill}
              src={`../assets/${skillvalue}`}
              alt={skillvalue}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCards;
