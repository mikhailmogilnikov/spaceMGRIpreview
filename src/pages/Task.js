import Courses from "../components/courses_block/Courses";
import Task from "../components/task_block/Task";
import Deadline from "../components/deadline_block/Deadline";

const TaskPage = () => {
    return ( 
        <>
            <Courses />

            <Task />

            <Deadline />
        </>
     );
}
 
export default TaskPage;