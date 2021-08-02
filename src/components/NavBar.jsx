import { Nav } from '../assets/styles/nav';
import Logo from '../assets/images/logo.png'

const NavBar = () => {
	return (
		<Nav>
			<img src={Logo} alt="Logotipo" />
			<h1 className="title">RepoProvas</h1>
		</Nav>
	);
};

export { NavBar };
