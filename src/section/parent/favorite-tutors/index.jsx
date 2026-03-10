import SocialIcons from "../../../components/UI/SocialIcons";
import BrowseTutorList from "../../landing-page/browse-tutor/BrowseTutorList";

const FavoriteTutors = () => {
    return (
        <div>
            <div className="flex items-center justify-between">

                <h4 className="font-bold my-4">Favorite Tutors</h4>
                <div className="flex gap-2 items-center">
                    <h6>Share your profile:</h6>
                    <SocialIcons />
                </div>
            </div>
            <BrowseTutorList showFavoritesOnly={true} />
        </div>
    );
};

export default FavoriteTutors;