import React from 'react';
import Project from './project';

export default function Projects() {
  return (
    <>
      <h1 className="sectionTitle">PROJECTS</h1>
      <div>
        <Project
          name="Circuit Simulator"
          icon="🚀"
          description="Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Accusamus ipsa, nihil corporis ratione libero voluptate 
          fugiat minus, dolore at blanditiis"
          source="https://github.com/FJss23/CirsimWeb"
        />
        <Project
          name="Circuit Simulator"
          icon="🚀"
          description="Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Accusamus ipsa, nihil corporis ratione libero voluptate 
          fugiat minus, dolore at blanditiis"
          source="https://github.com/FJss23/CirsimWeb"
        />
        <Project
          name="Circuit Simulator"
          icon="🚀"
          description="Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Accusamus ipsa, nihil corporis ratione libero voluptate 
          fugiat minus, dolore at blanditiis"
          source="https://github.com/FJss23/CirsimWeb"
        />
      </div>
    </>
  );
}
