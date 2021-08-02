import { StyledSelect } from '../assets/styles/select';

const Select = (props) => {
	const { value, setValue, options } = props;
	return (
		<StyledSelect {...props} onChange={(e) => setValue(e.target.value)}>
			{options.map((option, index) => (
				<option key={index} value={option.includes('elecione') ? '' : option}>
					{option}
				</option>
			))}
		</StyledSelect>
	);
};

export { Select };
