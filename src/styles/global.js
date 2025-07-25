import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #0f0f0f;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
