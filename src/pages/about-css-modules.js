import React from "react";
import Container from "../components/container";
import styles from "./about-css-modules.module.css";

console.log(styles);

const User = props => (
  <div className={styles.user}>
    <img src="{props.avatar}" className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
);

export default function AboutCssModules() {
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool</p>
    </Container>
  );
}
