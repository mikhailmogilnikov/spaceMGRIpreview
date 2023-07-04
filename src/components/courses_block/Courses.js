import { GearFine, CaretRight, } from "@phosphor-icons/react";

const Courses = () => {
    return ( 
        <div className="block edge_block">
        <div className="title_container">
          <h1>Курсы</h1>
          <div className="button_cover">
            <GearFine weight="bold" className="icon_mid" />
          </div>
        </div>
        <div className="course_list_container">
          <div className="course_list_item select">
            <h3>Сейсморазведка</h3>
            <CaretRight weight="bold" className="icon_min" />
          </div>
          <div className="course_list_item select">
            <h3>Магниторазведка</h3>
            <CaretRight weight="bold" className="icon_min" />
          </div>
        </div>
      </div>
     );
}
 
export default Courses;