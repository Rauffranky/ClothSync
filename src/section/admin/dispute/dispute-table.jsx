import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MoreHorizontal, Eye, Mail, MessageSquare, CheckCircle } from "lucide-react";
import StatusChipNew from "../../../components/UI/StatusChipNew";
import DataTable from "../../../components/UI/table";
import Pagination from "../../../components/UI/pagination";
import DropdownMenuItem from "../../../components/UI/dropdown";

const ActionMenu = ({ row }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    return (
        <>
            <button
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                onClick={(e) => setAnchorEl(e.currentTarget)}
            >
                <MoreHorizontal size={20} />
            </button>

            <DropdownMenuItem
                anchorEl={anchorEl}
                closeDropdown={() => setAnchorEl(null)}
                title=""
                className="w-56 !bg-white/80 backdrop-blur-md !border-white/50"
                items={[
                    {
                        id: "view",
                        label: "View Dispute",
                        icon: <Eye size={18} />,
                        onClick: () => navigate(`/admin/disputes/${row.id}`, { state: row }),
                    },
                    {
                        id: "msg_parent",
                        label: "Parent",
                        icon: <Mail size={18} />,
                        onClick: () => console.log("Message Parent", row.parent),
                    },
                    {
                        id: "msg_tutor",
                        label: "Tutor",
                        icon: <Mail size={18} />,
                        onClick: () => console.log("Message Tutor", row.tutor),
                    },
                    {
                        id: "resolve",
                        label: "Mark as resolved",
                        icon: <CheckCircle size={18} />,
                        onClick: () => console.log("Mark as resolved", row.id),
                    }
                ]}
            />
        </>
    );
};

const DisputeTable = () => {
    const columns = [
        { header: "Date", key: "date", align: "left", sorting: true },
        { header: "Case", key: "case", align: "left", sorting: true },
        { header: "Tutor", key: "tutor", align: "left" },
        { header: "Parent", key: "parent", align: "left" },
        {
            header: "Status",
            key: "status",
            render: (val) => <StatusChipNew status={val} />,
        },
    ];

    const rows = [
        { id: 1, date: "10/02/2026", case: "#00012", tutor: "A James", parent: "O Stone", status: "Requested" },
        { id: 2, date: "10/02/2026", case: "#00012", tutor: "A James", parent: "O Stone", status: "Requested" },
        { id: 3, date: "10/02/2026", case: "#00012", tutor: "A James", parent: "O Stone", status: "Requested" },
        { id: 4, date: "10/02/2026", case: "#00012", tutor: "A James", parent: "O Stone", status: "Accepted" },
        { id: 5, date: "10/02/2026", case: "#00012", tutor: "A James", parent: "O Stone", status: "Accepted" },
        { id: 6, date: "10/02/2026", case: "#00012", tutor: "A James", parent: "O Stone", status: "Rejected" },
        { id: 7, date: "10/02/2026", case: "#00012", tutor: "A James", parent: "O Stone", status: "Requested" },
        { id: 8, date: "10/02/2026", case: "#00012", tutor: "A James", parent: "O Stone", status: "Requested" },
        { id: 9, date: "10/02/2026", case: "#00012", tutor: "A James", parent: "O Stone", status: "Requested" },
    ];

    return (
        <div className="mt-8">
            <div className="overflow-hidden">
                <DataTable
                    columns={columns}
                    rows={rows}
                    selectable={false}
                    headerBg="bg-white"
                    rowBg="bg-table"
                    rowActions={(row) => <ActionMenu row={row} />}
                />
            </div>
            <div className="flex justify-end mt-4">
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

export default DisputeTable;
