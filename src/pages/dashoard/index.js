import React from "react";
import { Account, GiftBit, Offers, Profile } from "../../components";
import { Container } from "./style";

export default function Dashboard() {
  return (
    <Container>
      <Profile />
      <Offers />
      <Account />
      <GiftBit />
    </Container>
  )
}