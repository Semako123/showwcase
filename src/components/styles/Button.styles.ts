import styled from "styled-components"

const StyledButton = styled.button`
    &:hover{
        cursor:pointer;
    };
    background-color: ${props => props.theme.color.primary};
    padding: 15px 30px;
    color:white;
    border:none;
    width:fit-content;
    border-radius:10px;
    font-size:16px;
`

export default StyledButton