import { CaretRight, Clock } from "@phosphor-icons/react";

const DeadlineInner = () => {
    return (
        <>
            <div className="title_container">
                <h1>Ближайшие дедлайны</h1>
            </div>

            <div className="deadline_row_container">
                <div className="content_cover select">
                    <div className="content_elem_row">
                        <div className="content_inner_column">
                            <h3>Сейсморазведка</h3>
                            <p className="low_opacity">3ЛР Механические колебания</p>
                            <div className="lighter not_checked">
                                <Clock weight="bold" className="icon_min" />
                                <p>10 часов</p>
                            </div>
                        </div>
                        <CaretRight weight="bold" className="icon_mid tablet" />
                    </div>
                </div>

                <div className="content_cover select">
                    <div className="content_elem_row">
                        <div className="content_inner_column">
                            <h3>Магниторазведка</h3>
                            <p className="low_opacity">Электрические колебания</p>
                            <div className="lighter not_checked">
                                <Clock weight="bold" className="icon_min" />
                                <p>2 дня</p>
                            </div>
                        </div>
                        <CaretRight weight="bold" className="icon_mid tablet" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DeadlineInner;