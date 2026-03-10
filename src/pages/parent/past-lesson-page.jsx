import PastLessons from "../../section/parent/past-lesson";
import { Helmet } from "@dr.pogodin/react-helmet";
const PastLessonPage = () => {
    return (
        <>
            <Helmet>
                <title>Past Lessons | TuitionFarm</title>
            </Helmet>
            <div>
                <PastLessons />
            </div>
        </>
    );
};

export default PastLessonPage;