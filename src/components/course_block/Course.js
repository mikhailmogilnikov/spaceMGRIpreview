import { DownloadSimple, CaretRight, CaretLeft, ArrowSquareOut, LinkSimple, FileImage, FilePdf } from "@phosphor-icons/react";

import { NavLink } from "react-router-dom";


const Course = () => {
    return (
        <div className="block">

            <div className="title_container desktop_back">
                <h1>Сейсморазведка</h1>
            </div>

            <NavLink to={'/courses'} className="title_container tablet_back">
                <CaretLeft weight="bold" className="icon_mid" />
                <h2>Сейсморазведка</h2>
            </NavLink>

            <div className="element_container">
                <div className="title_container">
                    <h3>Задания</h3>
                </div>

                <div className="content_cover">

                    <div className="content_elem_row select">
                        <p>Анимированный фон</p>
                        <CaretRight weight="bold" className="icon_mid" />
                    </div>

                    <div className="breaker"></div>

                    <div className="content_elem_row select">
                        <p>Показывать количество непрочитанных писем</p>
                        <CaretRight weight="bold" className="icon_mid" />
                    </div>

                </div>

            </div>

            <div className="element_container">
                <div className="title_container">
                    <h3>Материалы курса</h3>
                </div>

                <div className="content_cover">

                    <div className="content_elem_row select">
                        <FileImage weight="bold" className="icon_mid" />
                        <p>picture.png</p>
                        <ArrowSquareOut weight="bold" className="icon_mid" />
                    </div>

                    <div className="breaker"></div>

                    <div className="content_elem_row select">
                        <FilePdf weight="bold" className="icon_mid" />
                        <p>test.pdf</p>
                        <ArrowSquareOut weight="bold" className="icon_mid" />
                    </div>

                    <div className="breaker"></div>

                    <div className="content_elem_row select">
                        <LinkSimple weight="bold" className="icon_mid" />
                        <p>website link</p>
                        <ArrowSquareOut weight="bold" className="icon_mid" />
                    </div>

                    <div className="breaker"></div>

                    <NavLink to="https://stud.mgri.ru" target="_blank" rel="noreferrer" className="content_elem_row select">
                        <p>Электронно-образовательная платформа</p>
                        <DownloadSimple weight="bold" className="icon_mid" />
                    </NavLink>

                </div>
            </div>
        </div>
    );
}

export default Course;