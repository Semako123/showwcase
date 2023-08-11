"use client";
import { StyledInput } from "@/components/styles/Input.styles";
import StyledButton from "@/components/styles/Button.styles";
import LoginContainer from "@/components/styles/LoginContainer.style";
import { useEduContext } from "@/context/userContext";
import { useRouter } from "next/navigation";

const Login = () => {
	const router = useRouter();
	const { name, updateName } = useEduContext()!;
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		updateName(e.target.value);
	};
    const handleSubmit = () => {
		router.push("/dashboard");
	};

	return (
		<LoginContainer>
			<h2>Hi there! Welcome to your <span>Education Showcase</span></h2>
			<h4>Get Started</h4>
			<p>Type your name and click &quot;Get Started&quot; below</p>
			<StyledInput type="text" value={name} onChange={handleChange} placeholder="Username"/>
			<StyledButton onClick={handleSubmit}>Get Started</StyledButton>
		</LoginContainer>
	);
};

export default Login;
