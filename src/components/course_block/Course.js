import { Check, Clock, CaretRight, CaretLeft, PencilSimple, X, WarningCircle } from "@phosphor-icons/react";

import { NavLink } from "react-router-dom";
import Materials from "../materials/Materials";


const Course = () => {
    return (
        <div className="block">

            <div className="title_container desktop_only">
                <h1>Сейсморазведка</h1>
            </div>

            <NavLink to={'/courses'} className="title_container back_container tablet">
                <CaretLeft weight="bold" className="icon_mid" />
                <h2>Сейсморазведка</h2>
            </NavLink>

            <div className="element_container">
                <div className="title_container">
                    <h3>Задания</h3>
                </div>

                <div className="content_cover">

                    <div className="content_elem_row select">
                        <div className="content_inner_column">
                            <h4>1ЛР Механические колебания</h4>
                            <div className="lighter lect">
                                <Check weight="bold" className="icon_min text_lighter" />
                                <p className="text_lighter">Выполнено</p>
                            </div>
                        </div>
                        <CaretRight weight="bold" className="icon_mid" />
                    </div>

                    <div className="breaker"></div>

                    <div className="content_elem_row select">
                        <div className="content_inner_column">
                            <h4>2ЛР Магнитные колебания</h4>
                            <div className="lighter exam">
                                <Clock weight="bold" className="icon_min text_lighter" />
                                <p className="text_lighter">В проверке</p>
                            </div>
                        </div>
                        <CaretRight weight="bold" className="icon_mid" />
                    </div>

                    <div className="breaker"></div>

                    <NavLink to={'/task'} className="content_elem_row select">
                        <div className="content_inner_column">
                            <h4>3ЛР Механические колебания</h4>
                            <div className="lighter pract">
                                <PencilSimple weight="bold" className="icon_min text_lighter" />
                                <p className="text_lighter">На доработке</p>
                            </div>
                        </div>
                        <CaretRight weight="bold" className="icon_mid" />
                    </NavLink>

                    <div className="breaker"></div>

                    <div className="content_elem_row select">
                        <div className="content_inner_column">
                            <h4>4ЛР Магнитные колебания</h4>
                            <div className="lighter declined">
                                <X weight="bold" className="icon_min text_lighter" />
                                <p className="text_lighter">Просрочено</p>
                            </div>
                        </div>
                        <CaretRight weight="bold" className="icon_mid" />
                    </div>

                    <div className="breaker"></div>

                    <div className="content_elem_row select">
                        <div className="content_inner_column">
                            <h4>5ЛР Механические колебания</h4>
                            <div className="lighter not_checked">
                                <WarningCircle weight="bold" className="icon_min" />
                                <p>Не проверено</p>
                            </div>
                        </div>
                        <CaretRight weight="bold" className="icon_mid" />
                    </div>

                </div>

            </div>

            <Materials />

        </div>
    );
}

export default Course;