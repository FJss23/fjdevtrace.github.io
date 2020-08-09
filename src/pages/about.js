import React from "react";
import Layout from "../components/layout";
import aboutStyle from "./about.module.css";

export default function About() {
  return (
    <Layout>
      <div className={aboutStyle.row}>
        <div className={aboutStyle.column}>
          <img
            src="avatar2.svg"
            alt="Personal logo"
            width="100%"
            height="auto"
          />
        </div>
        <div className={aboutStyle.column}>
          <p>
            My name is Francisco and I am a Software Engineer based in Spain.{" "}
          </p>
          <p>
            I have a strong passion for open source, game development and
            design, which influences my professional work.{" "}
          </p>
          <p>
            When it comes to programming language, I've managed to pick up the
            following skills along the way.
          </p>
          <ul>
            <li>Java</li>
            <li>C#</li>
            <li>C++</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
          </ul>
          <p>
            For information about my professional experience, please visit my
            LinkedIn profile or Contact Me requesting my CV.
          </p>
        </div>
      </div>
    </Layout>
  );
}
