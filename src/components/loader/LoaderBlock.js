import { CaretLeft, CalendarBlank, CaretDown } from "@phosphor-icons/react";

import { NavLink } from "react-router-dom";

import Loader from "./Loader";
import LoaderTask from "./LoaderTask";
import LoaderSchedule from "./LoaderSchedule";
import LoaderSettings from "./LoaderSettings";
import LoaderMenu from "./LoaderMenu";
import LoaderCourse from "./LoaderCourse";

const LoaderBlock = () => {

    return (
        <div className="block">

            {/* <NavLink to={'/course'} className="title_container back_container">
                <CaretLeft weight="bold" className="icon_mid" />
                <h2>3ЛР Механические колебания</h2>
            </NavLink> */}



            {/* <div className="title_container">
                <h1>Расписание</h1>
            </div>

            <div className="calendar_block select">
                <CalendarBlank weight="bold" className="icon_mid" />
                <h4 className="date">20.06.2023</h4>
                <CaretDown weight="bold" className="icon_mid" />
            </div> */}



            {/* <div className="title_container desktop_only">
                <h1>Настройка курсов</h1>
            </div>

            <NavLink to={'/courses'} className="title_container back_container tablet">
                <CaretLeft weight="bold" className="icon_mid" />
                <h2>Настройка курсов</h2>
            </NavLink> */}

            <div className="title_container">
                <h1>Меню</h1>
            </div>


            {/* <LoaderTask /> */}
            {/* <LoaderSchedule /> */}
            {/* <LoaderSettings /> */}
            {/* <LoaderMenu /> */}
            <LoaderCourse />

        </div>
    );
}

export default LoaderBlock;