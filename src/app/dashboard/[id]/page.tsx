"use client";
import { useEffect, useState } from "react";
import { EduInfoType } from "@/@types";
import { useEduContext } from "@/context/userContext";
import {
	InfoTitle,
	UniversityInfo,
	UniversityName,
	UniversityLink,
} from "@/components/styles/EduInfo.styles";
import { Container } from "@/components/styles/Container.styles";
import StyledButton from "@/components/styles/Button.styles";
import { useRouter } from "next/navigation";

interface EduDetailsPropType {
	params: {
		id: number;
	};
}
const EduDetails = ({ params }: EduDetailsPropType) => {
	const { eduInfo, deleteEduInfo } = useEduContext()!;
	const info: EduInfoType = eduInfo[params.id];
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const handleDelete = (index: number) => {
		deleteEduInfo(index);
	};
	const router = useRouter();

	//update startDate and endDate after components has been rendered
	useEffect(() => {
		setStartDate(new Date(info.startDate));
		setEndDate(new Date(info.endDate));
	}, []);

	if (info) {
		return (
			<div>
				<InfoTitle>Name of Institution</InfoTitle>
				<UniversityName>{info.name}</UniversityName>
				<InfoTitle>Website</InfoTitle>
				<UniversityLink href={info.website}>{info.website}</UniversityLink>
				<InfoTitle>Country</InfoTitle>
				<UniversityInfo>{info.country}</UniversityInfo>
				<InfoTitle>Field</InfoTitle>
				<UniversityInfo>{info.field}</UniversityInfo>
				<InfoTitle>Degree</InfoTitle>
				<UniversityInfo>{info.degree}</UniversityInfo>
				<InfoTitle>Grade</InfoTitle>
				<UniversityInfo>{info.Grade.toPrecision(3)}</UniversityInfo>
				<InfoTitle>Description</InfoTitle>
				<UniversityInfo>{info.description}</UniversityInfo>
				<InfoTitle>Date</InfoTitle>
				<Container>
					<UniversityInfo>
						{startDate.toLocaleString("default", { month: "short" })}{" "}
						{startDate.getFullYear()} -
					</UniversityInfo>
					<UniversityInfo>
						{endDate.toLocaleString("default", { month: "short" })}{" "}
						{endDate.getFullYear()}
					</UniversityInfo>
				</Container>
				<StyledButton
					onClick={() => {
						handleDelete(params.id);
					}}>
					Delete
				</StyledButton>
			</div>
		);
	} else {
		//Redirects to dashboard if info is empty
		router.push("/dashboard");
		return <></>;
	}
};

export default EduDetails;
