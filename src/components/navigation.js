import React from "react";
import { Link } from "gatsby";

export default function Navigation({ global, nav, link, active }) {
  return (
    <nav className={global}>
      <ul className={nav}>
        <li className={link}>
          <Link to="/about" activeClassName={active}>
            About
          </Link>
        </li>
        <li className={link}>
          <Link to="/projects" activeClassName={active}>
            Projects
          </Link>
        </li>
        <li className={link}>
          <Link to="/contact" activeClassName={active}>
            Contact
          </Link>
        </li>
        <li className={link}>
          <Link to="/blog" activeClassName={active}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
