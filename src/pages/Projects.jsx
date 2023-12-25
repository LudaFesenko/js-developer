import Project from "../components/project/Project";

import { projects } from "../helpers/ProjectList";

function Projects() {
  return (
    <main className="section">
      <div className="container">
        <div className="title-text">
          <h2>Projects</h2>
        </div>

        <ul className="projects">
          {projects.map(({ title, img }, index) => {
            return <Project key={index} title={title} img={img} id={index} />;
          })}
        </ul>
      </div>
    </main>
  );
}

export default Projects;
