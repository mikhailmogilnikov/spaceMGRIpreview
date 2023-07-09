import Courses from "../../components/courses_block/Courses";
import Menu from "../../components/menu_block/Menu";
import Deadline from "../../components/deadline_block/Deadline";

const MenuPage = ({ handleLogout }) => {
    return ( 
        <>
            <Courses />

            <Menu handleLogout={handleLogout}/>

            <Deadline />
        </>
     );
}
 
export default MenuPage;