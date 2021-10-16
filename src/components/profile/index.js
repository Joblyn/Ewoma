import React from "react";
import { ReactComponent as ProfileAside } from "../../assets/images/profileaside.svg";
import { ReactComponent as Avatar } from "../../assets/images/avatar.svg";
import {
  Container,
  User,
  UserName,
  Amount,
  Status,
  ImgContainer,
  Button
} from "./style";

export default function Profile() {
  return (
    <Container className="row">
      <User className="d-flex flex-column justify-content-center align-items-center col-md-6 col-sm-12 col-lg-6">
        <div className="d-flex flex-row align-items-center justify-content-center">
          <Avatar />
          <div className="d-flex flex-column align-items-start justify-content-center">
            <UserName>Kparobo 1234</UserName>
            <Amount>0 BTC</Amount>
            <Status>Online</Status>
          </div>
        </div>
        <Button>View Profile</Button>
      </User>
      <ImgContainer className="d-flex justify-content-center align-items-center col-md-6 col-sm-12 col-lg-6 mb-5">
        <ProfileAside />
      </ImgContainer>
    </Container>
  );
}
