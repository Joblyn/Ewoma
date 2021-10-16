import styled from "styled-components/macro";

export const Container = styled.section`
  padding: 10% 10% 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;
export const Header = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 2.8rem;
  line-height: 4rem;
  text-align: center;
  margin-bottom: 2rem;
`;
export const BenefitsContainer = styled.div`
  margin-bottom: 2rem;
  width: 100%;

  @media (min-width: 769px) {
    .inner {
      margin-top: -7rem;
    }
  }
`;
export const BenefitItem = styled.div`
  width: 100%;
  max-width: 23rem;
  svg {
    margin: 1.2rem;
  }
  > h5 {
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 1.4rem;
  }
  > p {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #feaf04;
  border-radius: 1rem;
  width: 7rem;
  height: 3.2rem;
  font-size: 1.2rem;
  line-height: 2rem;
  color: #46127b;
  border: none;
  &:hover {
    background: #eca408;
  }
`;
