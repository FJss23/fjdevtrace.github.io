import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/LayoutBlog"
import PostPreview from "../components/PostPreview"
import blogListStyle from "./bloglist.module.css"
import SEO from "../components/seo"

export default function BlogList({ data, pageContext }) {
  const posts = data.allMarkdownRemark.edges
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/blog" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <Layout>
      <SEO title="Blog" description="Blog section of my personal website" />
      <h1 className="sectionTitle">Blog</h1>
      {posts.map(({ node }, index) => {
        return (
          <PostPreview
            title={node.frontmatter.title || node.fields.slug}
            slug={node.fields.slug}
            date={node.frontmatter.date}
            description={node.frontmatter.description || node.excerpt}
            imgFluid={node.frontmatter.featuredImage.childImageSharp.fluid}
            key={index}
            readTime={node.fields.readingTime.text}
            space={false}
            last={false}
          />
        )
      })}
      <ul className={blogListStyle.list}>
        {!isFirst && (
          <Link to={prevPage} className={blogListStyle.element} rel="prev">
            ← Previous
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <li key={`pagination-number${i + 1}`}>
            <Link
              className={`${blogListStyle.element} ${
                i + 1 === currentPage ? "active" : ""
              }`}
              to={`/blog/${i === 0 ? "" : i + 1}`}
            >
              {i + 1}
            </Link>
          </li>
        ))}
        {!isLast && (
          <Link className={blogListStyle.element} to={nextPage} rel="next">
            Next →
          </Link>
        )}
      </ul>
    </Layout>
  )
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
