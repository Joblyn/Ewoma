import styled from "styled-components/macro";
import { Button as BootstrapButton } from "react-bootstrap";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  > .right {
    width: 57%;
    position: relative;
    padding-top: 3vh;
    .home-icon {
      position: absolute;
      left: 1rem;
      cursor: pointer;
      fill: ${({ darkTheme }) => (darkTheme ? "#CCAFEB" : "#46127b")};
    }
    @media (max-width: 768px) {
      width: 100%;
      > .line {
        display: none;
      }
    }
    > .line {
      position: absolute;
      height: 7rem;
      width: 0.2rem;
      background-color: #46127b;
      &:nth-of-type(3) {
        top: 0;
        right: 7rem;
      }
      &:nth-of-type(2) {
        bottom: 0.8rem;
        left: 14rem;
      }
    }
  }
`;

export const Aside = styled.aside`
  width: 43%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #46127b;
  border-radius: 0px 8px 8px 0px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Text = styled.div`
  text-align: left;
  color: #ffffff;
  font-family: "Quattrocento", serif;
  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 2.8rem;
    line-height: 3rem;
    letter-spacing: -0.41px;
  }
  p {
    font-style: normal;
    font-weight: bold;
    font-size: 2.2rem;
    line-height: 2.5rem;
    letter-spacing: -0.41px;
  }
`;
export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ darkTheme }) => (darkTheme ? "#ffffff" : "#000000")};
  padding: 12% 5% 0;
  @media (max-width: 768px) {
    margin: 0 auto;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  nav {
    font-style: normal;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.8rem;
    letter-spacing: -0.41px;
    gap: 2rem;
    margin-bottom: 1rem;
    .active {
      border-bottom: 0.2rem solid #ccafeb;
    }
  }

  p {
    font-family: "Quattrocento", serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 1.2rem;
    letter-spacing: -0.41px;
    margin-bottom: 0.7rem;
  }

  .or-cont {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: "Quattrocento", serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 1.8rem;
    letter-spacing: -0.41px;
    color: rgba(0, 0, 0, 0.7);
    width: 100%;
    div:nth-of-type(2) {
      width: 3rem;
      text-align: center;
    }
    div:nth-of-type(1),
    div:nth-of-type(3) {
      width: calc(40% - 3rem);
      height: 0.2rem;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        rgba(0, 0, 0, 0.2);
      border-radius: 8px;
    }
  }

  .fp-text {
    font-size: 1rem;
    font-family: "Quattrocento", serif;
    a {
      :hover {
        text-decoration: underline;
      }
    }
  }
`;
export const Form = styled.form`
  width: 100%;
`;
export const FormGroup = styled.div`
  margin-bottom: 1.2rem;
  position: relative;

  .eye {
    position: absolute;
    right: 1rem;
    margin-top: 0.38rem;
    svg {
      width: 20px;
      opacity: 0.85;
      cursor: pointer;
      :hover {
        opacity: 1;
      }
    }
  }
`;
export const Label = styled.label`
  font-family: "Quattrocento", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 1.7rem;
  letter-spacing: -0.41px;
`;
export const FormInput = styled.input`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.2rem;
  width: 100%;
  border: ${({ darkTheme }) =>
    darkTheme ? ".05rem solid #ffffff" : ".05rem solid #000000"}!important;
  border-radius: 8px;
  box-shadow: none !important;
  outline: none !important;
  padding: 0.5rem;

  &[type="password"]::placeholder {
    opacity: 1;
  }
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active,
  :-internal-autofill-selected {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;
export const Button = styled(BootstrapButton)`
  color: #ffffff !important;
  font-family: "Quattrocento", serif;
  font-style: normal;
  letter-spacing: -0.41px;
  color: #ffffff;
  border-radius: 8px;
  border: none;
  ${({ variant }) =>
    variant === "large"
      ? "width: 80%; font-size: 1.2rem; font-weight: 500; background: #CCAFEB; padding: .25rem; margin-bottom: 1rem"
      : "width: 5rem; font-weight: normal; font-size: 1.2rem; background: #46127B; padding: .25rem"};
  :focus {
    box-shadow: none;
  }
  :focus-visible {
    outline: none;
  }
  :hover {
    background: ${({ variant }) =>
      variant === "large" ? "#a793bd" : "#46127B"};
  }
  :active {
    background: #46127b;
  }
  svg {
    width: 25px;
    height: 25px;
    margin-right: .15rem;
  }
`;
