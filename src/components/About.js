import React from "react";
import { Link } from "gatsby";
import aboutStyle from "./about.module.css";

export default function About() {
  return (
    <>
      <h1 className="sectionTitle" id="about">
        About
      </h1>
      <div className="content">
        <div>
          <span>
            My name is Francisco and I am a Software Engineer based in Spain.{" "}
          </span>
          <p>
            I have a strong passion for a variety of topics like web
            development, IoT, embedded systems and game development. I like
            spent some time learning new technologies, practise sport and
            reading fantasy books.
          </p>
          <p>
            When it comes to software development I've managed to pick up the
            following skills along the way:
          </p>
          <div className={aboutStyle.container}>
            <div className={`${aboutStyle.items} ${aboutStyle.item}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#00BCD4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                id={aboutStyle.lang}
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="7 8 3 12 7 16" />
                <polyline points="17 8 21 12 17 16" />
                <line x1="14" y1="4" x2="10" y2="20" />
              </svg>
              <section className={aboutStyle.section}>
                <strong>Programming languages</strong>
                <p className={aboutStyle.text}>
                  Java, JavaScript / TypeScript and Python
                </p>
              </section>
            </div>
            <div className={`${aboutStyle.items} ${aboutStyle.item}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="58"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#00BCD4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="9" y1="3" x2="15" y2="3" />
                <line x1="10" y1="9" x2="14" y2="9" />
                <path d="M10 3v6l-4 11a.7 .7 0 0 0 .5 1h11a.7 .7 0 0 0 .5 -1l-4 -11v-6" />
              </svg>
              <section className={aboutStyle.section}>
                <strong>Technologies</strong>
                <p className={aboutStyle.text}>
                  HTML, CSS, Angular, Express and Spring / Spring Boot
                </p>
              </section>
            </div>
            <div className={`${aboutStyle.items} ${aboutStyle.item}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#00BCD4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                id={aboutStyle.db}
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>
                <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
                <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
              </svg>
              <section className={aboutStyle.section}>
                <strong>Databases</strong>
                <p className={aboutStyle.text}>
                  Postgres, Oracle, SQL Server and DB2
                </p>
              </section>
            </div>
            <div className={`${aboutStyle.items} ${aboutStyle.item}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#00BCD4"
                fill="none"
                strokeLinecap="round"
                strokeinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="12" y1="12" x2="12" y2="12.01" />
                <path
                  d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10"
                  transform="rotate(45 12 12)"
                />
                <path
                  d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10"
                  transform="rotate(-45 12 12)"
                />
              </svg>
              <section className={aboutStyle.section}>
                <strong>Others</strong>
                <p className={aboutStyle.text}>
                  Linux, Raspberry Pi, Arduino, Godot, Inkscape and Vim
                </p>
              </section>
            </div>
          </div>
          <span>
            For information about my professional experience, please visit my{" "}
            <a href="/contact">
              <strong>Linkedin</strong>
            </a>{" "}
            profile or{" "}
            <Link to="/contact">
              <strong>Contact</strong>
            </Link>{" "}
            me requesting my CV.
          </span>
        </div>
      </div>
    </>
  );
}
