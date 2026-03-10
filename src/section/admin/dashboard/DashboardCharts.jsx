import React, { useState } from "react";
import CardOutline from "../../../components/UI/card/CardOutline";
import { SmartSelect } from "../../../components/UI/Form/Dropdown";
import StackedBarChart from "../../../components/UI/charts/StackedBarChart";

const DashboardCharts = () => {
    // State for filters
    const [tutorStatus, setTutorStatus] = useState(null);
    const [tutorPeriod, setTutorPeriod] = useState(null);
    const [parentStatus, setParentStatus] = useState(null);
    const [parentPeriod, setParentPeriod] = useState(null);

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

    // Sample data for Tutors
    const tutorData = [
        { label: "Mon", active: 20, pending: 15, suspended: 10, blocked: 8 },
        { label: "Tue", active: 18, pending: 8, suspended: 6, blocked: 5 },
        { label: "Wed", active: 22, pending: 12, suspended: 8, blocked: 10 },
        { label: "Thu", active: 12, pending: 15, suspended: 10, blocked: 5 },
        { label: "Fri", active: 15, pending: 10, suspended: 8, blocked: 5 },
        { label: "Sat", active: 20, pending: 12, suspended: 10, blocked: 8 },
        { label: "Sun", active: 10, pending: 8, suspended: 5, blocked: 3 },
    ];

    // Sample data for Parents
    const parentData = [
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
        { key: "active", label: "Active Tutors" },
        { key: "pending", label: "Pending Tutors" },
        { key: "suspended", label: "Suspended Tutors" },
        { key: "blocked", label: "Blocked Tutors" },
    ];

    const parentCategories = [
        { key: "active", label: "Active Tutors" },
        { key: "pending", label: "Pending Tutors" },
        { key: "suspended", label: "Suspended Tutors" },
        { key: "blocked", label: "Blocked Tutors" },
    ];

    const colors = {
        active: "#2E7D32",
        pending: "#FF9800",
        suspended: "#673AB7",
        blocked: "#F44336",
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            {/* Total Tutor Chart */}
            <CardOutline border="border-none" shadow="shadow-lg" className="p-6">
                {/* Header with Title and Filters */}
                <div className="flex items-center justify-between mb-6 flex-wrap">
                    <h5 className="">Total Tutor</h5>
                    <div className="flex items-center gap-2">
                        <SmartSelect
                            options={statusOptions}
                            value={tutorStatus}
                            onChange={setTutorStatus}
                            placeholder="Status"
                            width="w-28"
                            rounded="rounded-lg"
                            backgroundColor="bg-gray-100"
                        />
                        <SmartSelect
                            options={periodOptions}
                            value={tutorPeriod}
                            onChange={setTutorPeriod}
                            placeholder="week"
                            width="w-24"
                            rounded="rounded-lg"
                            backgroundColor="bg-gray-100"
                        />
                    </div>
                </div>

                {/* Chart */}
                <StackedBarChart
                    data={tutorData}
                    categories={categories}
                    colors={colors}
                    height={250}
                />
            </CardOutline>

            {/* Total Parents Chart */}
            <CardOutline border="border-none" shadow="shadow-lg" className="p-6">
                {/* Header with Title and Filters */}
                <div className="flex items-center justify-between mb-6 flex-wrap">
                    <h5 className="">Total Parents</h5>
                    <div className="flex items-center gap-2">
                        <SmartSelect
                            options={statusOptions}
                            value={parentStatus}
                            onChange={setParentStatus}
                            placeholder="Status"
                            width="w-28"
                            rounded="rounded-lg"
                            backgroundColor="bg-gray-100"
                        />
                        <SmartSelect
                            options={periodOptions}
                            value={parentPeriod}
                            onChange={setParentPeriod}
                            placeholder="week"
                            width="w-24"
                            rounded="rounded-lg"
                            backgroundColor="bg-gray-100"
                        />
                    </div>
                </div>

                {/* Chart */}
                <StackedBarChart
                    data={parentData}
                    categories={parentCategories}
                    colors={colors}
                    height={250}
                />
            </CardOutline>
        </div>
    );
};

export default DashboardCharts;
