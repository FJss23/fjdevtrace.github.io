import React from "react"
import { Link, graphql } from "gatsby"
import blogPostStyle from "./blogpost.module.css"
import Bio from "../components/bio"
import Layout from "../components/LayoutBlog"
import SEO from "../components/seo"
import Img from "gatsby-image"

export default function BlogPostTemplate({ data, pageContext, location }) {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next, readingTime } = pageContext
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  const image = post.frontmatter.image
    ? post.frontmatter.featuredImage.childImageSharp.resize
    : null

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={image}
        pathname={location.pathname}
      />
      <article itemScope itemType="http://schema.org/Article">
        <header className={blogPostStyle.container}>
          <h1
            id="blog-title"
            itemProp="headline"
            className={`${blogPostStyle.item} ${blogPostStyle.title}`}
          >
            {post.frontmatter.title}
          </h1>
          <Bio
            datePost={post.frontmatter.date}
            readingTime={readingTime}
            id={blogPostStyle.bio}
            className={blogPostStyle.item}
          />
          <div className={`${blogPostStyle.img}`}>
            <Img fluid={featuredImgFluid} />
          </div>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
      </article>
      <nav>
        <ul className={blogPostStyle.list}>
          <li>
            {previous && (
              <Link to={`/blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export const BlogPostBySlug = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    }
  }
`
