import Courses from "../components/courses_block/Courses";
import Schedule from "../components/schedule_block/Schedule";
import Deadline from "../components/deadline_block/Deadline";

const HomePage = () => {
    return ( 
        <main className="content_container">
            <Courses />

            <Schedule />

            <Deadline />
        </main>
     );
}
 
export default HomePage;