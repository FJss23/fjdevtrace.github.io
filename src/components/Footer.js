import React from "react"
import footerStyle from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={footerStyle.end}>
      <div className={footerStyle.date}>
        FJss23 &#169; {new Date().getFullYear()}
      </div>
    </footer>
  )
}
