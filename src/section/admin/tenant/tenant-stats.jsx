import React from "react";
import { useLocation } from "react-router-dom";
import { TriangleAlert, CircleX, CheckCheck, Ban } from "lucide-react";
import CardOutline from "../../../components/UI/card/CardOutline";

const AdminTenantDashboardStats = () => {
    const location = useLocation();
    const isLaundryPage = location.pathname === "/admin/laundries";

    const stats = [
        {
            id: 1,
            label: "Pending",
            count: 30,
            icon: TriangleAlert,
            color: "text-orange-500",
            borderColor: "border-orange-500",
            background: "linear-gradient(94deg, rgba(249, 115, 22, 0.30) 0.25%, rgba(253, 186, 116, 0.30) 88.23%)"
        },
        {
            id: 2,
            label: "Active",
            count: 30,
            icon: CheckCheck,
            color: "text-green-700",
            borderColor: "border-green-700",
            background: "linear-gradient(94deg, rgba(46, 125, 50, 0.30) 0.25%, rgba(102, 187, 106, 0.30) 88.23%)"
        },
        {
            id: 3,
            label: "Suspended",
            count: 30,
            icon: CircleX,
            color: "text-[#6352A2]",
            borderColor: "border-[#6352A2]",
            background: "#E3DCFF"
        },
        {
            id: 4,
            label: "Blocked",
            count: 30,
            icon: Ban,
            color: "text-red-500",
            borderColor: "border-red-500",
            background: "linear-gradient(94deg, rgba(239, 68, 68, 0.30) 0.25%, rgba(252, 165, 165, 0.30) 88.23%)"

        },
    ];

    const filteredStats = isLaundryPage
        ? stats.filter(s => s.label !== "Suspended")
        : stats;

    const gridCols = isLaundryPage
        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

    return (
        <div className={`grid ${gridCols} gap-4`}>
            {filteredStats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                    <CardOutline border="border-none" bg='bg-bg-light' shadow="shadow-lg" key={stat.id} className="flex flex-col items-center justify-center gap-2 py-6">
                        <div
                            className={`p-3 rounded-full border ${stat.borderColor}`}
                            style={{
                                background: stat.background
                            }}
                        >
                            <IconComponent className={stat.color} size={24} />
                        </div>
                        <h5 className="">{stat.label}</h5>
                        <heading className="">{stat.count}</heading>
                    </CardOutline>
                );
            })}
        </div>
    );
};

export default AdminTenantDashboardStats;
