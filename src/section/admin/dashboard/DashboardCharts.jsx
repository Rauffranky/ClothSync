import React, { useState } from "react";
import CardOutline from "../../../components/UI/card/CardOutline";
import { SmartSelect } from "../../../components/UI/Form/Dropdown";
import StackedBarChart from "../../../components/UI/charts/StackedBarChart";

const DashboardCharts = () => {
    // State for filters
    const [tenantStatus, setTenantStatus] = useState(null);
    const [tenantPeriod, setTenantPeriod] = useState(null);
    const [laundryStatus, setLaundryStatus] = useState(null);
    const [laundryPeriod, setLaundryPeriod] = useState(null);

    // Filter options
    const statusOptions = [
        { label: "All", value: "all" },
        { label: "Active", value: "active" },
        { label: "Pending", value: "pending" },
        { label: "Suspended", value: "suspended" },
        { label: "Blocked", value: "blocked" },
    ];

    const periodOptions = [
        { label: "week", value: "week" },
        { label: "month", value: "month" },
        { label: "year", value: "year" },
    ];

    // Sample data for Tenants
    const tenantData = [
        { label: "Mon", active: 20, pending: 15, suspended: 10, blocked: 8 },
        { label: "Tue", active: 18, pending: 8, suspended: 6, blocked: 5 },
        { label: "Wed", active: 22, pending: 12, suspended: 8, blocked: 10 },
        { label: "Thu", active: 12, pending: 15, suspended: 10, blocked: 5 },
        { label: "Fri", active: 15, pending: 10, suspended: 8, blocked: 5 },
        { label: "Sat", active: 20, pending: 12, suspended: 10, blocked: 8 },
        { label: "Sun", active: 10, pending: 8, suspended: 5, blocked: 3 },
    ];

    // Sample data for Laundries
    const laundryData = [
        { label: "Mon", active: 25, pending: 12, suspended: 8, blocked: 5 },
        { label: "Tue", active: 18, pending: 10, suspended: 5, blocked: 4 },
        { label: "Wed", active: 20, pending: 15, suspended: 8, blocked: 10 },
        { label: "Thu", active: 15, pending: 10, suspended: 12, blocked: 5 },
        { label: "Fri", active: 18, pending: 10, suspended: 8, blocked: 6 },
        { label: "Sat", active: 20, pending: 12, suspended: 10, blocked: 8 },
        { label: "Sun", active: 8, pending: 6, suspended: 4, blocked: 2 },
    ];

    // Categories and colors
    const categories = [
        { key: "active", label: "Active Tenants" },
        { key: "pending", label: "Pending Tenants" },
        { key: "suspended", label: "Suspended Tenants" },
        { key: "blocked", label: "Blocked Tenants" },
    ];

    const laundryCategories = [
        { key: "active", label: "Active Tenants" },
        { key: "pending", label: "Pending Tenants" },
        { key: "suspended", label: "Suspended Tenants" },
        { key: "blocked", label: "Blocked Tenants" },
    ];

    const colors = {
        active: "#2E7D32",
        pending: "#FF9800",
        suspended: "#673AB7",
        blocked: "#F44336",
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            {/* Total Tenant Chart */}
            <CardOutline border="border-none" shadow="shadow-lg" className="p-6">
                {/* Header with Title and Filters */}
                <div className="flex items-center justify-between mb-6 flex-wrap">
                    <h5 className="">Total Tenant</h5>
                    <div className="flex items-center gap-2">
                        <SmartSelect
                            options={statusOptions}
                            value={tenantStatus}
                            onChange={setTenantStatus}
                            placeholder="Status"
                            width="w-28"
                            rounded="rounded-lg"
                            backgroundColor="bg-gray-100"
                        />
                        <SmartSelect
                            options={periodOptions}
                            value={tenantPeriod}
                            onChange={setTenantPeriod}
                            placeholder="week"
                            width="w-24"
                            rounded="rounded-lg"
                            backgroundColor="bg-gray-100"
                        />
                    </div>
                </div>

                {/* Chart */}
                <StackedBarChart
                    data={tenantData}
                    categories={categories}
                    colors={colors}
                    height={250}
                />
            </CardOutline>

            {/* Total Laundries Chart */}
            <CardOutline border="border-none" shadow="shadow-lg" className="p-6">
                {/* Header with Title and Filters */}
                <div className="flex items-center justify-between mb-6 flex-wrap">
                    <h5 className="">Total Laundries</h5>
                    <div className="flex items-center gap-2">
                        <SmartSelect
                            options={statusOptions}
                            value={laundryStatus}
                            onChange={setLaundryStatus}
                            placeholder="Status"
                            width="w-28"
                            rounded="rounded-lg"
                            backgroundColor="bg-gray-100"
                        />
                        <SmartSelect
                            options={periodOptions}
                            value={laundryPeriod}
                            onChange={setLaundryPeriod}
                            placeholder="week"
                            width="w-24"
                            rounded="rounded-lg"
                            backgroundColor="bg-gray-100"
                        />
                    </div>
                </div>

                {/* Chart */}
                <StackedBarChart
                    data={laundryData}
                    categories={laundryCategories}
                    colors={colors}
                    height={250}
                />
            </CardOutline>
        </div>
    );
};

export default DashboardCharts;
