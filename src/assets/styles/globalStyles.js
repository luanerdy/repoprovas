import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    background: teal;
    font-family: 'Ubuntu Mono', monospace;
    user-select: none;
  }

  .title {
    font-family: 'Lobster', sans-serif;
  }
`;
 
export { GlobalStyle };
