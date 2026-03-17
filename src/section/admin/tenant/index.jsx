import React from "react";
import TenantListings from "../dashboard/TenantListings";
import AdminTenantDashboardStats from "./tenant-stats";

const TenantAdmin = () => {
    return (
        <div className="flex flex-col gap-6">
            <h4 className="font-bold mt-5">Tenant</h4>

            {/* Stats Section */}
            <AdminTenantDashboardStats />
            {/* Tenant Listings Section */}
            <TenantListings />
        </div>
    );
};

export default TenantAdmin;
