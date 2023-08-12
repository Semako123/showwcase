import styled from "styled-components";
import { layout, space } from "styled-system";
import Modal from "react-modal";

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

export const StyledModal = styled(Modal)`
	position:absolute;
	backdrop-filter: blur(10px);
	background-color: rgba(233, 241, 255, 0.2);
	overflow:auto;
	height:500px;
	width:900px;
	padding:50px;
	top:50%;
	left:50%;
	transform: translate(-50%, -50%);
	border-radius:20px;

	h4{
		font-size:30px;
		font-weight:bold;
		margin-top:0px;
	}

	h4 span{
		color:${props => props.theme.color.primary}
	}
`

export const InputField = styled.div`
	p{
		text-transform:uppercase;
		color:${props => props.theme.color.darkGrey}
	}

	input, textarea{
		width:100%;
	}
`