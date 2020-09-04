import React from "react";
import sectionStyle from "./section.module.css";

export default function Section({ children }) {
  render(<div className={sectionStyle.section}>{children}</div>);
}
