import React from "react";
import {
  Container,
  Header,
  SubHeader,
  NumberInput,
  Code,
  Digit,
  Buttons,
  Button,
  Overlay,
  LockBody
} from "./style";
import { BsArrowLeft, BsPhone } from "react-icons/bs";

export default function VerificationModal({
  verificationModal,
  setVerificationModal,
  darkTheme,
  ...restProps
}) {

  return (
    <Overlay verificationModal={verificationModal}>
      <LockBody />
      <Container
        {...restProps}
        darkTheme={darkTheme}
        className={!verificationModal && ""}
      >
        <BsArrowLeft
          className="left-icon"
          onClick={() => setVerificationModal(false)}
        />
        <Header>Verificaton Code</Header>
        <SubHeader>Put your phone number</SubHeader>
        <div className="phone-num-cont">
          <BsPhone classNmae="phone-icon" size="20px"/>
          <NumberInput type="text" name="phone_number" autoComplete="off" />
        </div>
        <Code id="otp">
          <Digit type="text" name="first" maxLength="1" autoComplete="off" className="otp"/>
          <Digit type="text" name="second" maxLength="1" autoComplete="off" className="otp"/>
          <Digit type="text" name="third" maxLength="1" autoComplete="off" className="otp"/>
          <Digit type="text" name="fourth" maxLength="1" autoComplete="off" className="otp"/>
        </Code>
        <Buttons>
          <Button>Resend Code</Button>
          <Button>Proceed</Button>
        </Buttons>
      </Container>
    </Overlay>
  );
}
