import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  h1 {
    color: red;
  }

  a {
    all: unset;
    cursor: pointer;
    pointer-events: all;
  }
`;
