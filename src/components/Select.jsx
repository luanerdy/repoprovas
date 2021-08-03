import { StyledSelect } from '../assets/styles/select';

const Select = (props) => {
	const { setValue, options } = props;
	return (
		<StyledSelect {...props} disabled={props.disabled} onChange={(e) => setValue(e.target.value)}>
			{options.map((option, index) => (
				<option key={index} value={index ? option.id : ''}>
					{index ? option.name : option}
				</option>
			))}
		</StyledSelect>
	);
};

export { Select };
