import styled from "styled-components"

const StyledAside = styled.div`
    height: 100%;
    width:300px;
    display:flex;
    flex-direction:column;
    padding:40px;
    background-color:${props => props.theme.color.inactive};
    border-radius: 0 30px 30px 0;
`
export default StyledAside