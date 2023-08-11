import { useState, createContext, useContext } from "react";
import { EduInfoContextType, EduInfoType } from "@/@types";

export const EduContext = createContext<EduInfoContextType | null>(null);

export const EduContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [eduInfo, setEduInfo] = useState<EduInfoType[]>([]);
	const [name, setName] = useState<string>("");
	const updateEduInfo = (newEduInfo: EduInfoType): void => {
		setEduInfo([...eduInfo, newEduInfo]);
	};
	const updateName = (name: string) => {
		setName(name);
	};
	return (
		<EduContext.Provider value={{ name, updateName, eduInfo, updateEduInfo }}>
			{children}
		</EduContext.Provider>
	);
};

export const useEduContext = () => useContext(EduContext);
