import React from "react";
import contactStyle from "./contact.module.css";

export default function Contact() {
  return (
    <>
      <h1 className="sectionTitle">CONTACT</h1>
      <div className={contactStyle.content}>
        <legend>
          Please enter your contact details and a short message below, I will
          try to answer your request as soon as posible
        </legend>
        <form className={contactStyle.container}>
          <input placeholder="Name *" className={contactStyle.item} required />
          <input placeholder="Email *" className={contactStyle.item} required />
          <textarea
            placeholder="Message *"
            className={`${contactStyle.item} ${contactStyle.area}`}
            required
          />
          <button
            type="submit"
            className={`${contactStyle.item} ${contactStyle.btn}`}
          >
            SEND
          </button>
        </form>
      </div>
    </>
  );
}
