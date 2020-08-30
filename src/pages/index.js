import React from 'react';
import Start from '../components/start';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Blog from '../components/blog';

export default function Home() {
  return (
    <>
      <Start />
      <About />
      <Projects />
      <Contact />
      <Blog />
    </>
  );
}
