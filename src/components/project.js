import React from "react";
import projectStyle from "./project.module.css";
import Chip from "./chip";

export default function Project(props) {
  return (
    <div className={`${projectStyle.card} ${projectStyle.container}`}>
      <div>
        <div className={projectStyle.title}>
          <span>
            {props.name} {props.icon}
          </span>
        </div>
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
      </div>
      <div className={projectStyle.technologies}>
        <div>
          <span className={projectStyle.subtitle}>Type:</span>
          <div>
            <Chip chip={props.type} />;
          </div>
        </div>
        <div>
          <span className={projectStyle.subtitle}>Technologies:</span>
          <div>
            {props.chips &&
              props.chips.map((text) => {
                return <Chip chip={text} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
