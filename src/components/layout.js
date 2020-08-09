import React from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import Container from "./container";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}
