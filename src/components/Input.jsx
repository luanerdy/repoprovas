import { StyledInput } from '../assets/styles/input';

const Input = (props) => {
	const {value, setValue} = props;
	return (
		<StyledInput
			{...props}
			value={value ? value : ""}
			onChange={setValue ? (e) => setValue(e.target.value) : () => null}
		/>
	);
};

export { Input };
