import React, { useState } from "react";
import { ReactComponent as Offer } from "../../assets/icons/offer.svg";
import { Container, Link, OfferFunds, Text, Button } from "./style";
import { Header } from "../about/style";

export default function Offers() {
  const [active, setActive] = useState("sell");

  return (
    <Container>
      <Header>My Offers</Header>

      <div className="px-3 px-md-5 d-flex flex-row">
        <Link onClick={() => setActive("sell")} className="d-flex flex-row align-items-center">
          <span className={active === "sell" ? "active" : ""}>
            Offers to sell
          </span>
          <span className="badg d-flex justify-content-center align-items-center">0</span>
        </Link>
        <Link onClick={() => setActive("buy")} className="d-flex flex-row align-items-center">
          <span className={active === "buy" ? "active" : ""}>
            Offers to buy
          </span>
          <span className="badg d-flex justify-content-center align-items-center">0</span>
        </Link>
      </div>

      <OfferFunds className="p-4 d-flex flex-column align-items-center justify-content-end text-center mb-5 w-100">
        <Offer />
        <Text>No Offer funds</Text>
        <span className="btn">Create New Offer</span>
      </OfferFunds>

      <Button>View Offers</Button>
    </Container>
  );
}
