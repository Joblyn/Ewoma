import styled from "styled-components/macro";
import { Button as BootstrapButton } from "react-bootstrap";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

export const Aside = styled.aside`
  width: 40%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #46127b;
  border-radius: 0px 8px 8px 0px;
`;
export const Text = styled.div`
  text-align: left;
  color: #ffffff;
  font-family: Quattrocento;
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
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ darkTheme }) => (darkTheme ? "#ffffff" : "#000000")};
  padding: 5% 5% 0;

  nav {
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2.2rem;
    letter-spacing: -0.41px;
    gap: 2rem;
    margin-bottom: 1rem;
    .active {
      border-bottom: 0.2rem solid #ccafeb;
    }
  }

  p {
    font-family: Quattrocento;
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: -0.41px;
  }

  .or-cont {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: Quattrocento;
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
      width: calc(35% - 3rem);
      height:.2rem;
      background: linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),rgba(0,0,0,0.2);
      border-radius: 8px;
    }
  }

  .fp-text {
    font-size: 1.2rem;
  }
`;
export const Form = styled.form`
  width: 100%;
`;
export const FormGroup = styled.div`
  margin-bottom: 1.2rem;
`;
export const Label = styled.label`
  font-family: Quattrocento;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 1.7rem;
  letter-spacing: -0.41px;
`;
export const FormInput = styled.input`
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 2rem;
  width: 100%;
  border: ${({ darkTheme }) =>
    darkTheme ? ".1rem solid #ffffff" : ".1rem solid #000000"}!important;
  border-radius: 8px;
  box-shadow: none!important;
  outline: none!important;
  padding: .5rem;

  &[type="password"]::placeholder {
    opacity: 1;
  }
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active, :-internal-autofill-selected {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
  
  
`;
export const Button = styled(BootstrapButton)`
  color: #ffffff!important;
  font-family: Quattrocento;
  font-style: normal;
  letter-spacing: -0.41px;
  color: #ffffff;
  border-radius: 8px;
  border: none;
  ${({ variant }) =>
    variant === "large"
      ? "width: 80%; font-size: 1.3rem; font-weight: bold;background: #CCAFEB; padding: .5rem"
      : "width: 5rem; font-weight: normal; font-size: 1.2rem; background: #46127B; padding: .25rem"};
  :focus {
    box-shadow: none;
  }
  :focus-visible {
    outline: none;
  }
`;
