import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import bioStyle from "./bio.module.css"

const Bio = ({ datePost, readingTime }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/avatar.png/" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata

  return (
    <div className={bioStyle.container}>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        className={bioStyle.avatar}
      />
      <div className={bioStyle.desc}>
        <strong className={bioStyle.name}> FJss23</strong>
        <div className={`${bioStyle.info} ${bioStyle.container}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={bioStyle.icon}
            width="17"
            height="17"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#f1faee"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="5" width="16" height="16" rx="2" />
            <line x1="16" y1="3" x2="16" y2="7" />
            <line x1="8" y1="3" x2="8" y2="7" />
            <line x1="4" y1="11" x2="20" y2="11" />
            <rect x="8" y="15" width="2" height="2" />
          </svg>{" "}
          {datePost}
        </div>
        <div className={`${bioStyle.info} ${bioStyle.container}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={bioStyle.icon}
            width="17"
            height="17"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#f1faee"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="9" />
            <polyline points="12 7 12 12 15 15" />
          </svg>
          {readingTime}
        </div>
      </div>
    </div>
  )
}

export default Bio
