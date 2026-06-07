import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const handleSelectProject = (projectSlug) => {
    setActiveProject((currentProject) => (
      currentProject === projectSlug ? null : projectSlug
    ));
  };

  return (
    <Main
      title="Projects"
      description="Learn about Peiyuan Qi's projects."
    >
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
          </div>
        </header>
        <section className="project-timeline" aria-label="Project timeline">
          {data.map((project) => (
            <Cell
              data={project}
              isOpen={activeProject === project.slug}
              key={project.title}
              onSelect={handleSelectProject}
            />
          ))}
        </section>
      </article>
    </Main>
  );
};

export default Projects;
