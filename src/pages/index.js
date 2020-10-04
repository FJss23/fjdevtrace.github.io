import React from "react"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import BlogSection from "../components/BlogSection"
import SEO from "../components/seo"
import Layout from "../components/LayoutBlog"
import { graphql } from "gatsby"

export default function Home({ data, location }) {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Home"
        description="principal page where you can find the techonologies that i know, projects that i have worked and a contact form to contact me"
      />
      <About />
      <Projects />
      <BlogSection />
      <Contact />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
