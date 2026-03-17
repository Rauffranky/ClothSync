import CalendarGrid from "../../tenant-portal/calendar/CalendarGrid";
import SocialIcons from "../../../components/UI/SocialIcons";

const TimeTable = () => {
    return (
        <div>
            <div className="flex items-center justify-between">

                <h4 className="font-bold my-4">TimeTable</h4>
                <div className="flex gap-2 items-center">
                    <h6>Share your profile:</h6>
                    <SocialIcons />
                </div>
            </div>

            <div className="h-[calc(100vh-150px)]">
                <CalendarGrid />
            </div>
        </div>
    );
};

export default TimeTable;
