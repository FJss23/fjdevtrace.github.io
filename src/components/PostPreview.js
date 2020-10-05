import React from "react"
import { Link } from "gatsby"
import postPrevStyle from "./postPreview.module.css"
import Img from "gatsby-image"
import Bio from "./bio"

export default function PostPreview({
  title,
  slug,
  date,
  description,
  imgFluid,
  readTime,
  space,
}) {
  const bigTitle = title || slug

  return (
    <article
      key={slug}
      itemScope
      itemType="http://schema.org/Article"
      className={`${postPrevStyle.container} ${
        space === true ? "" : postPrevStyle.space
      }`}
    >
      <Img fluid={imgFluid} className={postPrevStyle.img} />
      <header className={postPrevStyle.header}>
        <h2 className={postPrevStyle.title}>
          <Link to={`/blog${slug}#blog-title`} itemProp="url">
            <span itemProp="headline">{bigTitle}</span>
          </Link>
        </h2>
        <p
          dangerouslySetInnerHTML={{
            __html: description,
          }}
          itemProp="description"
          className={postPrevStyle.description}
        />
        <Bio datePost={date} readingTime={readTime} />
      </header>
    </article>
  )
}
