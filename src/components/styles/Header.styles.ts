import styled from "styled-components"

const StyledHeader = styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;

    h5{
        font-size:25px;
        font-weight:300;
    }

    h5 span{
        display:inline-block;
        font-weight:400;
        color:${props => props.theme.color.primary};
        background-color:${props => props.theme.color.inactive};
        border-radius:10px;
        padding: 3px 5px;

    }
`

export default StyledHeader