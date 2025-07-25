import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #0f0f0f;
    color: white;
    font-family: 'Arial', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
