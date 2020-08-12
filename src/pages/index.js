import React from "react";
import Navigation from "../components/navigation";
import indexStyle from "./index.module.css";

export default function Home() {
  return (
    <>
      <div className={indexStyle.header}>
        <div className={indexStyle.titles}>
          <h4 className={indexStyle.subtitle}>Hi, I am Francisco</h4>
          <h1 className={indexStyle.title}>Software Engineer</h1>
        </div>
        <h4 className={indexStyle.platform}>Mobile | Web | Desktop</h4>
      </div>
      <div className={indexStyle.logos}>
        <a href="#" className={indexStyle.itch}>
          <img src="itch.png" alt="Itch logo" />
        </a>
        <a href="#" className={indexStyle.linkedin}>
          <img src="linkedin.png" alt="LinkedIn logo" />
        </a>
        <a href="#" className={indexStyle.github}>
          <img src="github.png" alt="GitHub logo" />
        </a>
      </div>
      <Navigation
        global={indexStyle.global}
        nav={indexStyle.nav}
        link={indexStyle.link}
        active={""}
      />
    </>
  );
}
