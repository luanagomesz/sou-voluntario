import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    outline: 0;
}
:root{
    --red: #FF4D4D;
    --orange: #FC7D2F;
    --ligthorange:#FE9E63;
    --cyan: #24585F;
    --darkblue:#081140;
    --ligthblue: #F4F8FB;
    --grey-100:#333333;
    --grey-50:#999999;
    --grey-0:rgba(222, 222, 222, 0.3);;
}
body{
    background: white;
    color: var(---darkblue);
    font-family: 'Fira Sans', sans-serif;
}
h1,h2, h3, h4, span, button, div, input, p{
    font-family: 'Fira Sans', sans-serif;
} 
h1,h2, h3, h4{
    font-weight:bold;
}
button{
    cursor: pointer;
    border: none;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
}
a{
    text-decoration: none;
}
`;

export default GlobalStyle;
