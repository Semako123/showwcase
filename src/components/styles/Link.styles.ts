import styled from "styled-components"

export const StyledLink = styled.div<{$bold?:boolean}>`
    margin: 5px 0;

    a{
        text-decoration:none;
        font-size:${props => props.$bold ? "25px" : "20px"};
        font-weight:${props => props.$bold ? "600" : "auto"};
        color:${props => props.$bold ? "black" : props.theme.color.grey};
        transition: all 200ms ease;
    }

    a:active {
        color:${props => props.$bold ? "black" : props.theme.color.grey};
    }
`