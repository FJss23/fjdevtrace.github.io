import React from "react"
import Nav from "./Nav"
import Start from "./Start"
import Footer from "./Footer"
import sectionStyle from "./section.module.css"

export default function Layout({ children }) {
  return (
    <>
      <Start />
      <Nav />
      <main className={sectionStyle.section}>{children}</main>
      <Footer />
    </>
  )
}
