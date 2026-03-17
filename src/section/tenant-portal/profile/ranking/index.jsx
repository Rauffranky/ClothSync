import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/UI/button";
import RankingCard from "./RankingCard";

const ProfileRanking = () => {
    const navigate = useNavigate();

    const handleSave = () => {
        console.log("Profile setup complete!");
        navigate("/tenant/dashboard");
    };

    return (
        <div className="p-4 md:p-6 space-y-8">
            <div className="grid grid-cols-1 gap-6 items-stretch">
                <RankingCard />
            </div>
        </div>
    );
};

export default ProfileRanking;
