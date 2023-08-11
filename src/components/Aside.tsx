import { useEduContext } from "@/context/userContext";
import Link from "next/link";

const Aside = () => {
	const { eduInfo } = useEduContext()!;
	return (
		<div>
			{eduInfo.map((info, index) => (
				<div key={index}>
					<Link href={`/dashboard/${index}`}>{info.name}</Link>
				</div>
			))}
		</div>
	);
};

export default Aside;
