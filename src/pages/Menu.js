import Courses from "../components/courses_block/Courses";
import Menu from "../components/menu_block/Menu";
import Deadline from "../components/deadline_block/Deadline";

const MenuPage = () => {
    return ( 
        <main className="content_container">
            <Courses />

            <Menu />

            <Deadline />
        </main>
     );
}
 
export default MenuPage;