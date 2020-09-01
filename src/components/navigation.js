import React from 'react';
import { Link } from 'gatsby';
import navStyle from './navigation.module.css';

export default function Navigation() {
  return (
    <>
      <nav className={navStyle.global}>
        <ul className={navStyle.nav}>
          <li className={`${navStyle.link} ${navStyle.effect}`}>
            <Link to="/about">About</Link>
          </li>
          <li className={`${navStyle.link} ${navStyle.effect}`}>
            <Link to="/projects">Projects</Link>
          </li>
          <li className={`${navStyle.link} ${navStyle.effect}`}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={`${navStyle.link} ${navStyle.effect}`}>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
