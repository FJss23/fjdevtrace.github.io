import React from "react";
import blogStyle from "./blog.module.css";

export default function Blog() {
  return (
    <div className={blogStyle.imgcontainer}>
      <img src="workinprogress.png" alt="Work in progress" />
    </div>
  );
}
