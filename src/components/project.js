import React from 'react';
import projectStyle from './project.module.css';

export default function Project(props) {
  return (
    <div className={`${projectStyle.card} ${projectStyle.container}`}>
      <div>
        <div>
          <span className={projectStyle.title}>
            {props.name} {props.icon}
          </span>
        </div>
        <div>
          <span className={projectStyle.subtitle}>Description:</span>
          <div>{props.description}</div>
        </div>
        <div>
          <span className={projectStyle.subtitle}>
            Source Code: <a href={`${props.source}`}>GitHub Repository</a>
          </span>
        </div>
      </div>
      <div className={projectStyle.tech}>
        <span className={projectStyle.subtitle}>Technologies:</span>
        <img alt="img1" />
        <img alt="img2" />
        <img alt="img3" />
      </div>
    </div>
  );
}
