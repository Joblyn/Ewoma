import styled from "styled-components/macro";

export const Container = styled.section`
  padding: 10% 10% 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
    padding-top: 5rem;
  }

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

  @media (max-width: 768px) {
    font-size: 2.2rem;
    line-height: 2.6rem;
  }
`;
export const BenefitsContainer = styled.div`
  margin-bottom: 5rem;
  width: 100%;

  @media (min-width: 769px) {
    .inner {
      margin-top: -2rem;
    }
  }
`;
export const BenefitItem = styled.div`
  width: 100%;
  max-width: 23rem;
  padding: 0 0.75rem;
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
  width: 8rem;
  padding: 0.122rem;
  height: 3.2rem;
  font-size: 1.2rem;
  line-height: 2rem;
  color: #46127b;
  border: none;
  &:hover {
    background: #eca408;
  }
`;
