import { createGlobalStyle } from "styled-components";

import useAppContext from "@hooks/useAppContext";

export default function useGlobalStyles() {
  const {
    state: { menuOpened },
  } = useAppContext();

  const GlobalStyles = createGlobalStyle`
    body {
        background-color : #FAFAFA;
        background-color : ${(props) => props.theme.background};
        font-family: Raleway;
        font-weight : 200;
        color : ${(props) => props.theme.main};
        overflow-x: hidden !important;
        overflow : ${menuOpened ? "hidden" : "auto"};
        }
        h1, h2, h3, h4, h5, h6{
            font-family: Montserrat;    
            font-weight : 800;
        }
        button {
            padding : 10px;
            color : ${(props) => props.theme.background};
            background-color : ${(props) => props.theme.main};
            border : solid 1px ${(props) => props.theme.main};
            border-radius : 4px;
            cursor : pointer;
        }
 `;

  return GlobalStyles;
}
