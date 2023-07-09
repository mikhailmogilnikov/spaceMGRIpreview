import Navbar from "./Navbar";

function Header({ isLoggedIn }) {
    return (
        <header className="header_container">

            <h1 className="project_title">Space</h1>

            {isLoggedIn && <Navbar />}

        </header>
    );
}

export default Header;