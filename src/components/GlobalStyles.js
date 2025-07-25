'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background-color: #111; /* dark theme */
    color: #fff;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
    min-height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    font-family: inherit;
  }
`;

export default function GlobalStylesWrapper({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
