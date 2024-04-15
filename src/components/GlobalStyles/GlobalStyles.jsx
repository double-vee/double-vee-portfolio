'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
    background-color: hsl(0, 0%, 4%);
    color: hsl(352, 26%, 94%);
    font-family: sans-serif;
    line-height: 1.5;
    text-size-adjust: none;
  }

  h1,
  h2,
  h3,
  button,
  input,
  label {
    line-height: 1.2;
  }

  h1,
  h2,
  h3 {
    text-wrap: balance;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
    background-color: transparent;
    color: inherit;
    font: inherit;
    cursor: pointer;
  }

  ul[role='list'] {
    list-style: none;
  }
`;

export default GlobalStyles;
