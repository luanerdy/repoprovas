import { StyledFileInput } from '../assets/styles/fileInput';

const FileInput = (props) => {
	const { setValue } = props;
	return (
		<StyledFileInput
            type="file"
			{...props}
            onChange={e => setValue(e.target.files[0])}
		/>
	);
};

export { FileInput };
