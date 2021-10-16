import React from "react";
// import { ReactComponent as AboutImg } from "../../assets/images/about.svg";
import AboutImg from "../../assets/images/about.png";
import { Container, TextContainer, Text, ImgContainer, Header } from "./style";

export default function About() {
  return (
    <Container>
      <Header>About Us</Header>
      <div className="row d-flex justify-content-center align-items-center">
        <TextContainer className="col-lg-6 col-md-6 col-sm-12">
          <Text>
            <h3>Our Website</h3>
            <p>
              Your website serves several important purposes for your company —
              attracting customers, generating leads, and making sales, just to
              name a few. And as your home on the Internet, it also needs to
              explain who you are to the world and why they should choose you
              over your competitors.
            </p>
          </Text>
          <Text>
            <h3>Sell</h3>
            <p>
              Buy and sell digital currencies using over 350 different payment
              methods. Get your Paxful account to start accepting payments and
              sending money with 6 million people just like you.
            </p>
          </Text>
        </TextContainer>
        <ImgContainer className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
          <img src={AboutImg} alt="" />
        </ImgContainer>
      </div>
    </Container>
  );
}
