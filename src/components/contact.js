import React from 'react';
import contactStyle from './contact.module.css';

export default function Contact() {
  return (
    <>
      <h1 className="sectionTitle">CONTACT</h1>
      <div>
        <legend>
          Please enter your contact details and a short message below, I will
          try to answer your request as soon as posible
        </legend>
        <form className={contactStyle.container}>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <textarea placeholder="Message" />
          <button type="submit">SEND</button>
        </form>
      </div>
    </>
  );
}
