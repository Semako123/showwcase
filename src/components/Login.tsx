"use client"
import { StyledInput } from "@/components/styles/Input.styles";
import StyledButton from "@/components/styles/Button.styles";
import LoginContainer from "@/components/styles/LoginContainer.style";
import { useState } from "react";

const Login = () => {
    const [name, setName] = useState<string>("")
    const updateName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
	return (
		<LoginContainer>
			<h2>Hi there! Welcome to your Education Showcase</h2>
			<h5>Type your name and click &quot;Enter&quot; below to ger started</h5>
			<StyledInput type="text" value={name} onChange={updateName}/>
			<StyledButton>Enter</StyledButton>
		</LoginContainer>
	);
};

export default Login;
