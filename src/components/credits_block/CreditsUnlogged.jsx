import { CaretLeft } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import CreditsContent from './CreditsContent'

const CreditsUnlogged = () => {
    return ( 
        <div className="block solo_block">

            <NavLink to={'/enter'} className="title_container back_container">
                <CaretLeft weight="bold" className="icon_mid" />
                <h2>Авторы</h2>
            </NavLink>

            <CreditsContent />

        </div>
     );
}
 
export default CreditsUnlogged;