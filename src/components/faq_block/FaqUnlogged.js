import { CaretLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import FaqContent from "./FaqContent";

const FaqUnlogged = () => {
    const navigate = useNavigate()

    return ( 
        <div className="block solo_block">

            <div className="title_container back_container" onClick={() => navigate(-1)}>
                <CaretLeft weight="bold" className="icon_mid" />
                <h2>Помощь и возможности</h2>
            </div>

            <FaqContent />

        </div>
     );
}
 
export default FaqUnlogged;