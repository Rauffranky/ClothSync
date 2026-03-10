import React from "react";
import TutorListings from "../dashboard/TutorListings";
import AdminTutorDashboardStats from "./tutor-stats";

const TutorAdmin = () => {
    return (
        <div className="flex flex-col gap-6">
            <h4 className="font-bold mt-5">Tutor</h4>

            {/* Stats Section */}
            <AdminTutorDashboardStats />
            {/* Tutor Listings Section */}
            <TutorListings />
        </div>
    );
};

export default TutorAdmin;
