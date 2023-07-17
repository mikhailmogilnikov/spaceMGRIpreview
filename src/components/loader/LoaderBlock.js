import { CaretLeft } from "@phosphor-icons/react";

import { NavLink } from "react-router-dom";
import { useState } from "react";

import Loader from "./Loader";

const LoaderBlock = () => {

    return (
        <div className="block">

            <NavLink to={'/course'} className="title_container back_container">
                <CaretLeft weight="bold" className="icon_mid" />
                <h2>3ЛР Механические колебания</h2>
            </NavLink>

            <Loader />

        </div>
    );
}

export default LoaderBlock;