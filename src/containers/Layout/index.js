import React from "react";
import { Header } from "../../components";
import { Container } from './style';

export default function Layout({children, restProps}) {
  return (
    <Container {...restProps}>
      <Header />
      <main>
        {children}
      </main>
    </Container>
  )
};