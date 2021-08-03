import { useEffect, useState } from 'react';
import { Upload } from '../assets/styles/upload';
import { FileInput } from '../components/FileInput';
import { Form } from '../components/Form';
import { Input } from '../components/Input';
import { Select } from '../components/Select';
import { SubmitButton } from '../components/SubmitButton';
import { Storage } from 'aws-amplify';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const UploadExam = () => {
	const [name, setName] = useState('');
	const [categories, setCategories] = useState([]);
	const [subjects, setSubjects] = useState([]);
	const [professors, setProfessors] = useState([]);
	const [category, setCategory] = useState('');
	const [subject, setSubject] = useState('');
	const [professor, setProfessor] = useState('');
	const [disabled, setDisabled] = useState(false);
	const [file, setFile] = useState();
	const history = useHistory();

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_HOST}/categories`)
			.then((res) => {
				setCategories(res.data);
			})
			.catch((err) => {
				alert('Erro! Tente novamente!');
				console.log(err);
			});
	}, [category]);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_HOST}/subjects`)
			.then((res) => {
				setSubjects(res.data);
			})
			.catch((err) => {
				alert('Erro! Tente novamente!');
				console.log(err);
			});
	}, [subject]);

	useEffect(() => {
		if (subject) {
			axios
				.get(`${process.env.REACT_APP_HOST}/professors/${subject}`)
				.then((res) => {
					setProfessors(res.data);
				})
				.catch((err) => {
					alert('Erro! Tente novamente!');
					console.log(err);
				});
		}
	}, [subject]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setDisabled(true);
		const key = `${name}.pdf`;

		try {
			const upload = await Storage.put(key, file, {
				contentDisposition: 'inline',
				contentType: 'application/pdf',
			});
			const data = {
				name,
				category,
				subject,
				professor,
				url: `${process.env.REACT_APP_FILE_REPO}/${key}`,
			};

			await axios.post(`${process.env.REACT_APP_HOST}/exams`, data);
			alert('Prova enviada com sucesso!');
			setProfessor('');
			setSubject('');
			setCategory('');
			setName('');
			setFile(undefined);
			setDisabled(false);
			window.open(data.url, "_blank");
			history.push("/");
		} catch (err) {
			alert('Erro! Tente novamente!');
			setDisabled(false);
		}
	};

	return (
		<Upload>
			<Form disabled={disabled} onSubmit={handleSubmit}>
				<h2 className="title">
					Preencha os campos para enviar uma prova
				</h2>
				<Input
					required
					placeholder="Nome da prova"
					value={name}
					setValue={setName}
				/>
				<Select
					options={['Selecione a categoria', ...categories]}
					required
					value={category}
					setValue={setCategory}
				/>
				<Select
					options={['Selecione a disciplina', ...subjects]}
					required
					value={subject}
					setValue={setSubject}
				/>
				<Select
					disabled={subjects.length === 0}
					options={['Selecione o professor', ...professors]}
					required
					value={professor}
					setValue={setProfessor}
				/>
				<FileInput required setValue={setFile} />
				<SubmitButton>Enviar</SubmitButton>
			</Form>
		</Upload>
	);
};

export { UploadExam };
