import { CalendarBlank, StarFour, ClockCountdown, List } from "@phosphor-icons/react";

import { NavLink } from "react-router-dom";
import { CSSTransition } from 'react-transition-group'
import { useState, useEffect } from "react";

const Navbar_mobile = () => {

    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
          setIsNavbarVisible(true);
        }, 1000);
      
        return () => {
          clearTimeout(timeout);
        };
      }, []);


    return (
        <CSSTransition in={isNavbarVisible} classNames={'navbar_mobile_anim'} timeout={1000} unmountOnExit>
            <nav class="nav_bar_mobile">

                <NavLink to="/" className="nav_bar_mobile_container">
                    <CalendarBlank weight="bold" className="icon_nav_mobile" />
                </NavLink>

                <NavLink to="/courses" className="nav_bar_mobile_container">
                    <StarFour weight="bold" className="icon_nav_mobile" />
                </NavLink>

                <NavLink to="/deadlines" className="nav_bar_mobile_container">
                    <ClockCountdown weight="bold" className="icon_nav_mobile" />
                </NavLink>

                <NavLink to="/menu" className="nav_bar_mobile_container">
                    <List weight="bold" className="icon_nav_mobile" />
                </NavLink>

            </nav>
        </CSSTransition>
    );
}

export default Navbar_mobile;