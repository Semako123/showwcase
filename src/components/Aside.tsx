import { useEduContext } from "@/context/userContext";
import Link from "next/link";
import StyledAside from "./styles/Aside.style";

const Aside = () => {
	const { name, eduInfo } = useEduContext()!;
	return (
		<StyledAside>
			<h4>{name}</h4>
			{eduInfo.map((info, index) => (
				<div key={index}>
					<Link href={`/dashboard/${index}`}>{info.name}</Link>
				</div>
			))}
		</StyledAside>
	);
};

export default Aside;
