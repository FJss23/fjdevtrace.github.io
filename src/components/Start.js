import React from "react";
import { Link } from "gatsby";
import startStyle from "./start.module.css";
import itch from "../../static/itch.png";
import linkedin from "../../static/linkedin.png";
import github from "../../static/github.png";

export default function Start() {
  return (
    <section className={startStyle.frontpage}>
      <div>
        <div className={startStyle.header}>
          <div className={startStyle.titles}>
            <Link to="/" className={startStyle.home}>
              <h2 className={startStyle.subtitle}>Hi, I am Francisco</h2>
              <h1 className={startStyle.title}>Software Engineer</h1>
            </Link>
          </div>
        </div>
        <div className={startStyle.logos}>
          <a
            href="https://fjss23.itch.io/"
            className={startStyle.logo}
            target="_blank"
            rel="noreferrer"
          >
            <img src={itch} alt="Itch logo" className={startStyle.itch} />
          </a>
          <a
            href="https://github.com/FJss23"
            className={startStyle.logo}
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="LinkedIn logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/francisco-rw-8975091b9/"
            className={startStyle.logo}
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="GitHub logo" />
          </a>
        </div>
      </div>
    </section>
  );
}
