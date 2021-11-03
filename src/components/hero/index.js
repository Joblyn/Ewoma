import React from "react";
import { Container, TextContainer, Button, ImgContainer } from "./style";
import { ReactComponent as HeroImg } from "../../assets/images/hero.svg";
import * as ROUTES from '../../constants/routes';

export default function Hero({ setIsAtTop, ...restProps }) {

  return (
    <Container {...restProps} className="row">
      <TextContainer className="col-md-6 col-sm-12 col-lg-6 mb-5">
        <h3>We Buy and Sell Bitcoin & Giftcard</h3>
        <p>
          We trade with different Giftcard And deal with bitcoin at different
          rate.
        </p>
        <Button href={ROUTES.SIGNIN}>Get Started</Button>
      </TextContainer>
      <ImgContainer className="col-md-6 col-sm-12 col-lg-6 mb-md-5">
        <HeroImg />
      </ImgContainer>
      <div id="reference"></div>
    </Container>
  );
}
