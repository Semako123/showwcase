interface EduDetailsPropType {
	params: {
		id: number;
	};
}
const EduDetails = ({ params }: EduDetailsPropType) => {
	return <div>EduDetails {params.id}</div>;
};

export default EduDetails;
