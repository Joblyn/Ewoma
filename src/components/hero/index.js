import React, { useEffect } from "react";
import { Container, TextContainer, Button, ImgContainer } from "./style";
import { ReactComponent as HeroImg } from "../../assets/images/hero.svg";

export default function Hero({ setIsAtTop, ...restProps }) {
  useEffect(() => {
    // const ref = document.getElementById("reference");
    // console.log(ref);
    // const rect = ref.getBoundingClientRect();
    // if (rect.top <= 30) {
    //   setIsAtTop(true);
    // } else {
    //   setIsAtTop(false);
    // }
  }, []);

  return (
    <Container {...restProps} className="row">
      <TextContainer className="col-md-6 col-sm-12 col-lg-6 mb-5">
        <h3>We Buy and Sell Bitcoin & Giftcard</h3>
        <p>
          We trade with different Giftcard And deal with bitcoin at different
          rate.
        </p>
        <Button>Get Started</Button>
      </TextContainer>
      <ImgContainer className="col-md-6 col-sm-12 col-lg-6 mb-md-5">
        <HeroImg />
      </ImgContainer>
      <div id="reference"></div>
    </Container>
  );
}
