import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #0E1F46;
    display: grid;
    place-items: center;
    height: 100vh;
  }
`;

export default GlobalStyle;
