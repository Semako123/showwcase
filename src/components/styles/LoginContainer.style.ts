import styled from "styled-components"

const LoginContainer = styled.div`
    display:flex;
    flex-direction:column;  
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:0 50px;

    
    h2{
        font-weight:500;
        font-size:30px;
        line-height:45px;
    }

    h2 span{
        color :${props => props.theme.color.primary};
        font-weight:600;
        font-size:40px;
    }

    h4{
        font-weight:600;
        font-size:50px;
        margin:0;
    }

    p{
        font-weight:300;
        font-size:15px;
    }

    input{
        margin-bottom:20px;
        width:500px;
        font-size:17px;
    }
    
`

export default LoginContainer