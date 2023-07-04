import { EnvelopeSimple, CalendarBlank, StarFour, ClockCountdown, List, } from "@phosphor-icons/react";

import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header_container">

            <NavLink to="/">
                <h1 className="project_title">Space</h1>
            </NavLink>
           

            <nav className="nav_bar_container">

                <div className="nav_bar">
                    <NavLink to="https://stud.mgri.ru/WebApp/#/mail/all" target="_blank" rel="noreferrer" className="nav_elem_container ">
                            <EnvelopeSimple weight="bold" className="icon_nav" />
                    </NavLink>
                </div>

                <div className="nav_bar desktop">

                    <NavLink to="/" className="nav_elem_container">
                        <CalendarBlank weight="bold" className="icon_nav" />
                    </NavLink>


                    <NavLink to="/courses" className="nav_elem_container nav_tablet ">
                        <StarFour weight="bold" className="icon_nav" />
                    </NavLink>

                    <NavLink to="/deadlines" className="nav_elem_container nav_tablet ">
                        <ClockCountdown weight="bold" className="icon_nav" />
                    </NavLink>

                    <NavLink to="/menu" className="nav_elem_container ">
                        <List weight="bold" className="icon_nav" />
                    </NavLink>
                    
                </div>
            </nav>
        </header>
    );
}

export default Header;