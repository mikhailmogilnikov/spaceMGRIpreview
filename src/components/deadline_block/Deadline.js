import { Clock } from "@phosphor-icons/react";

const Deadline = () => {
    return ( 
        <div class="block edge_block">
            <div class="title_container">
              <h1>Ближайшие дедлайны</h1>
            </div>

            <div class="deadline_row_container">

              <div class="content_cover select">
                <div class="content_elem_column">
                  <h3>Сейсморазведка</h3>
                  <p className="low_opacity">ЛР3 Механические колебания</p>
                  <div class="lighter not_checked">
                    <Clock weight="bold" className="icon_min" />
                    <p>10 часов</p>
                  </div>
                </div>
              </div>

              <div class="content_cover select">
                <div class="content_elem_column">
                  <h3>Магниторазведка</h3>
                  <p className="low_opacity">Электрические колебания</p>
                  <div class="lighter not_checked">
                    <Clock weight="bold" className="icon_min" />
                    <p>2 дня</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
     );
}
 
export default Deadline;