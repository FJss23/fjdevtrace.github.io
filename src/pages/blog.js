import React from "react";
import Layout from "../components/layout";
import blogStyle from "./blog.module.css";

export default function Blog() {
  return (
    <Layout>
      <div className={blogStyle.imgcontainer}>
        <img src="workinprogress.png" alt="Work in progress" />
      </div>
    </Layout>
  );
}
