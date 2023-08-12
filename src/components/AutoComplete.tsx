import { EduInfoType } from "@/@types";
import { Dispatch, SetStateAction } from "react";
import AutoCompleteContainer from "./styles/AutoComplete.styles";

const AutoComplete = ({
	data,
	setInputValues,
}: {
	data: any;
	setInputValues: Dispatch<SetStateAction<EduInfoType>>;
}) => {
	const handleClick = (index: number) => {
		const uniInfo:any = data[index]
		setInputValues((prevState) => ({...prevState, name: uniInfo.name, country: uniInfo.country, website:uniInfo.web_pages}))
	}
	if (data.length > 0) {
		return (
			<AutoCompleteContainer>
				{data.map((info: any, index: number) => (
					<div key={index} onClick={() => { handleClick(index) }} >{info.name}</div>
				))}
			</AutoCompleteContainer>
		);
	} else return <></>;
};

export default AutoComplete;
