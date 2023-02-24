import { useParams } from "react-router-dom";

import BtnGitHub from "../components/btnGithub/BtnGitHub";
import { projects } from "./../components/helpers/projectsList";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main class="section">
      <div class="container">
        <div class="project-details">
          <h1 class="title-1">{project.title}</h1>
          <a href={project.link}>
            <img
              src={project.imgBig}
              alt={project.title}
              class="project-details__cover"
            />
          </a>

          <div class="project-details__desc">
            <p>{project.skills}</p>
          </div>
          <BtnGitHub link={project.gitHubLink} />
        </div>
      </div>
    </main>
  );
};

export default Project;
