import UpcomingLessonParent from "../../section/parent/upcoming-lesson";
import { Helmet } from "@dr.pogodin/react-helmet";

const UpcomingLessonPage = () => {
    return (
        <>
            <Helmet>
                <title>Upcoming Lessons | TuitionFarm</title>
            </Helmet>
            <div>
                <UpcomingLessonParent />
            </div>
        </>
    );
};

export default UpcomingLessonPage;