import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
    background-color : #FAFAFA;
    background-color : ${(props) => props.theme.background};
    font-family: Raleway;
    font-weight : 200;
    color : ${(props) => props.theme.main};
    overflow-x: hidden !important;
    overflow : ${(props) => (props.menuOpened ? "hidden" : "auto")};
    }
    h1, h2, h3, h4, h5, h6{
        font-family: Montserrat;    
        font-weight : 800;
        letter-spacing: 4px
    }
    button {
        padding : 10px;
        color : ${(props) => props.theme.background};
        background-color : ${(props) => props.theme.main};
        border : solid 1px ${(props) => props.theme.main};
        border-radius : 4px;
        cursor : pointer;
    }
    input, textarea, select{
        color : ${(props) => props.theme.main};
        background-color : inherit;
        border : solid 1px ${(props) => props.theme.main};
        border-radius : 7px;
        padding : 12px;
    }
    & select{
        padding : 3px
    }
 `;

export default GlobalStyles;
