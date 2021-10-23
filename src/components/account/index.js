import React from "react";
import { Header } from "../about/style";
import { Container, Level, Button, Details, Text } from "./style";

export default function Account({ darkTheme }) {
  return (
    <Container>
      <Header className="text-center">Account</Header>
      <div>
        <div className="d-flex flex-column align-items-center level-cont">
          <Level
            className="text-center d-flex justify-content-center align-items-center flex-column mb-3"
            darkTheme={darkTheme}
          >
            <Text type="lg">Level 1</Text>
            <Text type="md">Account Limit: 6000BTC</Text>
          </Level>
          <Button>Increase limit</Button>
        </div>
        <Details className="p-4 col-sm-12" darkTheme={darkTheme}>
          <Text type="sm-md">Buy/Sell</Text>
          <Text className="px-5" type="sm">
            No trade yet
          </Text>
          <div></div>
        </Details>
      </div>
    </Container>
  );
}
