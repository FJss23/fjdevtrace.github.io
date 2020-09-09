import React from "react";
import Start from "../components/Start";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Blog from "../components/Blog";
import Section from "../components/Section";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Start />
      <Section>
        <Blog />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <Projects />
      </Section>
      <Section>
        <Contact />
      </Section>
      <Footer />
    </>
  );
}
