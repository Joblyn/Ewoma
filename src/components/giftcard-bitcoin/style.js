import styled from "styled-components/macro";

export const Transaction = styled.div`
  ${({ darkTheme }) => darkTheme ? "border: 0.1rem solid #fff" : "border: 0.1rem solid #000000"};
  border-radius: 0.5rem;
  width: 100%;
  height: 30rem;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 4px;
    height: 0px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    width: 4px;
    background: #feaf04;
    border-radius: 10px;
  }
  > .header {
     padding: 2rem 3rem 1rem 2rem;
     font-size:1.2rem;
     font-weight: bold;
     ${'' /* display: flex;
     justify-content: space-between; */}
     @media (max-width: 768px) {
       font-size: 1.1rem;
      width: 500px;
     }
  }  
  table {
    width: 100%;
    padding: 1rem;
  }
  td {
    width: 20%;
    font-size: 1.2rem;
    padding: 1rem;
    text-align: center;
  }
  tr {
    img {
      margin-right: .5rem;
    }
  }
  .date {
    background: #F6F5F5;
    color: rgba(0,0,0,.6);
    padding: .5rem 1rem;
    font-size: 1.3rem;
    font-weight: bold;
    @media (max-width: 768px) {
    width: 500px;
    }
  }
`;
export const Name = styled.span`
  font-size: 1.1rem;
`;
export const Time = styled.span`
  font-size: .8rem;
  opacity: 0.5;
`;
export const Container = styled.section`
  padding: 10% 10% 8%;
`;
export const Link = styled.a`
  font-size: 1.3rem;
  font-weight: bold;
  padding: 0.4rem;
  margin: 0.5rem;
  cursor: pointer;
  &.active {
    border-bottom: 0.2rem solid #feaf04;
  }
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
export const Left = styled.div`
  ${({ darkTheme }) => darkTheme ? "border-right: 0.1rem solid #fff" : "border-right: 0.1rem solid #000000"};
@media(max-width: 768px) {
  border-right: none;
  ${({ darkTheme }) => darkTheme ? "border-bottom: 0.1rem solid #fff" : "border-bottom: 0.1rem solid #000000"};
}
`;
export const Right = styled.div``;
export const Interface = styled.div`
  display: flex;
  ${({ darkTheme }) => darkTheme ? "border: 0.1rem solid #fff" : "border: 0.1rem solid #000000"};
  border-radius: 0.5rem;
  width: 100%;
  min-height: 25rem;
  margin-bottom: 4rem;
  @media(max-width: 768px) {
    flex-direction: column;
  }

  ${Left}, ${Right} {
    width: 50%;
    padding: 1rem;
    @media(max-width: 768px) {
      width: 100%;
    }
  }
  ${Left} {
    padding-top: 5rem;
  }
`;
export const InputGroup = styled.div`
  ${({ darkTheme }) => darkTheme ? "border: 1px solid #fff" : "border: 1px solid #000000"};

  padding: 0.5rem;
  input {
    font-size: 1.2rem;
    font-weight: normal;
    padding: 0 0.5rem;
    border: none;
    background: #fff;
    box-shadow: none!important;
    width: 100%;
    ${({ darkTheme }) => darkTheme ? "background: #000!important; color: #fff!important" : "background: #fff; color: #000"};
    &::placeholder,
    ::-webkit-placeholder {
      font-size: 1.2rem;
      color: rgba(0, 0, 0, 0.5);
      ${({ darkTheme }) => darkTheme ? "color: #fff;" : "color: rgba(0, 0, 0, 0.5)"};
    }
    &:target,
    &:focus, {
      border: 0 !important;
      box-shadow: none;
      ${({ darkTheme }) => darkTheme ? "color: #fff;" : "color: rgba(0, 0, 0, 0.5)"};
    }
  }
  > span {
    font-size: .7rem;
    font-weight: bold;
    width: 1.8rem;
    display: flex;
    flex-direction:: row;
    justify-content: center;
    align-items: center;
    padding: 0.3rem;
    border-radius: 0.5rem;
    background: #e6d3f5;
    cursor: pointer;
    ${({ darkTheme }) => darkTheme ? "color: #000;" : "color: inherit"};
    > svg {
      margin-left: .18rem;
    }
  }
`;
export const Group = styled.div`
  margin: 0.5rem 0 1rem;
  > span:nth-of-type(1) {
    font-size: 1rem;
    font-weight: bold;
    opacity: 0.5;
  }
  > span:nth-of-type(2) {
    font-size: 1.3rem;
    font-weight: bold;
  }
`;
export const Title = styled.h4`
  font-size: 2rem;
  padding: 1rem;
  font-weight: bold;
  margin: 0;
`;
export const Text = styled.span`
  font-size: 1rem;
  opacity: 0.5;
`;
export const Amount = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
`;
export const Balance = styled.div``;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.5rem;
  height: 2.5rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: auto;
  background: ${({ type }) => (type === "first" ? "#FEAF04" : "#46127b")};
  color: ${({ type }) => (type === "first" ? "#46127b" : "#ffffff")};
  &:hover {
    background: ${({ type }) => (type === "first" ? " #eca408" : "#350d5f")};
  }
`;
