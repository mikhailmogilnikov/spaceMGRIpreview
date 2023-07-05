import { DownloadSimple, Check, Clock, CaretRight, CaretLeft, ArrowSquareOut, LinkSimple, FileImage, FilePdf, PencilSimple, X, WarningCircle, FileText, FileZip, FilePpt, FileXls, FileDoc, File } from "@phosphor-icons/react";

import { NavLink } from "react-router-dom";


const Course = () => {
    return (
        <div className="block">

            <div className="title_container desktop_back">
                <h1>Сейсморазведка</h1>
            </div>

            <NavLink to={'/courses'} className="title_container tablet_back" preventScrollReset={true}>
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

                    <div className="content_elem_row select">
                        <div className="content_inner_column">
                            <h4>3ЛР Механические колебания</h4>
                            <div className="lighter pract">
                                <PencilSimple weight="bold" className="icon_min text_lighter" />
                                <p className="text_lighter">На доработке</p>
                            </div>
                        </div>
                        <CaretRight weight="bold" className="icon_mid" />
                    </div>

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

            <div className="element_container">
                <div className="title_container">
                    <h3>Материалы курса</h3>
                </div>

                <div className="content_cover">

                    <div className="content_elem_row select">
                        <FileImage weight="bold" className="icon_mid" />
                        <p className="text_file">picture.png</p>
                        <ArrowSquareOut weight="bold" className="icon_mid" />
                    </div>

                    <div className="breaker"></div>

                    <div className="content_elem_row select">
                        <FilePdf weight="bold" className="icon_mid" />
                        <p className="text_file">test.pdf</p>
                        <ArrowSquareOut weight="bold" className="icon_mid" />
                    </div>

                    <div className="breaker"></div>

                    <div className="content_elem_row select">
                        <LinkSimple weight="bold" className="icon_mid" />
                        <p className="text_file">website link</p>
                        <ArrowSquareOut weight="bold" className="icon_mid" />
                    </div>

                    <div className="breaker"></div>

                    <div className="content_elem_row select">
                        <FileText weight="bold" className="icon_mid" />
                        <p className="text_file">text_file.txt</p>
                        <DownloadSimple weight="bold" className="icon_mid" />
                    </div>

                    <div className="breaker"></div>

                    <div className="content_elem_row select">
                        <FileZip weight="bold" className="icon_mid" />
                        <p className="text_file">archive.zip</p>
                        <DownloadSimple weight="bold" className="icon_mid" />
                    </div>

                    <div className="breaker"></div>

                    <div className="content_elem_row select">
                        <FilePpt weight="bold" className="icon_mid" />
                        <p className="text_file">presentation.ppt</p>
                        <DownloadSimple weight="bold" className="icon_mid" />
                    </div>

                    <div className="breaker"></div>

                    <div className="content_elem_row select">
                        <FileXls weight="bold" className="icon_mid" />
                        <p className="text_file">excel_file.xls</p>
                        <DownloadSimple weight="bold" className="icon_mid" />
                    </div>

                    <div className="breaker"></div>

                    <div className="content_elem_row select">
                        <FileDoc weight="bold" className="icon_mid" />
                        <p className="text_file">document.doc</p>
                        <DownloadSimple weight="bold" className="icon_mid" />
                    </div>

                    <div className="breaker"></div>

                    <div className="content_elem_row select">
                        <File weight="bold" className="icon_mid" />
                        <p className="text_file">unknown_format.css</p>
                        <DownloadSimple weight="bold" className="icon_mid" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Course;