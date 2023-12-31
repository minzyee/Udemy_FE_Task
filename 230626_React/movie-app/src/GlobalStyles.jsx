import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,
  li {
    list-style: none;
  }

  body {
    height: 100vh;
  }

  img {
    vertical-align: top;
  }

  a {
    text-decoration: none;
  }

  input {
    border: none;
    background: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }


`;
export default GlobalStyles;
