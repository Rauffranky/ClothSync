import UpcomingLessonsTable from "./components/UpcomingLessonsTable";
import SocialIcons from "../../../components/UI/SocialIcons";

const UpcomingLessonLaundry = () => {
    return (
        <div>
            <div className="flex items-center justify-between">

                <h4 className="font-bold my-4">Upcoming Lessons</h4>
                <div className="flex gap-2 items-center">
                    <h6>Share your profile:</h6>
                    <SocialIcons />
                </div>
            </div>
            <UpcomingLessonsTable />
        </div>
    );
};

export default UpcomingLessonLaundry;