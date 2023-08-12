import { EduInfoType } from "@/@types";
import { Dispatch, SetStateAction } from "react";
import AutoCompleteContainer, { ListItems } from "./styles/AutoComplete.styles";

const AutoComplete = ({
	data,
	setInputValues,
	currentName,
}: {
	data: any;
	setInputValues: Dispatch<SetStateAction<EduInfoType>>;
	currentName: string;
}) => {
	const handleClick = (index: number) => {
		const uniInfo: any = data[index];
		setInputValues((prevState) => ({
			...prevState,
			name: uniInfo.name,
			country: uniInfo.country,
			website: uniInfo.web_pages,
		}));
	};
	if (data.length > 0 && currentName !== data[0].name) {
		return (
			<AutoCompleteContainer>
				{data.map((info: any, index: number) => (
					<ListItems
						key={index}
						onClick={() => {
							handleClick(index);
						}}>
						{info.name}
					</ListItems>
				))}
			</AutoCompleteContainer>
		);
	} else return <></>;
};

export default AutoComplete;
