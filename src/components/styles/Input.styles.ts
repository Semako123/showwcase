import styled from "styled-components"

export const StyledInput = styled.input`
    &:focus{
        outline: none;
    }
    padding:12px 20px;
    border: 1px ${props => props.theme.color.secondary} solid;
    border-radius:10px;
`

