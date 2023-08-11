import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500;600&family=Work+Sans:wght@400;600&display=swap');
    html{
        height:100%;
    }
    body{
        margin:0;
        height:100%;
    }
    *{
        font-family: 'Poppins', sans-serif;
    }
`

export default GlobalStyle