import React from "react";
import { ReactComponent as Buy } from "../../assets/icons/buy.svg";
import { ReactComponent as Trade } from "../../assets/icons/trade.svg";
import { ReactComponent as Wallet } from "../../assets/icons/wallet.svg";
import {
  Container,
  Header,
  BenefitsContainer,
  BenefitItem,
  Button
} from "./style";

export default function Benefits() {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-cente text-center">
      <Header>With Exowem you can</Header>
      <BenefitsContainer className="d-flex flex-column align-items-center justify-content-center">
        <BenefitItem className="d-flex flex-column align-items-center">
          <Buy />
          <h5>Buy and Sell online</h5>
          <p>
            Sell at your chosen rate, and get paid in one of numerous payment
            methods and buy with other users online.
          </p>
        </BenefitItem>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-start align-items-center w-100 inner">
          <BenefitItem className="d-flex flex-column align-items-center">
            <Trade />
            <h5>Trade with secure</h5>
            <p>
              Your Bitcoin is held in our secure until the trade is completed
              successfully.
            </p>
          </BenefitItem>
          <BenefitItem className="d-flex flex-column align-items-center">
            <Wallet />
            <h5>Get a free wallet</h5>
            <p>
              Get a Bitcoin wallet maintained by, the leading provider of
              secure Bitcoin wallets.
            </p>
          </BenefitItem>
        </div>
      </BenefitsContainer>
      <div className="d-flex flex-column align-items-center">
        <h4>Start on Exowem</h4>
        <Button>View offers</Button>
      </div>
    </Container>
  );
}
