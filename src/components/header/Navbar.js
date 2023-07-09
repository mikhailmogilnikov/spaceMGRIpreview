import { EnvelopeSimple, CalendarBlank, StarFour, ClockCountdown, List, } from "@phosphor-icons/react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="nav_bar_container">

                <div className="nav_bar">
                    <NavLink to="https://stud.mgri.ru/WebApp/#/mail/all" target="_blank" rel="noreferrer" className="nav_elem_container ">
                            <EnvelopeSimple weight="bold" className="icon_nav" />
                    </NavLink>
                </div>

                <div className="nav_bar nav_bar_mobile">

                    <NavLink to="/" className="nav_elem_container nav_bar_mobile_container">
                        <CalendarBlank weight="bold" className="icon_nav icon_nav_mobile" />
                    </NavLink>


                    <NavLink to="/courses" className="nav_elem_container nav_tablet nav_bar_mobile_container ">
                        <StarFour weight="bold" className="icon_nav icon_nav_mobile" />
                    </NavLink>

                    <NavLink to="/deadlines" className="nav_elem_container nav_tablet nav_bar_mobile_container">
                        <ClockCountdown weight="bold" className="icon_nav icon_nav_mobile" />
                    </NavLink>

                    <NavLink to="/menu" className="nav_elem_container nav_bar_mobile_container">
                        <List weight="bold" className="icon_nav icon_nav_mobile" />
                    </NavLink>
                    
                </div>
            </nav>
     );
}
 
export default Navbar;