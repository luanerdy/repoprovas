import styled from 'styled-components';

const StyledSelect = styled.select`
	width: 100%;
	height: 50px;
	margin: 6.5px 0;
	border-radius: 5px;
    border: 1px solid #d4d4d4;
	padding: 9px;
    background-color: white;
    color: ${(props) => (props.value ? 'black' : '#ccc')};
    font-size: 20px;
    font-family: inherit;
    font-weight: 400;
    cursor: auto;

	&::placeholder {
		color: #d4d4d4;
	}

	&:disabled {
		background-color: #f2f2f2;
		color: #afafaf;
	}

	&:focus {
		outline: none;
	}

    option:first-child {
        color: #ccc;
    }

	option {
		color: black;
	}
    
`;

export { StyledSelect };
