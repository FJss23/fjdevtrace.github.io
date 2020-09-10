import React from "react";
import footerStyle from "./footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={footerStyle.date}>
        www.fjss23.xyz &#169; {new Date().getFullYear()}
      </div>
    </footer>
  );
}
