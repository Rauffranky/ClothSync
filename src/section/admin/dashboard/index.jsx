import React from "react";
import AdminDashboardStats from "./DashboardStats";
import DashboardCharts from "./DashboardCharts";
import RevenueChart from "./RevenueChart";
import TransactionsTable from "./TransactionsTable";
import TenantListings from "./TenantListings";

const AdminDashboard = () => {
    return (
        <div className="flex flex-col gap-6">
            <h4 className="font-bold mt-5">Dashboard</h4>

            {/* Stats Section */}
            <AdminDashboardStats />

            {/* Charts Section */}
            <DashboardCharts />

            {/* Revenue Chart Section */}
            <RevenueChart />

            {/* Tenant Listings Section */}
            <TenantListings />

            {/* Transactions Table */}
            <TransactionsTable />
        </div>
    );
};

export default AdminDashboard;
