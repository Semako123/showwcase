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
			<h2>Hi there! Welcome to your Education Showcase</h2>
			<h5>Type your name and click &quot;Enter&quot; below to ger started</h5>
			<StyledInput type="text" value={name} onChange={handleChange} />
			<StyledButton onClick={handleSubmit}>Enter</StyledButton>
		</LoginContainer>
	);
};

export default Login;
