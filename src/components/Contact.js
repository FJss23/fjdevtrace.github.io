import React, { useState } from "react"
import contactStyle from "./contact.module.css"

export default function Contact() {
  const [response, setResponse] = useState({})

  const submitForm = ev => {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setResponse({ status: "SUCCESS" })
      } else {
        setResponse({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }

  return (
    <>
      <h1 className="sectionTitle" id="contact">
        Contact
      </h1>
      <div className="content">
        <legend>
          You can find me on{" "}
          <a href="https://github.com/FJss23" target="_blank" rel="noreferrer">
            <strong>Linkedin</strong>
          </a>
          ,{" "}
          <a href="https://fjss23.itch.io/" target="_blank" rel="noreferrer">
            <strong>Itchio</strong>
          </a>
          ,{" "}
          <a href="https://github.com/FJss23" target="_blank" rel="noreferrer">
            <strong>Github</strong>
          </a>{" "}
          or{" "}
          <a
            href="https://stackoverflow.com/users/11566404/fjss23?tab=profile"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Stackoverflow</strong>
          </a>
          . Please enter your contact details and a short message below, I will
          try to answer your request as soon as posible.
        </legend>
        <form
          className={contactStyle.container}
          method="POST"
          action="https://formspree.io/xwkwkoon"
          onSubmit={submitForm}
        >
          <input
            placeholder="Name *"
            className={contactStyle.item}
            name="name"
            maxLength="70"
            required
          />
          <input
            placeholder="Email *"
            className={contactStyle.item}
            name="email"
            maxLength="70"
            required
          />
          <textarea
            placeholder="Message *"
            className={`${contactStyle.item} ${contactStyle.area}`}
            name="message"
            maxLength="250"
            required
          />
          <input type="text" name="_gotcha" style={{ display: `none` }} />
          {response.status === "SUCCESS" ? (
            <p>Thanks!</p>
          ) : (
            <button
              type="submit"
              className={`${contactStyle.item} ${contactStyle.btn}`}
            >
              Submit
            </button>
          )}
          {response.status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
    </>
  )
}
