import styled from 'styled-components';

const StyledInput = styled.input`
	width: 100%;
	height: 50px;
	margin: 6.5px 0;
	border-radius: 5px;
    border: 1px solid #d4d4d4;
	padding: 9px;
    background-color: white;
    color: black;
    font-size: 20px;
    font-family: inherit;
    font-weight: 400;
    cursor: auto;

	&::placeholder {
		color: #ccc;
	}

	&:disabled {
		background-color: #f2f2f2;
		color: #afafaf;
	}

	&:focus {
		outline: none;
	}
`;

export { StyledInput };
