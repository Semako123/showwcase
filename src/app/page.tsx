"use client";
import { Container } from "@/components/styles/Container.styles";
import { StyledImage } from "@/components/styles/Image.styles";
import { loginImg } from "@/assets";
import Login from "@/components/Login";

const Home = () => {
	return (
		<Container $full>
			<StyledImage src={loginImg} width={1 / 2} alt="login" unoptimized />
			<Login />
		</Container>
	);
};

export default Home;
