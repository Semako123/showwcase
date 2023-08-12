"use client";
import { useState, useEffect, createContext, useContext } from "react";
import { EduInfoContextType, EduInfoType } from "@/@types";

export const EduContext = createContext<EduInfoContextType | null>(null);

export const EduContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [eduInfo, setEduInfo] = useState<EduInfoType[]>([
		{
			name: "Showwcase University",
			country: "United States",
			website: "https://showwcase.uni.edu",
			startDate: "2023-08-09",
			endDate: "2040-09-12",
			degree: "Masters",
			field: "Computer Science",
			Grade: 4.3,
			description:
				"Learning, collaborating and building a professional network built for developers",
		},
		{
			name: "InnovaTech University",
			country: "Australia",
			website: "https://innovatech.uni.edu.au",
			startDate: "2023-01-20",
			endDate: "2025-12-15",
			degree: "PhD",
			field: "Artificial Intelligence",
			Grade: 4.8,
			description:
				"Pioneering research in AI, machine learning, and neural networks for real-world applications.",
		},
		{
			"name": "CodeCraft Bootcamp",
			"country": "United Kingdom",
			"website": "https://codecraft-bootcamp.uk",
			"startDate": "2021-08-09",
			"endDate": "2021-12-15",
			"degree": "Certificate",
			"field": "Web Development",
			"Grade": 4.5,
			"description": "Intensive coding bootcamp to master full-stack web development skills in a short period."
		  },
	]);

	useEffect(() => {
		const initState: undefined | string = 
			typeof window !== "undefined" ? localStorage.getItem("name") || "" : "";
		updateName(initState);
	}, []);
	const [name, setName] = useState<string>("");
	const updateEduInfo = (newEduInfo: EduInfoType): void => {
		setEduInfo([newEduInfo, ...eduInfo]);
	};

	const deleteEduInfo = (index: number) => {
		setEduInfo(eduInfo.slice(0, index).concat(eduInfo.slice(index + 1)))
	}
	
	const updateName = (name: string) => {
		setName(name);
	};
	useEffect(() => {
		localStorage.setItem("name", name);
	}, [name]);
	return (
		<EduContext.Provider value={{ name, updateName, eduInfo, updateEduInfo, deleteEduInfo }}>
			{children}
		</EduContext.Provider>
	);
};

export const useEduContext = () => useContext(EduContext);
