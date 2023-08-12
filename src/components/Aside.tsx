"use client";
import { useEduContext } from "@/context/userContext";
import StyledAside from "./styles/Aside.style";
import AsideLink from "./AsideLink";

const Aside = () => {
	const { name, eduInfo } = useEduContext()!;
	return (
		<StyledAside>
			<h4>{name}</h4>
			{eduInfo.map((info, index) => (
				<AsideLink index={index} name={info.name} key={index} />
			))}
		</StyledAside>
	);
};

export default Aside;
