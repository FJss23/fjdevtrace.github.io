import React from "react";
import chipStyle from "./chip.module.css";

export default function Chip(props) {
  return (
    <span className={chipStyle.chip}>
      <span className={chipStyle.chipValue}>{props.chip}</span>
    </span>
  );
}
