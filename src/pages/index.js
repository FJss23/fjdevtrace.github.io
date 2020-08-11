import React from "react";
import Navigation from "../components/navigation";
import indexStyle from "./index.module.css";
import navigationStyle from "../components/navigation.module.css";

export default function Home() {
  return (
    <div>
      <h4 className={indexStyle.subtitle}>Hi, I am Francisco</h4>
      <h1 className={indexStyle.title}>Software Engineer</h1>
      <h4 className={indexStyle.types}>Mobile | Web | Desktop</h4>
      <div>
        <a href="#">
          <img src="" alt="Itch logo" />
        </a>
        <a href="#">
          <img src="" alt="LinkedIn logo" />
        </a>
        <a href="#">
          <img src="" alt="GitHub logo" />
        </a>
      </div>
      <Navigation
        global={""}
        nav={navigationStyle.nav}
        link={indexStyle.element}
        active={""}
      />
    </div>
  );
}
