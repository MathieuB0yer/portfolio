import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    

    margin: 0;
    padding: 0;

    
}


body{
    font-family: 'Source Serif Pro', serif;

    overflow-x: hidden;
   
}



h1{
    font-family: 'Lato', sans-serif;
 
}

.isabsolute > *{
    position: absolute;
}

`;
