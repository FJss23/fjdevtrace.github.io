import React, { useState, useEffect } from 'react';
import Project from './project';
import data from '../projects/projects.json';

export default function Projects() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  useEffect(() => {
    const readPosts = async () => {
      setLoading(true);
    };
  });

  return (
    <>
      <h1 className="sectionTitle">PROJECTS</h1>
      <div>
        {data.map((project) => {
          return (
            <Project
              key={project.id}
              name={project.name}
              icon={project.icon}
              description={project.description}
              source={project.source}
            />
          );
        })}
      </div>
    </>
  );
}
