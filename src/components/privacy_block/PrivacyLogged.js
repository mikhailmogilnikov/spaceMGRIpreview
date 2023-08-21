import { CaretLeft } from "@phosphor-icons/react";
import { NavLink, useNavigate } from "react-router-dom";
import PrivacyContent from "./PrivacyContent";


const PrivacyLogged = () => {
    const navigate = useNavigate()
    return ( 
        <div className="block">

            <div className="title_container back_container" onClick={() => navigate(-1)}>
                <CaretLeft weight="bold" className="icon_mid" />
                <h2>Политика конфиденциальности</h2>
            </div>

            <PrivacyContent />

        </div>
     );
}
 
export default PrivacyLogged;