import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
body {
  ${({ darkTheme }) => darkTheme && "color: #fff; background: #000"};
}
`;
