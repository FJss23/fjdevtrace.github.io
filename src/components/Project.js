import React from "react";
import projectStyle from "./project.module.css";
import Chip from "./Chip";

export default function Project(props) {
  return (
    <div className={`${projectStyle.card} ${projectStyle.container}`}>
      <div className={projectStyle.descriptions}>
        <div>
          <h2 className={projectStyle.title}>
            <span role="img" aria-label={props.iconDescription}>
              {props.icon}
            </span>{" "}
            {props.name}{" "}
            <span role="img" aria-label={props.iconDescription}>
              {props.icon}
            </span>
          </h2>
          <div>
            <span>{props.description}</span>
          </div>
        </div>
        <div>
          {props.source.map((element, index) => {
            return (
              <div className={projectStyle.subtitle} key={index}>
                {props.link[index]}:{" "}
                <a
                  href={`${element}`}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                >
                  <strong>Repository</strong>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className={projectStyle.type}>
        <Chip chip={props.type} type={true} />
        {props.chips &&
          props.chips.map((text, index) => {
            return <Chip chip={text} type={false} key={index} />;
          })}
      </div>
    </div>
  );
}
