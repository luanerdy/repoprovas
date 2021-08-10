import { Home } from "../assets/styles/home";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <Home>
            <div>
                <p>Visualizar provas</p>
                <div>
                    <Link to="/professors">por professor <BsBoxArrowUpRight /></Link>
                    <Link to="/subjects">por disciplina <BsBoxArrowUpRight /></Link>
                </div>
            </div>
            <div>
                <Link to="/enviar">Adicionar uma prova <BsBoxArrowUpRight /></Link>
            </div>
        </Home>
    );
};

export { HomePage };
