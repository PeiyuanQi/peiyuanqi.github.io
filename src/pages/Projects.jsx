import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const pinnedProjects = data.filter((project) => project.pinned);
const timelineProjects = data.filter((project) => !project.pinned);

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
        <section className="project-pinned" aria-labelledby="pinned-projects-heading">
          <header className="project-section-heading">
            <h3 id="pinned-projects-heading">Pinned Projects</h3>
            <span aria-hidden="true">{String(pinnedProjects.length).padStart(2, '0')}</span>
          </header>
          <div className="project-pinned__grid">
            {pinnedProjects.map((project) => (
              <Cell
                data={project}
                isOpen={activeProject === project.slug}
                key={project.title}
                onSelect={handleSelectProject}
              />
            ))}
          </div>
        </section>
        <section className="project-timeline-section" aria-labelledby="project-timeline-heading">
          <header className="project-section-heading">
            <h3 id="project-timeline-heading">Project Timeline</h3>
            <span aria-hidden="true">{String(timelineProjects.length).padStart(2, '0')}</span>
          </header>
          <div className="project-timeline">
            {timelineProjects.map((project) => (
              <Cell
                data={project}
                isOpen={activeProject === project.slug}
                key={project.title}
                onSelect={handleSelectProject}
              />
            ))}
          </div>
        </section>
      </article>
    </Main>
  );
};

export default Projects;
