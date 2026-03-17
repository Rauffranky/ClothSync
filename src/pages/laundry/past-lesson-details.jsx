import { Helmet } from "@dr.pogodin/react-helmet";
import PastLessonsDetail from "../../section/laundry/past-lesson/lesson-detail";

const PastLessonDetailsPage = () => {
    return (
        <>
            <Helmet>
                <title>Past Lesson Details | Tuition Farm</title>
            </Helmet>
            <PastLessonsDetail />
        </>
    );
};

export default PastLessonDetailsPage;