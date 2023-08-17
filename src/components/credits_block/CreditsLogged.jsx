import { CaretLeft } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import CreditsContent from './CreditsContent'

const CreditsLogged = () => {
    return ( 
        <div className="block">

            <NavLink to={'/menu'} className="title_container back_container">
                <CaretLeft weight="bold" className="icon_mid" />
                <h2>Авторы</h2>
            </NavLink>

            <CreditsContent />

        </div>
     );
}
 
export default CreditsLogged;