import Navbar from "./Navbar";
import MgriLogo from './MgriLogo'

function Header({ isLoggedIn }) {
    return (
        <header className="header_container">

            <h1 className="project_title">Space</h1>

            {isLoggedIn && <Navbar />}
            {isLoggedIn === false && <MgriLogo/>}

        </header>
    );
}

export default Header;