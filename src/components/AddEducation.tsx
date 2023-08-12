import Modal from "react-modal";
import StyledButton from "./styles/Button.styles";
import { Dispatch, SetStateAction } from "react";
import { StyledInput } from "./styles/Input.styles";
import { useQuery } from "react-query";
import { useState } from "react";
import { EduInfoType } from "@/@types";
import { useEduContext } from "@/context/userContext";
import AutoComplete from "./AutoComplete";
import { StyledModal } from "./styles/Container.styles";

interface Props {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AddEducation = ({ isOpen, setIsOpen }: Props) => {
	const defaultInput: EduInfoType = {
		name: "",
		country: "",
		website: "",
		startDate: "",
		endDate: "",
		degree: "",
		field: "",
		Grade: 5.0,
		description: "",
	};
	const { updateEduInfo } = useEduContext()!;
	const [inputValues, setInputValues] = useState<EduInfoType>(defaultInput);

	//Fetches data with name and as query key
	const { isLoading, error, data } = useQuery({
		queryKey: ["value", inputValues.name],
		queryFn: () =>
			inputValues.name
				? fetch(
						`http://universities.hipolabs.com/search?name=${inputValues.name}`
				  ).then((res) => res.json())
				: Promise.resolve([]),
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		 // Special handling for the Grade input
		 const parsedValue = e.target.name === "Grade" ? parseFloat(e.target.value) : e.target.value;
		 //Update values based on name
		setInputValues({ ...inputValues, [e.target.name]: parsedValue });
	};

	const handleSave = () => {
		updateEduInfo(inputValues);
		setInputValues(defaultInput);
		setIsOpen(false);
	};

	const handleCancel = () => {
		setInputValues(defaultInput);
		setIsOpen(false);
	};

	return (
		<StyledModal isOpen={isOpen}>
			<h4>Add new Education to <span>Showcase</span></h4>
			<div>
				Name of Institution:
				<StyledInput
					type="text"
					value={inputValues.name}
					onChange={handleChange}
					name="name"
				/>
				{data && <AutoComplete data={data} currentName={inputValues.name} setInputValues={setInputValues} />}
			</div>
			<div>
				Country/Location:
				<StyledInput
					type="text"
					onChange={handleChange}
					name="country"
					value={inputValues.country}
				/>
			</div>
			<div>
				Website (URL):
				<StyledInput
					type="text"
					onChange={handleChange}
					name="website"
					value={inputValues.website}
				/>
			</div>
			<div>
				Degree:
				<StyledInput
					type="text"
					onChange={handleChange}
					name="degree"
					value={inputValues.degree}
				/>
			</div>
			<div>
				Field/Area of Study:
				<StyledInput
					type="text"
					onChange={handleChange}
					name="field"
					value={inputValues.field}
				/>
			</div>
			<div>
				Grade:
				<StyledInput
					type="number"
					onChange={handleChange}
					name="Grade"
					value={inputValues.Grade}
				/>
			</div>
			<div>
				Description:
				<textarea
					name="description"
					id=""
					cols={30}
					rows={10}
					value={inputValues.description}
					onChange={handleChange}></textarea>
			</div>
			<div>
				Start Date:
				<StyledInput
					type="date"
					name="startDate"
					id=""
					onChange={handleChange}
					value={inputValues.startDate}
				/>
			</div>
			<div>
				End Date:
				<StyledInput
					type="date"
					name="endDate"
					id=""
					onChange={handleChange}
					value={inputValues.endDate}
				/>
			</div>
			<StyledButton onClick={handleSave}>Save</StyledButton>
			<StyledButton onClick={handleCancel}>Cancel</StyledButton>
		</StyledModal>
	);
};

export default AddEducation;
