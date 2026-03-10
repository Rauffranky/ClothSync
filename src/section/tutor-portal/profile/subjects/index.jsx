import { useNavigate } from "react-router-dom";
import Button from "../../../../components/UI/button";
import AddSubjectCard from "./AddSubjectCard";
import SubjectsTableCard from "./SubjectsTableCard";

const ProfileSubjects = () => {
    const navigate = useNavigate();

    const handleSave = () => {
        console.log("Saving subjects and fees...");
        navigate("/tutor/profile/secure-id");
    };

    return (
        <div className="p-4 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* Left Side - Add Subject Form */}
                <div className="lg:col-span-5">
                    <AddSubjectCard />
                </div>

                {/* Right Side - Subjects Table */}
                <div className="lg:col-span-7">
                    <SubjectsTableCard />
                </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end pt-4">
                <Button
                    label="Save"
                    variant="primary"
                    size="md"
                    className="w-[120px] !rounded-[10px]"
                    onClick={handleSave}
                />
            </div>
        </div>
    );
};

export default ProfileSubjects;
