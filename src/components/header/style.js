import styled, { createGlobalStyle } from "styled-components/macro";
import { Button as ReactBootstrapButton } from "react-bootstrap";
import { NavLink as ReactNavLink } from "react-router-dom";

export const MenuIcon = styled.div`
  width: fit-content;
  color: #46127b;
  ${({ showNav }) => (showNav ? "transform: rotate(180deg)" : null)};

  @media (min-width: 768px) {
    display: none;
  }
`;
export const LockBody = createGlobalStyle`
  body {
    overflow: hidden;
  } 
`;
export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.45);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 4.2rem;
  left: 0;
  z-index: -1;
`;
export const Button = styled(ReactBootstrapButton)``;
export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem 8rem;
  background: ${({ changeBg }) => (changeBg ? "#46127b" : "#fff")};
  color: ${({ changeBg }) => (changeBg ? "#ffffff" : "#000000")};
  border-radius: 0px 0px 1rem 0.85rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  overflowx: hidden;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }

  > .buttons-container a {
    font-family: Roboto;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.5rem;
    margin-right: 1rem;
    width: 4rem;
    &:hover {
      color: #feaf04;
    }
  }
  > .buttons-container {
    margin-left: auto;

    ${Button} {
      width: 8rem;
      height: 2.2rem;
      background: #feaf04;
      border-radius: 0.4rem;
      letter-spacing: -0.41px;
      color: #46127b;
      font-weight: 600;
      border: none;
      font-size: 1.2rem;

      &:hover {
        background: #eca408;
      }
    }
  }

  > ${MenuIcon} {
    @media (min-width: 769px) {
      ${({ showOnlyOnSmallViewPort }) =>
        showOnlyOnSmallViewPort ? "display: none" : ""};
    }
  }
`;
export const NavLink = styled(ReactNavLink)`
  &.active {
    border-bottom: 0.15rem solid #feaf04;
  }
`;
export const Nav = styled.nav`
  padding: 0 20%;
  background: #fff;
  @media (max-width: 1080px) {
    padding: 0;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    ${({ showNav }) => (showNav ? "left: 0" : "left: -350px")};
    width: 100%;
    max-width: 350px;
    height: calc(100vh - 2rem);
  }
`;
export const NavListItem = styled.li`
  margin: 0.7rem 1rem;
  > .with-dropdown {
    position: relative;
    > div {
      a {
        margin-right: 0.5rem;
      }
      @media (max-width: 769px) {
        a {
          margin-right: auto;
        }
        > svg {
          transform: rotate(270deg);
        }
      }
    }
    > .dropdown-container {
      display: none;
      position: absolute;
      z-index: 100;
      box-shadow: 0 2px 5px 0 rgba(0,0,0, 0.26),
        0 2px 10px 0 rgba(0,0,0, 0.16);
    }
    &:hover {
      > .dropdown-container {
        display: block;
      }
    }
  }
  > .with-dropdown.sell .dropdown-container {
    top: 3.25rem;
    width: fit-content;
    height: fit-content;
    background: #fff;
    border-radius: 0 0 0.8rem 0.8rem;
    padding: 1rem 0;

    @media (max-width: 768px) {
      top: 0;
      left: 10rem;
    }

    > ul {
      padding-left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > .dropdown-item {
        padding: 0.85rem;
        a span svg {
          width: 50;
        }
        > a div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0 0.95rem;
          p {
            font-style: normal;
            font-weight: 600;
            font-size: 1rem;
            line-height: 1.3rem;
            margin: 0;
          }
          p.faded {
            font-style: normal;
            font-weight: normal;
            font-size: 0.8rem;
            line-height: 1.1rem;
            color: rgba(0, 0, 0, 0.5);
          }
        }
      }
    }
  }

  > .with-dropdown.support .dropdown-container {
    top: 3.25rem;
    width: 220px;
    height: fit-content;
    background: #fff;
    border-right: #c4c4c4 0.8rem solid;
    padding: 2.5rem 1.2rem 2.5rem 1.2rem;

    @media (max-width: 768px) {
      top: 0;
      left: 10rem;
    }

    .dropdown-item {
      margin: 0.5rem 0;
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 2.3rem;
      padding: 0.25rem;
      font-weight: 400;
      > a span {
        width: 2.7rem;
      }
    }
  }
`;
export const NavList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0;

  > ${NavListItem} {
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.5rem;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    > ${NavListItem} {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }
`;
