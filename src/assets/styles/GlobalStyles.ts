import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    scroll-behavior: smooth;
    font-size: 10px !important;
    height: 100%;
  }

  body {
    background-color: ${"#E8E8E8"};
    height: 100vh;
  }

`;

export default GlobalStyle;
