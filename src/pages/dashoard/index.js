import React from "react";
import { Account, GiftBit, Offers, Profile } from "../../components";
import { Container } from "./style";

export default function Dashboard({ darkTheme }) {
  return (
    <Container>
      <Profile />
      <Offers darkTheme={darkTheme}/>
      <Account darkTheme={darkTheme}/>
      <GiftBit darkTheme={darkTheme}/>
    </Container>
  )
}