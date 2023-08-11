import { EduInfoType } from "@/@types";
import { Dispatch, SetStateAction } from "react";

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
			<div>
				{data.map((info: any, index: number) => (
					<div key={index} onClick={() => { handleClick(index) }} >{info.name}</div>
				))}
			</div>
		);
	} else return <></>;
};

export default AutoComplete;
