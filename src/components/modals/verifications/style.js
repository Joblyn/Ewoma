import styled, { createGlobalStyle } from "styled-components/macro";

export const Overlay = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: ${({ verificationModal }) =>
    verificationModal ? "block" : "none"};
  transition: 0.02s 0.5s linear;
`;

export const LockBody = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const Container = styled.div`
  background: ${({ darkTheme }) => (darkTheme ? "#000" : "#fff")};
  color: #46127b;
  position: relative;
  top: 15%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  width: 90%;
  height: fit-content;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 3rem 0.5rem;
  animation: dropDown 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  &.close {
    animation: dropDown2 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  }
  @keyframes dropDown {
    0% {
      transform: scale(0.8) translateY(1000px);
      opacity: 0;
    }
    100% {
      transform: scale(1) translateY(0px);
      opacity: 1;
    }
  }
  @keyframes dropDown2 {
    0% {
      transform: scale(1) translateY(0px);
      opacity: 1;
    }
    100% {
      transform: scale(0.8) translateY(1000px);
      opacity: 0;
    }
  }
  .left-icon {
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 2rem;
    color: ${({ darkTheme }) => (darkTheme ? "#fff" : "#46127b")};
    cursor: pointer;
  }
  .phone-num-cont {
    background: #ccafeb;
    border: 2px solid rgba(0, 0, 0, 0.5);
    padding: 0.6rem;
    border-radius: 0.3rem;
    width: 100%;
    max-width: 300px;
    display: flex;
    align-items: center;
    .phone-icon {
    }
  }
`;
export const Header = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.5rem;
  font-style: normal;
  margin-bottom: 1rem;
`;
export const SubHeader = styled.p`
  opacity: 50%;
  font-size: 1.3rem;
  margin-bottom: .8rem;
  font-style: normal;
  line-height: 1.5rem;
  font-weight: 500;
`;
export const NumberInput = styled.input`
  background: transparent;
  border: none !important;
  outline: none !important;
  font-size: 1.2rem;
  box-shadow: none !important;
  color: #46127b;
  padding-left: .5rem;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active,
  :-internal-autofill-selected {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;
export const Code = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 400px;
  margin: 2.5rem 0;
`;
export const Digit = styled.input`
  background: transparent;
  outline: none !important;
  box-shadow: none !important;
  border: 2px solid #46127b;
  border-radius: .3rem;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  color: ${({ darkTheme }) => (darkTheme ? "#fff" : "#000")};

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active,
  :-internal-autofill-selected {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;
export const Buttons = styled.div`
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
`;
export const Button = styled.button`
  background: #feaf04;
  border-radius: 3px;
  width: 10rem;
  padding: 0.5rem;
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: -0.41px;
  color: #46127b;
  margin: 0 1rem;
  border: #feaf04;
  @media (max-width: 768px) {
    width: 8rem;
    padding: .3rem;
    font-size: 1.1rem;
  }
`;

// @keyframes blowUpModal {
//   0% {
//     transform:scale(0);
//   }
//   100% {
//     transform:scale(1);
//   }
// }

// @keyframes blowUpModalTwo {
//   0% {
//     transform:scale(1);
//     opacity:1;
//   }
//   100% {
//     transform:scale(0);
//     opacity:0;
//   }
// }

// @keyframes blowUpContent {
//   0% {
//     transform:scale(1);
//     opacity:1;
//   }
//   99.9% {
//     transform:scale(2);
//     opacity:0;
//   }
//   100% {
//     transform:scale(0);
//   }
// }

// @keyframes blowUpContentTwo {
//   0% {
//     transform:scale(2);
//     opacity:0;
//   }
//   100% {
//     transform:scale(1);
//     opacity:1;
//   }
// }
