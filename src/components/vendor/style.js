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

  @media (max-width: 768px) {
    font-size: 2.2rem;
    line-height: 2.6rem;
  }
`;
export const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 2.5rem;
  width: 100%;
  max-width: 50rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;
export const ImgContainer = styled.div`
  > img {
    margin-left: -30%;
    @media (max-width: 768px) {
      margin-top: 3rem;
      margin-left: -45%;
      width: 100%;
      transform: scale(1.2);
    }
  }
  margin-bottom: 5rem;
  
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
