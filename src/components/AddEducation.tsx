import StyledButton from "./styles/Button.styles";
import { Dispatch, SetStateAction } from "react";
import { StyledInput, StyledTextArea } from "./styles/Input.styles";
import { useQuery } from "react-query";
import { useState } from "react";
import { EduInfoType } from "@/@types";
import { useEduContext } from "@/context/userContext";
import AutoComplete from "./AutoComplete";
import {
	InputField,
	ModalFooter,
	StyledModal,
} from "./styles/Container.styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AddEducation = ({ isOpen, setIsOpen }: Props) => {
	//state declarations
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

	//Validate and alert if error
	const validate = (): boolean => {
		for (const name in inputValues) {
			if (!inputValues[name as keyof EduInfoType]) {
				toast(`Invalid ${name} value`);
				return false;
			}
		}
		return true;
	};

	//Fetches data with name and as query key
	const { error, data } = useQuery({
		queryKey: ["value", inputValues.name],
		queryFn: () =>
			inputValues.name
				? fetch(
						`http://universities.hipolabs.com/search?name=${inputValues.name}`
				  ).then((res) => res.json())
				: Promise.resolve([]),
	});

	//Error Handling
	if (error) {
		const errorMessage = (error as Error).message || "An error occurred"; // Use a default message if 'message' doesn't exist
		toast(errorMessage); // Display the error message using your toast library
	}

	//Event Handlers
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const target = e.target;
		// Special handling for the Grade input
		const parsedValue =
			target.name === "Grade" ? parseFloat(target.value) : target.value;
		//Update values based on name
		setInputValues({ ...inputValues, [target.name]: parsedValue });
	};

	const handleSave = () => {
		if (validate()) {
			updateEduInfo(inputValues);
			setInputValues(defaultInput);
			setIsOpen(false);
		}
	};

	const handleCancel = () => {
		setInputValues(defaultInput);
		setIsOpen(false);
	};

	return (
		<StyledModal isOpen={isOpen}>
			<h4>
				Add new Education to <span>Showcase</span>
			</h4>
			<InputField>
				<p>Name of Institution</p>
				<StyledInput
					type="text"
					value={inputValues.name}
					onChange={handleChange}
					name="name"
				/>

				{data && (
					<AutoComplete
						data={data}
						currentName={inputValues.name}
						setInputValues={setInputValues}
					/>
				)}
			</InputField>
			<InputField>
				<p>Country/Location</p>
				<StyledInput
					type="text"
					onChange={handleChange}
					name="country"
					value={inputValues.country}
				/>
			</InputField>
			<InputField>
				<p>Website (URL)</p>
				<StyledInput
					type="text"
					onChange={handleChange}
					name="website"
					value={inputValues.website}
				/>
			</InputField>
			<InputField>
				<p>Degree</p>
				<StyledInput
					type="text"
					onChange={handleChange}
					name="degree"
					value={inputValues.degree}
				/>
			</InputField>
			<InputField>
				<p>Field/Area of Study</p>
				<StyledInput
					type="text"
					onChange={handleChange}
					name="field"
					value={inputValues.field}
				/>
			</InputField>
			<InputField>
				<p>Grade</p>
				<StyledInput
					type="number"
					onChange={handleChange}
					name="Grade"
					value={inputValues.Grade}
				/>
			</InputField>
			<InputField>
				<p>Description</p>
				<StyledTextArea
					name="description"
					value={inputValues.description}
					onChange={handleChange}></StyledTextArea>
			</InputField>
			<InputField>
				<p>Start Date</p>
				<StyledInput
					type="date"
					name="startDate"
					id=""
					onChange={handleChange}
					value={inputValues.startDate}
				/>
			</InputField>
			<InputField>
				<p>End Date</p>
				<StyledInput
					type="date"
					name="endDate"
					id=""
					onChange={handleChange}
					value={inputValues.endDate}
				/>
			</InputField>
			<ModalFooter>
				<StyledButton onClick={handleSave}>Save</StyledButton>
				<StyledButton onClick={handleCancel}>Cancel</StyledButton>
			</ModalFooter>
		</StyledModal>
	);
};

export default AddEducation;
