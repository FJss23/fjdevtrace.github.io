import React from "react";
import footerStyle from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={footerStyle.main}>
      <p className={footerStyle.motiv}>
        "No matter how far you go down the wrong road, you can always turn back"
      </p>{" "}
      <object type="image/svg+xml" data="avatar.svg" className="logo"></object>
      <div className={footerStyle.date}>
        www.fjss23.xyz &#169; {new Date().getFullYear()}
      </div>
    </footer>
  );
}
