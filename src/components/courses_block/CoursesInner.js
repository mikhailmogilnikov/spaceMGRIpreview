import { GearFine, CaretRight, } from "@phosphor-icons/react";

import { NavLink } from "react-router-dom";

const CoursesInner = () => {
    return (
        <>
            <div className="title_container">
                <h1>Курсы</h1>
                <NavLink to="/settings" className="button_cover">
                    <GearFine weight="bold" className="icon_mid" />
                </NavLink>
            </div>
            <div className="course_list_container">

                <NavLink to="/course" className="course_list_item select">
                    <h3>Сейсморазведка</h3>
                    <CaretRight weight="bold" className="icon_min" />
                </NavLink>


                <div className="course_list_item select">
                    <h3>Магниторазведка</h3>
                    <CaretRight weight="bold" className="icon_min" />
                </div>

            </div>

        </>
    );
}

export default CoursesInner;