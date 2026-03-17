import SocialIcons from "../../../components/UI/SocialIcons";
import Reviews from "../../landing-page/tenant-detail/Reviews";

const ReviewLaundry = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h4 className="font-bold my-4">Reviews</h4>
                <div className="flex gap-2 items-center">
                    <h6>Share your profile:</h6>
                    <SocialIcons />
                </div>
            </div>
            <Reviews />
        </div>
    );
};

export default ReviewLaundry;
