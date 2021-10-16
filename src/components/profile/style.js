import styled from "styled-components/macro";
// Container, User, UserName, Amount, Status, ImgContainer, Button

export const Container = styled.section`
  padding: 10rem 10rem 0;
  min-height: 100vh;
  background: #46127b;
  border-radius: 0px 0px 3rem 3rem;
  @media (max-width: 768px) {
    padding: 10rem 10% 0;
  }
`;
export const User = styled.div`
  color: #fff;
  > div {
    margin-bottom: 4rem;
  }
  svg {
    margin-right: 2rem;
  }
`;
export const UserName = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 3rem;
`;
export const Amount = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 1.4rem;
`;
export const Status = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.2rem;
`;
export const ImgContainer = styled.div`
  > svg {
    width: 700px;
  }
`;
export const Button = styled.button`
  width: 10rem;
  height: 3rem;
  background: #feaf04;
  border-radius: 2rem;
  border: none;
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: #46127b;
  &:hover {
    background: #eca408;
  }
`;
