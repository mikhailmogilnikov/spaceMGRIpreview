import { CaretLeft } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import FaqContent from "./FaqContent";

const FaqUnlogged = () => {
    return ( 
        <div className="block solo_block">

            <NavLink to={'/enter'} className="title_container back_container">
                <CaretLeft weight="bold" className="icon_mid" />
                <h2>Помощь и возможности</h2>
            </NavLink>

            <FaqContent />

        </div>
     );
}
 
export default FaqUnlogged;