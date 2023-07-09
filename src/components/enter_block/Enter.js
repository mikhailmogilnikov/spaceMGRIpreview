import { AsteriskSimple, CaretRight, Question } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

const Enter = ({handleLogin}) => {
    return (
        <div className="block solo_block">

            <div className="title_container">
                <h1>Вход</h1>
            </div>

            <div className="element_container">
                <div className="content_cover">
                    <div className="content_elem_row">
                        <input
                            className="input"
                            placeholder='Логин'
                        />
                    </div>

                    <div className="breaker"></div>

                    <div className="content_elem_row">
                        <input
                            className="input"
                            placeholder='Пароль'
                        />
                    </div>
                </div>
                <NavLink to={'/'} onClick={handleLogin} className="button_main">
                    <h4 className="text_button_main">Войти</h4>
                </NavLink>
                <div className="title_container">
                    <p className="bottom_text">Вход в приложение осуществляется при помощи учетной записи stud.mgri.ru</p>
                </div>
            </div>

            <div className="element_container">
                <div className="title_container">
                    <h3>Дополнительно</h3>
                </div>

                <div className="content_cover">

                    <NavLink to="/faq" className="content_elem_row select">
                        <Question weight="bold" className="icon_mid" />
                        <p>Помощь и возможности</p>
                        <CaretRight weight="bold" className="icon_mid" />
                    </NavLink>

                    <div className="breaker"></div>

                    <NavLink to="/privacy" className="content_elem_row select">
                        <AsteriskSimple weight="bold" className="icon_mid" />
                        <p>Политика конфиденциальности</p>
                        <CaretRight weight="bold" className="icon_mid" />
                    </NavLink>

                </div>

                <div className="title_container">
                    <p className="bottom_text">Подсказка: Добавьте приложение на главный экран устройства для быстрого доступа</p>
                </div>
            </div>
        </div>
    );
}

export default Enter;