import Courses from "../components/courses_block/Courses";
import Course from "../components/course_block/Course";
import Deadline from "../components/deadline_block/Deadline";

const CoursePage = () => {
    return (
        <>
            <Courses />

            <Course />

            <Deadline />
        </>
    );
}

export default CoursePage;