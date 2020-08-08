import React from "react";
import { Link } from "gatsby";
import NavBar from "../components/navbar";

export default function Contact() {
  return (
    <div style={{ coor: `teal` }}>
      <Link to="/">Home</Link>
      <NavBar headerText="Contact" />
      <p>Send us a message</p>
    </div>
  );
}
