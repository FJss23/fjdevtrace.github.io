import React from "react"
import PostPreview from "./PostPreview"
import { graphql, useStaticQuery } from "gatsby"

export default function BlogSection() {
  const data = useStaticQuery(graphql`
    query PostQuery {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1
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
  `)

  return (
    <>
      <h1 className="sectionTitle"> Last</h1>
      <div className="content">
        {data.allMarkdownRemark.edges.map(({ node }, index) => {
          return (
            <PostPreview
              title={node.frontmatter.title || node.fields.slug}
              slug={node.fields.slug}
              date={node.frontmatter.date}
              description={node.frontmatter.description || node.excerpt}
              imgFluid={node.frontmatter.featuredImage.childImageSharp.fluid}
              key={index}
              readTime={node.fields.readingTime.text}
              space={true}
            />
          )
        })}
      </div>
    </>
  )
}
