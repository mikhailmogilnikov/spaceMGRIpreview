import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

function Header() {
    return (
        <header className="header_container">

            <NavLink to="/">
                <h1 className="project_title">Space</h1>
            </NavLink>
           
            <Navbar />

        </header>
    );
}

export default Header;