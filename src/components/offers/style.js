import styled from "styled-components/macro";

export const Container = styled.section`
  padding: 10% 10% 8%;
`;
export const Link = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 1.8rem;
  margin: 2rem 2rem;
  cursor: pointer;
  height: 1rem;
   > span:nth-of-type(1) {
      padding: .5rem;
      margin-right: .5rem;
   } 
  > .active {
    border-bottom: 0.2rem solid #feaf04;
  }
  > .badg {
    font-size: 1rem;
    background: #feaf04;
    padding: 0.4rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    color: #000;
  }
`;
export const OfferFunds = styled.div`
  border: 0.2rem solid #000000;
  height: 15rem;
  > span.btn {
    font-size: 1rem;
    padding: 0.2rem;
    border: 1px solid #46127b;
  }
`;
export const Text = styled.span`
  font-size: 0.8rem;
  line-height: 1rem;
  margin-bottom: .5rem;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #feaf04;
  border-radius: 1rem;
  width: 8rem;
  height: 3.2rem;
  font-size: 1.2rem;
  line-height: 2rem;
  color: #46127b;
  border: none;
  margin: 0 auto;
  cursor: pointer;
  &:hover {
    background: #eca408;
  }
`;
