import UpcomingLessonsDetails from "../../section/parent/upcoming-lesson/Details";
import { Helmet } from "@dr.pogodin/react-helmet";
const UpcomingLessonDetailsPage = () => {
    return (
        <>
            <Helmet>
                <title>Upcoming Lesson Details | Tuition Farm </title>
            </Helmet>
            <div>
                <UpcomingLessonsDetails />
            </div>
        </>
    );
};

export default UpcomingLessonDetailsPage;