import React from "react";
import aboutStyle from "./about.module.css";
import { Link } from "gatsby";

export default function About() {
  return (
    <>
      <h1 className="sectionTitle">ABOUT</h1>
      <div className={aboutStyle.content}>
        <div>
          <span>
            My name is Francisco and I am a Software Engineer based in Spain.{" "}
          </span>
          <p>
            I have a strong passion for a variety of topics like web
            development, IoT, embedded systems and game development. I like
            spent some time learning new technologies, practising sport and
            reading fantasy books.
          </p>
          <p>
            When it comes to programming language, I've managed to pick up the
            following skills along the way.
          </p>
          <ul>
            <li>Java</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
          </ul>
          <span>
            For information about my professional experience, please visit my{" "}
            <a href="#">LinkedIn</a> profile or{" "}
            <Link to="/contact">Contact Me</Link> requesting my CV.
          </span>
        </div>
      </div>
    </>
  );
}
