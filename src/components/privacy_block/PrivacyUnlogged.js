import { CaretLeft } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import PrivacyContent from "./PrivacyContent";


const PrivacyUnlogged = () => {
    return ( 
        <div className="block solo_block">

            <NavLink to={'/enter'} className="title_container back_container">
                <CaretLeft weight="bold" className="icon_mid" />
                <h2>Политика конфиденциальности</h2>
            </NavLink>

            <PrivacyContent />

        </div>
     );
}
 
export default PrivacyUnlogged;