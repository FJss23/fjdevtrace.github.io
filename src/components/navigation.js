import React from "react";
import { Link } from "gatsby";
import navigationStyle from "./navigation.module.css";

const ListLink = props => (
  <li className={navigationStyle.link}>
    <Link to={props.to} activeClassName={navigationStyle.active}>
      {props.children}
    </Link>
  </li>
);

export default function Navigation() {
  return (
    <nav className={navigationStyle.global}>
      <ul className={navigationStyle.nav}>
        <ListLink to="/about">About</ListLink>
        <ListLink to="/projects">Projects</ListLink>
        <ListLink to="/contact">Contact</ListLink>
        <ListLink to="/blog">Blog</ListLink>
      </ul>
    </nav>
  );
}
