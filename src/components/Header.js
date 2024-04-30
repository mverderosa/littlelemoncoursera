import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import Nav from "./Nav";

const Header = () => {
    return(
        <header>
            <Link to="/"><img src={Logo}></img></Link>
            <Nav />
        </header>
    )
}

export default Header