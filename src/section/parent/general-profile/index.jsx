import SocialIcons from "../../../components/UI/SocialIcons";
import GeneralProfile from "../../tutor-portal/profile/general";

const GeneralProfileParent = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h4 className="font-bold my-4">General Profile</h4>
                <div className="flex gap-2 items-center">
                    <h6>Share your profile:</h6>
                    <SocialIcons />
                </div>
            </div>
            <GeneralProfile />
        </div>
    );
};

export default GeneralProfileParent;