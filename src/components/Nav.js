import React from "react"
import { Link } from "gatsby"
import navStyle from "./nav.module.css"

export default function Nav() {
  return (
    <nav className={navStyle.global}>
      <ul className={navStyle.nav}>
        <li
          className={`${navStyle.link} ${navStyle.effect}`}
          id={navStyle.home}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={`${navStyle.link} ${navStyle.effect}`}
          id={navStyle.blog}
        >
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  )
}
