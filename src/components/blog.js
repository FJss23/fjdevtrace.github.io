import React from 'react';
import blogStyle from './blog.module.css';

export default function Blog() {
  return (
    <>
      <h1>BLOG</h1>
      <div className={blogStyle.imgcontainer}>
        <img src="workinprogress.png" alt="Work in progress" />
      </div>
    </>
  );
}
