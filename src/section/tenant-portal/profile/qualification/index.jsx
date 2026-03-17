import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/UI/button";
import QualificationCard from "./QualificationCard";
import UploadDocumentsCard from "./UploadDocumentsCard";

const ProfileQualification = () => {
    const navigate = useNavigate();

    const handleSave = () => {
        console.log("Saving qualification changes...");
        navigate("/tenant/profile/subjects");
    };

    return (
        <div className="p-4 space-y-8">
            {/* Grid for Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                <QualificationCard />
                <UploadDocumentsCard />
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

export default ProfileQualification;
