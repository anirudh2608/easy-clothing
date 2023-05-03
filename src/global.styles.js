import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 20px 40px;
    font-family: 'open sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media screen and (max-width:550px) {
        padding: 10px 0px;
        }
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  * {
    box-sizing: border-box;
  }

 
`