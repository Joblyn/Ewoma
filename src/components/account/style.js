import styled from "styled-components/macro";
// Container, Level, Button, Details, Text

export const Container = styled.section`
  padding: 10% 10% 8%;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .level-cont {
    width: 100%;
    margin-right: 5%;
    @media (max-width: 768px) {
    margin-bottom: 2rem;
      margin-right:0;
      width: 15rem;
  }
  }
`;
export const Level = styled.div`
  width: 100%;
  height: 8rem;
  ${({ darkTheme }) => darkTheme ? "border: 0.1rem solid #fff" : "border: 0.1rem solid #000000"};
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ccafeb;
  border-radius: 1rem;
  width: 9rem;
  height: 1.4rem;
  font-size: 0.92rem;
  line-height: 1rem;
  border: none;
  margin: 0 auto;
  cursor: pointer;
  &:hover {
    background: #ccafeb;
  }
`;
export const Details = styled.div`
  width: 75%;
  padding: 2rem;
  height: 10rem;
  ${({ darkTheme }) => darkTheme ? "border: 0.1rem solid #fff" : "border: 0.1rem solid #000000"};
  
  @media (max-width: 768px) {
    width: 100%;
  }
  > div {
    width: 100%;
    ${'' /* max-width: ; */}
    background: #ccafeb;
    border-radius: 1rem;
    border: .2rem solid #ccafeb;
    @media (min-width: 768px) {
      max-width: 1000px;
    }
  }
`;
export const Text = styled.p`
  margin: 0;
 ${({ type }) => {
    switch (type) {
      case "lg":
        return "font-size: 1.8rem; font-weight: bold";
      case "md":
        return "font-size: 1.2rem";
      case "sm-md":
        return "font-size: 1rem";
      case "sm":
        return "font-size: .8rem; opacity: 50%;";
      default:
        return "font-size: 1.2rem";
    }
  }};

`;
