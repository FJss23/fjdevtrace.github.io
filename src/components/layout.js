import React from "react";
import Navigation from "./navigation";
import Container from "./container";
import navigationStyle from "./navigation.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Navigation
        global={navigationStyle.global}
        nav={navigationStyle.nav}
        link={navigationStyle.link}
        active={navigationStyle.active}
      />
      <Container>{children}</Container>
    </>
  );
}
