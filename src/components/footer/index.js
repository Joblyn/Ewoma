import React, { useState } from "react";
import { ReactComponent as App } from "../../assets/images/app.svg";
import { ReactComponent as Play } from "../../assets/images/play.svg";
import { Container, CheckButton, Inner, Header, Ul, Item } from "./style";

export default function Footer() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <Container>
      <div>
        <CheckButton darkTheme={darkTheme}>
          <span className="parent" onClick={() => setDarkTheme(!darkTheme)}>
            <span className="move"></span>
          </span>
          Theme
        </CheckButton>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mt-4">
        <Inner className="d-flex flex-column align-items-start mb-3">
          <Header className="">Explore</Header>
          <Ul>
            <Item>Buy bitcoin</Item>
            <Item>Buy Giftcard</Item>
            <Item>
              <App />
            </Item>
            <Item>
              <Play />
            </Item>
          </Ul>
        </Inner>
        <Inner className="d-flex flex-column align-items-start mb-3">
          <Header>Legal and support</Header>
          <Ul>
            <Item>Terms and Condition</Item>
            <Item>Privacy and Policy</Item>
            <Item>exoduswem@gmail.com</Item>
            <Item>08068696107</Item>
          </Ul>
        </Inner>
        <Inner className="d-flex flex-column align-items-start mb-3">
          <Header>Social</Header>
          <Ul>
            <Item>Facebook</Item>
            <Item>Twitter</Item>
            <Item>Instagram</Item>
            <Item>Whatsapp</Item>
          </Ul>
        </Inner>
      </div>
    </Container>
  );
}
