import styled from "styled-components";

export const Container = styled.section`
  padding: 10% 10% 8%;
`;
export const Header = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 2.8rem;
  line-height: 4rem;
  text-align: center;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    line-height: 2.6rem;
  }
`;
export const TextContainer = styled.div`
  padding: 0 1rem;
`;
export const Text = styled.div`
  margin-bottom: 3rem;
  > h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.5rem;
    text-align: center;
  }
  > p {
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 1.8rem;
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;
export const ImgContainer = styled.div`
  @media (max-width: 768px) {
    margin-top: -3rem;
    img {
      transform: scale(0.7);
    }
  }
`;
