import React from "react";
import {
  Container,
  Header,
  SubHeader,
  NumberInput,
  Code,
  Digit,
  Buttons,
  Button
} from "./style";

export default function VerificationModal({ ...restProps }) {
  return (
    <Container {...restProps}>
      <Header>Verificaton Code</Header>
      <SubHeader>Put your phone number</SubHeader>
      <NumberInput type="text" name="phone_number" />
      <Code>
        <Digit type="number" name="first digit" />
        <Digit type="number" name="second_digit" />
        <Digit type="number" name="third_digit" />
        <Digit type="number" name="fourth_digit" />
      </Code>
      <Buttons>
        <Button>Resend Code</Button>
        <Button>Proceed</Button>
      </Buttons>
    </Container>
  );
}
