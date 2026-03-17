import SocialIcons from "../../../components/UI/SocialIcons";
import ProfileSecureID from "../../tenant-portal/profile/secure-id";

const LaundrySecureIDPaent = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h4 className="font-bold my-4">Secure ID</h4>
                <div className="flex gap-2 items-center">
                    <h6>Share your profile:</h6>
                    <SocialIcons />
                </div>
            </div>
            <ProfileSecureID />
        </div>
    );
};

export default LaundrySecureIDPaent;