import React from "react";
import { Link } from "gatsby";
import NavBar from "../components/navbar";

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact"> Contact</Link>
      <NavBar headerText="Home" />
      <h1>Hello Gatsby!</h1>
      <p>What a world</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  );
}
