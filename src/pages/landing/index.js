import React from "react";
import { Hero, About, Vendor, Benefits } from "../../components";
import { Container } from "./style";

export default function Landing({setIsAtTop, restProps }) {

  return (
    <Container {...restProps}>
      <Hero setIsAtTop={setIsAtTop}/>
      <About />
      <Vendor />
      <Benefits />
    </Container>
  );
}
