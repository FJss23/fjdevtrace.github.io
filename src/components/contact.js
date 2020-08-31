import React from 'react';

export default function Contact() {
  return (
    <>
      <h1>CONTACT</h1>
      <div>
        <p>
          Please enter your contact details and a short message below, I will
          try to answer your request as soon as posible
        </p>
        <form>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <textarea placeholder="Message" />
          <button type="submit">SEND</button>
        </form>
      </div>
    </>
  );
}
