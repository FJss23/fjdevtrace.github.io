import React, { useState, useEffect } from "react";
import Project from "./project";
import Pagination from "./pagination";
import data from "../projects/projects.json";
import projectStyle from "./project.module.css";

export default function Projects() {
  const [projects] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(4);

  const indexLastProject = currentPage * projectsPerPage;
  const indexFirstProject = indexLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexFirstProject, indexLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <h1 className="sectionTitle">PROJECTS</h1>
      <div className={projectStyle.projects}>
        {currentProjects.map((project) => {
          return (
            <Project
              key={project.id}
              name={project.name}
              icon={project.icon}
              description={project.description}
              source={project.source}
              chips={project.technologies}
              type={project.type}
            />
          );
        })}
        <Pagination
          projectsPerPage={projectsPerPage}
          totalProjects={projects.length}
          paginate={paginate}
        />
      </div>
    </>
  );
}
