"use client";
import { Container } from "@/components/styles/Container.styles";
import { StyledImage } from "@/components/styles/Image.styles";
import { loginImg } from "@/assets";
import LoginSection from "@/components/styles/LoginSection.style";

const Home = () => {
	return (
		<Container>
			<StyledImage src={loginImg} width={1/2} alt="login" unoptimized/>
			<LoginSection>
				
			</LoginSection>
		</Container>
	);
};

export default Home;
