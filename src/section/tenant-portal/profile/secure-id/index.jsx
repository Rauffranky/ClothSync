import { useNavigate } from "react-router-dom";
import Button from "../../../../components/UI/button";
import PasswordCard from './PasswordCard';
import TwoFactorCard from './TwoFactorCard';

const ProfileSecureID = () => {
    const navigate = useNavigate();

    const handleSave = () => {
        console.log("Profile setup complete!");
        navigate("/tenant/dashboard");
    };

    return (
        <div className="p-4 md:p-6 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                <PasswordCard />
                <TwoFactorCard />
            </div>

            {/* Save Button */}
            <div className="flex justify-end pt-4">
                <Button
                    label="Save"
                    variant="primary"
                    size="md"
                    className="w-full sm:w-[140px] !rounded-[10px] text-[16px] font-semibold"
                    onClick={handleSave}
                />
            </div>
        </div>
    );
};

export default ProfileSecureID;
