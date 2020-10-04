import React from "react"
import chipStyle from "./chip.module.css"

export default function Chip(props) {
  return (
    <span className={chipStyle.chip}>
      <span
        className={`${chipStyle.chipValue} ${
          props.type === true ? chipStyle.type : chipStyle.technology
        }`}
      >
        {props.chip}
      </span>
    </span>
  )
}
