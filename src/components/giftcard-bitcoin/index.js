import React, { useState } from "react";
import { ReactComponent as Dropdown } from "../../assets/icons/drop.svg";
// import { ReactComponent as Profile1 } from "../../assets/avatar/profile1.svg";
import Profile1 from "../../assets/avatar/profile1.png";
import Profile2 from "../../assets/avatar/profile2.png";
import {
  Container,
  Link,
  Interface,
  Left,
  Group,
  InputGroup,
  Right,
  Title,
  Balance,
  Text,
  Button,
  Amount,
  Name,
  Time,
  Transaction
} from "./style";
import { FormControl } from "react-bootstrap";

export default function GiftBit({ darkTheme }) {
  const [active, setActive] = useState("gift");
  return (
    <Container>
      <div className="d-flex flex-row align-items-center justify-content-center mb-3">
        <Link
          className={active === "gift" ? "active" : ""}
          onClick={() => setActive("gift")}
        >
          Giftcard
        </Link>
        <Link
          className={active === "bit" ? "active" : ""}
          onClick={() => setActive("bit")}
        >
          Bitcoin
        </Link>
      </div>
      <Interface darkTheme={darkTheme}>
        <Left className="d-flex flex-column" darkTheme={darkTheme}>
          <InputGroup className="d-flex flex-row justify-content-between align-items-center" darkTheme={darkTheme}>
            <FormControl type="text" name="amount" placeholder="Enter amount" />
            <span>
              N <Dropdown />
            </span>
          </InputGroup>
          <div className="my-4">
            <Group className="d-flex flex-row justify-content-between align-items-center">
              <span>Weekly Earnings:</span>
              <span>N0.00</span>
            </Group>
            <Group className="d-flex flex-row justify-content-between align-items-center">
              <span>Yearly Earnings:</span>
              <span>N0.00</span>
            </Group>
          </div>
          <Button type="first">Start</Button>
        </Left>
        <Right className="d-flex flex-column" darkTheme={darkTheme}>
          <Title>Giftcard</Title>
          <Balance>
            <Text>Current Balance</Text>
            <Amount>N0.00</Amount>
          </Balance>
          <div>
            <Group className="d-flex flex-row justify-content-between align-items-center">
              <span>Earned:</span>
              <span>N0.00</span>
            </Group>
            <Group className="d-flex flex-row justify-content-between align-items-center">
              <span>Next week Payout:</span>
              <span>N0.00</span>
            </Group>
          </div>
          <Button>Withdraw</Button>
        </Right>
      </Interface>
      <Transaction darkTheme={darkTheme}>
        {/* <div> */}
          <div className="d-flex align-items-align-items-center justify-content-between header">
            <span>Transaction of last month</span>
            <span>Past trades</span>
          </div>
          <table>
            <tbody>
              <tr>
                <td className="d-flex">
                  <img src={Profile1} alt="" />
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <Name>Jahswill</Name>
                    <Time>13:09pm</Time>
                  </div>
                </td>
                <td>itunes</td>
                <td>2</td>
                <td>$2000</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td className="d-flex">
                  <img src={Profile2} alt="" />
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <Name>Jahswill</Name>
                    <Time>13:09pm</Time>
                  </div>
                </td>
                <td>itunes</td>
                <td>2</td>
                <td>$2000</td>
                <td>Completed</td>
              </tr>
            </tbody>
          </table>
          <div className="date">20/09/2021</div>
          <table>
            <tbody>
              <tr>
                <td className="d-flex">
                  <img src={Profile1} alt="" />
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <Name>Jahswill</Name>
                    <Time>13:09pm</Time>
                  </div>
                </td>
                <td>itunes</td>
                <td>2</td>
                <td>$2000</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td className="d-flex">
                  {/* <Profile2 /> */}
                  <img src={Profile2} alt="" />
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <Name>Jahswill</Name>
                    <Time>13:09pm</Time>
                  </div>
                </td>
                <td>itunes</td>
                <td>2</td>
                <td>$2000</td>
                <td>Completed</td>
              </tr>
            </tbody>
          </table>
        {/* </div> */}
      </Transaction>
    </Container>
  );
}
