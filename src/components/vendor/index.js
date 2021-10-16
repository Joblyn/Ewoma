import React from "react";
// import { ReactComponent as VendorImg } from "../../assets/images/vendor.svg";
import ImgPng from '../../assets/images/vendor.png';
import { Container, Header, Text, ImgContainer, Button } from "./style";

export default function Vendor() {
  return (
    <Container className="text-center">
      <Header>Vendor on Exowem</Header>
      <Text>
        Offer multiple payment methods that buyers like, eliminate middlemen,
        and we will help you with all the resources and guidance needed to
        succeed.
      </Text>
      <ImgContainer>
        <img alt="" src={ImgPng}/>
      </ImgContainer>
      <div className="d-flex flex-column align-items-center">
        <h4 className="mb-3">Become a vendor</h4>
        <Button>Start</Button>
      </div>
    </Container>
  );
}
