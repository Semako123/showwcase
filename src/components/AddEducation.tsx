import Modal from "react-modal";
import StyledButton from "./styles/Button.styles";
import { Dispatch, SetStateAction } from "react";
import { StyledInput } from "./styles/Input.styles";
import { useQuery } from "react-query";
import { useState } from "react";

interface Props {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AddEducation = ({ isOpen, setIsOpen }: Props) => {
	const [value, setValue] = useState("");
	const { isLoading, error, data } = useQuery({queryKey:["value", value], queryFn:() =>
		fetch(`http://universities.hipolabs.com/search?name=${value}`).then((res) =>
			res.json()
)}
	);
	const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};
	return (
		<Modal isOpen={isOpen}>
			<div>Add new Education to Showcase</div>
			<div>
				Name of Institution:
				<StyledInput type="text" value={value} onChange={handleChange} />
				{!isLoading && <div>{data[0].name}</div>}
			</div>
			<div>
				Country/Location:
				<StyledInput type="text" />
			</div>
			<div>
				Website (URL):
				<StyledInput type="text" />
			</div>
			<div>
				Degree:
				<StyledInput type="text" />
			</div>
			<div>
				Field/Area of Study:
				<StyledInput type="text" />
			</div>
			<div>
				Grade:
				<StyledInput type="number" />
			</div>
			<div>
				Description:
				<textarea name="" id="" cols={30} rows={10}></textarea>
			</div>
			<div>
				Start Date:
				<StyledInput type="date" name="" id="" />
			</div>
			<div>
				End Date:
				<StyledInput type="date" name="" id="" />
			</div>
			<StyledButton
				onClick={() => {
					setIsOpen(false);
				}}>
				Save
			</StyledButton>
		</Modal>
	);
};

export default AddEducation;
