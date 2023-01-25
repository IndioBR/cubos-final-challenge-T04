import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    width: 100%;
  }

  html {
    font-size: 62.5%;
  }

  h1 {}

  a {
    all: unset;
    cursor: pointer;
    pointer-events: all;
  }
`;
