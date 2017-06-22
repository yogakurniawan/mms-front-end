import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    width: 100%;
    background-color: rgb(237, 236, 236);
  }

  body {
    font-family: 'Roboto', sans-serif
  }

  a { color: inherit; }
`;
