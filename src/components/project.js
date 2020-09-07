import React from "react";
import projectStyle from "./project.module.css";

export default function Project(props) {
  return (
    <div className={`${projectStyle.card} ${projectStyle.container}`}>
      <div>
        <div className={projectStyle.title}>
          <span>
            {props.name} {props.icon}
          </span>
        </div>
      </div>
      <div className={projectStyle.technical}>
        <div>
          <div>
            <span className={projectStyle.subtitle}>Description:</span>
            <span>{props.description}</span>
          </div>
          <div>
            <span className={projectStyle.subtitle}>
              Source Code:{" "}
              <a
                href={`${props.source}`}
                target="_blank"
                className={projectStyle.link}
              >
                GitHub Repository
              </a>
            </span>
          </div>
        </div>
        <div>
          <span className={projectStyle.subtitle}>Technologies:</span>
        </div>
      </div>
    </div>
  );
}
