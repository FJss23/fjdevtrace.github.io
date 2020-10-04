import React from "react"
import projectStyle from "./project.module.css"
import Chip from "./Chip"

export default function Project(props) {
  return (
    <div className={`${projectStyle.card} ${projectStyle.container}`}>
      <div className={projectStyle.descriptions}>
        <div>
          <h2 className={projectStyle.title}>
            {props.name}{" "}
            <span role="img" aria-label={props.iconDescription}>
              {props.icon}
            </span>
          </h2>
          <div>
            <span className={projectStyle.subtitle}>Description:</span>
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
                  className={projectStyle.link}
                  key={index}
                >
                  Repository
                </a>
              </div>
            )
          })}
        </div>
      </div>
      <div className={projectStyle.technologies}>
        <div className={projectStyle.type}>
          <span className={projectStyle.subtitle}>
            Type: <Chip chip={props.type} type={true} />
          </span>
        </div>
        <div>
          <div>
            <span className={projectStyle.subtitle}>Technologies:</span>
            {props.chips &&
              props.chips.map((text, index) => {
                return <Chip chip={text} type={false} key={index} />
              })}
          </div>
        </div>
      </div>
    </div>
  )
}
