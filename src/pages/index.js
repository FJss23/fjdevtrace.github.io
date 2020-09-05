import React from 'react';
import Start from '../components/start';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Blog from '../components/blog';
import Section from '../components/section';

export default function Home() {
  return (
    <>
      <Start />
      <Section>
        <About />
      </Section>
      <Section>
        <Projects />
      </Section>
      <Section>
        <Contact />
      </Section>
      <Section>
        <Blog />
      </Section>
    </>
  );
}
