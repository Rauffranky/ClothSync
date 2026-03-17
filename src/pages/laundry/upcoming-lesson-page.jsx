import UpcomingLessonLaundry from "../../section/laundry/upcoming-lesson";
import { Helmet } from "@dr.pogodin/react-helmet";

const UpcomingLessonPage = () => {
    return (
        <>
            <Helmet>
                <title>Upcoming Lessons | TuitionFarm</title>
            </Helmet>
            <div>
                <UpcomingLessonLaundry />
            </div>
        </>
    );
};

export default UpcomingLessonPage;