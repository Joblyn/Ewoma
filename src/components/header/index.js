/* eslint-disable no-undef */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  NavLink,
  Nav,
  Button,
  NavList,
  NavListItem,
  MenuIcon,
  LockBody,
  Overlay
} from "./style";
import { ReactComponent as Dropdown } from "../../assets/icons/dropdown.svg";
import { ReactComponent as CarbonFirewall } from "../../assets/icons/carbon:firewall.svg";
import { ReactComponent as FontistoShopping } from "../../assets/icons/fontisto:shopping.svg";
import { ReactComponent as VectorRight } from "../../assets/icons/vector-right.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Privacy } from "../../assets/icons/privacy.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as Logout } from "../../assets/icons/logout.svg";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import * as ROUTES from "../../constants/routes";

export default function Header({ darkTheme, isAtTop, restProps }) {
  const [showNav, setShowNav] = useState(false);
  const [changeBg, setChangeBg] = useState(false);
  const [buyDropdown, setBuyDropdown] = useState(false);
  const [sellDropdown, setSellDropdown] = useState(false);
  const [supportDropdown, setSupportDropdown] = useState(false);

  const handleBuyDropdown = () => {
    setBuyDropdown(!buyDropdown);
    setSellDropdown(false);
    setSupportDropdown(false);
  };

  const handleSellDropdown = () => {
    setSellDropdown(!sellDropdown);
    setBuyDropdown(false);
    setSupportDropdown(false);
  };
  const handleSupportDropdown = () => {
    setSupportDropdown(!supportDropdown);
    setSellDropdown(false);
    setBuyDropdown(false);
  };

  if (isAtTop) {
    setChangeBg(true);
  }

  const closeNavOnOutsideClick = () => {
    if (showNav) {
      setShowNav(false);
    }
  };
  return (
    <Container {...restProps} changeBg={changeBg} darkTheme={darkTheme}>
      <MenuIcon showNav={showNav} darkTheme={darkTheme}>
        <AiOutlineMenuUnfold size={35} onClick={() => setShowNav(!showNav)} />
      </MenuIcon>
      {showNav && <LockBody />}
      {showNav && <Overlay onClick={closeNavOnOutsideClick} />}
      <Nav showNav={showNav} darkTheme={darkTheme}>
        <NavList>
          <NavListItem darkTheme={darkTheme} onClick={() => setShowNav(false)}>
            <span>
              <NavLink exact activeClassName="active" to={ROUTES.HOME}>
                Home
              </NavLink>
            </span>
          </NavListItem>
          <NavListItem darkTheme={darkTheme} onClick={() => setShowNav(false)}>
            <span>
              <NavLink activeClassName="active" to={ROUTES.DASHBOARD}>
                Dashboard
              </NavLink>
            </span>
          </NavListItem>
          <NavListItem darkTheme={darkTheme} buyDropdown={buyDropdown}>
            <span className="with-dropdown buy" onClick={handleBuyDropdown}>
              <div className="d-flex flex-row align-items-center">
                <Link to="">Buy</Link> <Dropdown />
              </div>
              <span
                className="dropdown-container"
                onMouseLeave={() => setBuyDropdown(false)}
              >
                <ul>
                  <li className="dropdown-item">
                    <Link
                      to=""
                      className="d-flex flex-row align-items-center justify-content-center"
                    >
                      <span>
                        <CarbonFirewall />
                      </span>
                      <div>
                        <p>Sell Bitcoin</p>
                        <p className="faded">Active offers: 0</p>
                      </div>
                      <span>
                        <VectorRight />
                      </span>
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to=""
                      className="d-flex flex-row align-items-center justify-content-center"
                    >
                      <span>
                        <FontistoShopping />
                      </span>
                      <div>
                        <p>Sell Giftcards</p>
                        <p className="faded">Vendor</p>
                      </div>
                      <span>
                        <VectorRight />
                      </span>
                    </Link>
                  </li>
                </ul>
              </span>
            </span>
          </NavListItem>
          <NavListItem darkTheme={darkTheme} sellDropdown={sellDropdown}>
            <span className="with-dropdown sell">
              <div
                className="d-flex flex-row align-items-center"
                onClick={handleSellDropdown}
              >
                <Link to="">Sell</Link>
                <Dropdown />
              </div>
              <span
                className="dropdown-container"
                onMouseLeave={() => setSellDropdown(false)}
              >
                <ul>
                  <li className="dropdown-item">
                    <Link
                      to=""
                      className="d-flex flex-row align-items-center justify-content-center"
                    >
                      <span>
                        <CarbonFirewall />
                      </span>
                      <div>
                        <p>Sell Bitcoin</p>
                        <p className="faded">Active offers: 0</p>
                      </div>
                      <span>
                        <VectorRight />
                      </span>
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to=""
                      className="d-flex flex-row align-items-center justify-content-center"
                    >
                      <span>
                        <FontistoShopping />
                      </span>
                      <div>
                        <p>Sell Giftcards</p>
                        <p className="faded">Vendor</p>
                      </div>
                      <span>
                        <VectorRight />
                      </span>
                    </Link>
                  </li>
                </ul>
              </span>
            </span>
          </NavListItem>
          <NavListItem darkTheme={darkTheme} supportDropdown={supportDropdown}>
            <span
              className="with-dropdown support"
              onClick={handleSupportDropdown}
            >
              <div className="d-flex flex-row align-items-center">
                <Link to="">Support</Link> <Dropdown />
              </div>
              <span
                className="dropdown-container"
                onMouseLeave={() => setSupportDropdown(false)}
              >
                <ul>
                  <li className="dropdown-item">
                    <Link
                      to="#"
                      className="d-flex flex-row align-items-center justify-content-start"
                    >
                      <span>
                        <Phone />
                      </span>
                      Contact us
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to=""
                      className="d-flex flex-row align-items-center justify-content-start"
                    >
                      <span>
                        <Privacy />
                      </span>
                      Privacy
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to=""
                      className="d-flex flex-row align-items-center justify-content-start"
                    >
                      <span>
                        <Mail />
                      </span>
                      Invite Friends
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to=""
                      className="d-flex flex-row align-items-center justify-content-start"
                    >
                      <span>
                        <Logout />
                      </span>
                      Log Out
                    </Link>
                  </li>
                </ul>
              </span>
            </span>
          </NavListItem>
        </NavList>
      </Nav>

      <div className="d-flex flex-md-row justify-content-md-center align-items-center ml-auto buttons-container">
        <Link to={ROUTES.SIGNIN}>Sign in</Link>
        <Button className="d-flex justify-content-center align-items-center" href={ROUTES.SIGNUP}>
          Sign up
        </Button>
      </div>
    </Container>
  );
}
