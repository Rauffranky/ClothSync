import React from "react";
import AdminDashboard from "../../section/admin/dashboard";

import { Helmet } from "@dr.pogodin/react-helmet";

const AdminDashboardPage = () => {
    return (
        <div className="flex flex-col gap-6">
            <Helmet>
                <title>Admin Dashboard | Tuition Farm</title>
                <meta name="description" content="Admin Dashboard" />
            </Helmet>
            <AdminDashboard />
        </div>
    );
};

export default AdminDashboardPage;
