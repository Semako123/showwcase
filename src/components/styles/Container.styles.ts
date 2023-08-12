import styled from "styled-components";
import { layout, space } from "styled-system";

export const Container = styled.div<{$full?:boolean}>`
	${layout}
	${space}
	display:flex;
	height:${props => props.$full ? "100%" : "auto"}
`;

export const GetStarted = styled.div`
	h3{
		font-weight:bold;
		font-size:35px;
	}

	h3 span{
		color:${props => props.theme.color.secondary};
	}

	p{
		color:${props => props.theme.color.darkGrey}
	}
`