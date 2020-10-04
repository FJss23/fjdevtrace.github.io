import React from "react"
import Layout from "../components/LayoutBlog"
import SEO from "../components/seo"

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not Found" />
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
        }}
      >
        <h1>
          Not Found{" "}
          <span
            role="img"
            aria-label="A yellow face with furrowed eyebrows looking upwards with thumb and index finger resting on its chin. Intended to show a person pondering or deep in thought"
          >
            🤔
          </span>
        </h1>
        <p>You just hit a route that doesn&#39;t exist...</p>
      </div>
    </Layout>
  )
}
