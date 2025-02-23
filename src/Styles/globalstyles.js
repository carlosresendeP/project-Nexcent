import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: "Inter", serif;
    }

    :root{
        --colorPrimary: #4CAF4F;
        --colorSecondary: #4D4D4D; 
        --colorInfo:#2194f3;
        --colorDarkSecondary: #18191F;
        --colorbackground: #F5F7FA;
        --colorbackgroundwhite: #ffff;
    } 

    button, a{
        cursor: pointer;
    }
`

export default GlobalStyles;  