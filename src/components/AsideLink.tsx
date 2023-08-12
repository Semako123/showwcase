import Link from "next/link";
import { StyledLink } from "./styles/Link.styles";
import { usePathname } from "next/navigation";

interface Props{
    index: number,
    name:string
}

const AsideLink = ({ index, name }: Props) => {
	const pathname = usePathname()
	const id = parseInt(pathname.split("/")[2])
	return (
		<StyledLink $bold={id === index}>
			<Link href={`/dashboard/${index}`}>{name}</Link>
		</StyledLink>
	);
};

export default AsideLink;
