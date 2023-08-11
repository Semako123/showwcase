import Modal from "react-modal";
import StyledButton from "./styles/Button.styles";
import { Dispatch, SetStateAction } from "react";

interface Props {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AddEducation = ({ isOpen, setIsOpen }: Props) => {
	return (
		<Modal isOpen={isOpen}>
			<div>Add new Education to Showcase</div>
			<div>
				Name of Institution:
				<input type="text" />
			</div>
			<div>
				Country/Location:
				<input type="text" />
			</div>
			<div>
				Website (URL):
				<input type="text" />
			</div>
			<div>
				Degree:
				<input type="text" />
			</div>
			<div>
				Field/Area of Study:
				<input type="text" />
			</div>
			<div>
				Grade:
				<input type="number" />
			</div>
			<div>
				Description:
				<textarea name="" id="" cols={30} rows={10}></textarea>
			</div>
			<div>
				Start Date:
				<input type="date" name="" id="" />
			</div>
			<div>
				End Date:
				<input type="date" name="" id="" />
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
