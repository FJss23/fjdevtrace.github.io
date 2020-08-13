import React from "react";
import aboutStyle from "./about.module.css";
import { Link } from "gatsby";

export default function About() {
  return (
    <div className={aboutStyle.row}>
      <div className={aboutStyle.column}>
        <img src="avatar.png" alt="Personal logo" />
      </div>
      <div className={aboutStyle.column}>
        <p>
          My name is Francisco and I am a Software Engineer based in Spain.{" "}
        </p>
        <p>
          I have a strong passion for open source, game development and design,
          which influences my professional work.{" "}
        </p>
        <p>
          When it comes to programming language, I've managed to pick up the
          following skills along the way.
        </p>
        <ul>
          <li>Java</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>C#</li>
          <li>C++</li>
          <li>Python</li>
        </ul>
        <p>
          For information about my professional experience, please visit my{" "}
          <a href="#">LinkedIn</a> profile or{" "}
          <Link to="/contact">Contact Me</Link> requesting my CV.
        </p>
      </div>
    </div>
  );
}
