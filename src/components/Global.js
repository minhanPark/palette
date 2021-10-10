import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import stars from "../img/stars.svg";

const GlobalStyle = createGlobalStyle`
    ${reset};
    html {
        height: 100%;
    }
    body {
        height: 100%;
        background-color: #34ace0;
        background-image: url(${stars});
        font-family: 'Roboto Mono', monospace;
    }
`;

export default GlobalStyle;
