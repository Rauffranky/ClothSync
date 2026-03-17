import React, { useState } from "react";
import CardOutline from "../../../../components/UI/card/CardOutline";
import DataTable from "../../../../components/UI/table";
import Pagination from "../../../../components/UI/pagination";

const RankingCard = () => {
    const [selectedId, setSelectedId] = useState(null); // No permanent select for now

    const columns = [
        {
            header: "Level",
            key: "level",
            align: "center",
            width: "80px",
        },
        {
            header: "Tenant Name",
            key: "tenantName",
            render: (val, row) => (
                <div className="flex items-center gap-3">
                    <img
                        src={row.avatar || "https://tse4.mm.bing.net/th/id/OIP.TebsFTpqgM_Wm6uOIt9pEwHaFj?pid=Api&h=220&P=0"}
                        alt={val}
                        className="w-10 h-10 rounded-full object-cover border border-white/20"
                    />
                    <span className="font-medium whitespace-nowrap">{val}</span>
                </div>
            ),
        },
        {
            header: "Badge Name",
            key: "badgeName",
            render: (val) => <span className="whitespace-nowrap">{val}</span>,
        },
        {
            header: "Lessons Completed",
            key: "lessonsCompleted",
            align: "center",
        },
        {
            header: "Minimum No. of Reviews",
            key: "minReviews",
            align: "center",
        },
        {
            header: "Minimum Average Rating",
            key: "minRating",
            align: "center",
        },
    ];

    const data = [
        { id: 1, level: 1, tenantName: "Mrs. Alexa", badgeName: "New Tenant", lessonsCompleted: 0, minReviews: 0, minRating: 0 },
        { id: 2, level: 2, tenantName: "Mrs. Joyce", badgeName: "Rising Star", lessonsCompleted: 25, minReviews: 25, minRating: 4.8 },
        { id: 3, level: 3, tenantName: "Mr. Hooper", badgeName: "Highly Rated", lessonsCompleted: 50, minReviews: 50, minRating: 4.8 },
        { id: 4, level: 4, tenantName: "Mrs. Nancy", badgeName: "Trusted Tenant", lessonsCompleted: 150, minReviews: 75, minRating: 4.8 },
        { id: 5, level: 5, tenantName: "Mrs. Nancy", badgeName: "Top Tenant", lessonsCompleted: 250, minReviews: 125, minRating: 4.8 },
        { id: 6, level: 6, tenantName: "Mrs. Alexa", badgeName: "Star Tenant", lessonsCompleted: 500, minReviews: 250, minRating: 4.8 },
        { id: 7, level: 7, tenantName: "Pro Tenant", badgeName: "Pro Tenant", lessonsCompleted: 1000, minReviews: 500, minRating: 4.8 },
        { id: 8, level: 8, tenantName: "Master Tenant", badgeName: "Master Tenant", lessonsCompleted: 1500, minReviews: 750, minRating: 4.8 },
        { id: 9, level: 9, tenantName: "Elite Tenant", badgeName: "Elite Tenant", lessonsCompleted: 2000, minReviews: 1000, minRating: 4.8 },
    ];

    const currentStatusRow = {
        id: "current",
        level: 2,
        tenantName: "Tenant Name",
        badgeName: "Rising Star",
        lessonsCompleted: "27/25",
        minReviews: "26/25",
        minRating: "4.8",
        isCurrentStatus: true,
    };

    return (
        <div>
            <div className="p-6 pb-2">
                <h5 className="font-semibold text-[18px]">Ranking Overview</h5>
            </div>

            <div className="mt-2 overflow-x-auto">
                <DataTable
                    columns={columns}
                    rows={data}
                    selectable={false}
                    onRowClick={(row) => setSelectedId(row.id)}
                    headerBg="bg-white border-b border-[#EDEDED]"
                    rowClassName={(row) => {
                        const isSelected = row.id === selectedId;
                        return `
                            ${isSelected
                                ? "!bg-[linear-gradient(96deg,#2E7D32_0.45%,#66BB6A_75.9%)] !text-white"
                                : "bg-[#EDEDED] hover:!bg-[#DFE7D4] text-[#1E1E1E]"}
                            border-b border-white last:border-none transition-all cursor-pointer
                        `;
                    }}
                />
            </div>
            <div className="flex justify-end p-4 pt-0">
                <Pagination
                    totalItems={9}
                    itemsPerPage={5}
                    currentPage={1}
                    onPageChange={() => { }}
                />
            </div>
        </div>
    );
};

export default RankingCard;
