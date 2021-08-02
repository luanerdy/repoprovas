import { GlobalStyle } from './assets/styles/globalStyles';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { UploadExam } from './pages/UploadExam';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Amplify from 'aws-amplify';
import { awsconfig } from './aws-exports';
import './assets/styles/reset.css';
Amplify.configure(awsconfig);

const App = () => {
	return (
		<>
			<GlobalStyle />
			<NavBar />
      <Router>
        <Switch>
			    <Route path="/" component={HomePage} exact />
			    <Route path="/enviar" component={UploadExam} exact />
        </Switch>
      </Router>
		</>
	);
};

export { App };
