import { FilePlus, LinkSimple, Paperclip, Plus, X } from "@phosphor-icons/react";
import { CSSTransition } from "react-transition-group";

const AddSolutionModal = ({ setModal, isModal }) => {
    return (
        <div className="modal_wrapper">
            <CSSTransition in={isModal} classNames={'modal_bg_anim'} timeout={1000} mountOnEnter>
                <div onClick={setModal} className="modal_bg"></div>
            </CSSTransition>

            <CSSTransition in={isModal} timeout={1000} classNames={'modal_anim'} mountOnEnter>
                <div className="modal">
                    <div className="title_container">
                        <Paperclip weight="bold" className="icon_mid" size={"28px"}/>
                        <h1 className="modal_title_text">Прикрепить решение</h1>
                        <X onClick={setModal} weight="bold" className="icon_mid pointer" size={"28px"}/>
                    </div>
                    <div className="element_container">
                        <div className="title_container">
                            <FilePlus weight="bold" className="icon_mid"/>
                            <h3>Файл</h3>
                        </div>
                        <div className="content_cover">
                            <div className="content_elem_column">
                                <h3>Могильников Михаил Андреевич</h3>
                                <div className="column_container_mini low_opacity">
                                    <div className="container_row_start">

                                        <p>ПИ-20</p>
                                    </div>
                                    <div className="container_row_start">

                                        <p>mikhail.mogilnikov02@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="element_container">
                        <div className="title_container">
                            <LinkSimple weight="bold" className="icon_mid"/>
                            <h3>Ссылка</h3>
                        </div>
                        <div className="content_cover">
                            <div className="content_elem_column">
                                <h3>Могильников Михаил Андреевич</h3>
                                <div className="column_container_mini low_opacity">
                                    <div className="container_row_start">

                                        <p>ПИ-20</p>
                                    </div>
                                    <div className="container_row_start">

                                        <p>mikhail.mogilnikov02@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
}

export default AddSolutionModal;