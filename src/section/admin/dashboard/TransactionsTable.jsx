import React, { useState } from "react";
import { CheckCheck, MoreHorizontal } from "lucide-react";
import StatusChipNew from "../../../components/UI/StatusChipNew";
import DataTable from "../../../components/UI/table";
import Pagination from "../../../components/UI/pagination";
import DropdownMenuItem from "../../../components/UI/dropdown";
import { icon } from "leaflet";

const ActionMenu = ({ row }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    if (row.status === "Paid") {
        return (
            <button className="p-2 text-gray-300 cursor-not-allowed" disabled>
                <MoreHorizontal size={20} />
            </button>
        );
    }

    // Only show dropdown for "Pending" (or other statuses if needed)
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
                className="w-fit"
                items={[
                    {
                        id: "release",
                        label: "Release Payout",
                        icon: <CheckCheck size={20} />,
                        onClick: () => console.log("Release payout for", row.id),
                    }
                ]}
            />
        </>
    );
};

const TransactionsTable = () => {
    const columns = [
        { header: "Order ID", key: "order", align: "left", sorting: true },
        { header: "Tutor", key: "tutor", align: "left" },
        { header: "Cashflow", key: "cashflow", align: "left" },
        { header: "Amount", key: "amount", align: "left" },
        {
            header: "Status",
            key: "status",
            render: (val) => <StatusChipNew status={val} />,
        },
    ];

    const rows = [
        { id: 1, order: "#10001", tutor: "Alex Jones", cashflow: "Payout", amount: "£100", status: "Paid" },
        { id: 2, order: "#10002", tutor: "Alex Jones", cashflow: "Payout", amount: "£100", status: "Pending" },
        { id: 3, order: "#10003", tutor: "Alex Jones", cashflow: "Payout", amount: "£100", status: "Paid" },
        { id: 4, order: "#10004", tutor: "Alex Jones", cashflow: "Payout", amount: "£100", status: "Pending" },
        { id: 5, order: "#10005", tutor: "Alex Jones", cashflow: "Payout", amount: "£100", status: "Paid" },
        { id: 6, order: "#10006", tutor: "Alex Jones", cashflow: "Payout", amount: "£100", status: "Pending" },
        { id: 7, order: "#10007", tutor: "Alex Jones", cashflow: "Payout", amount: "£100", status: "Paid" },
        { id: 8, order: "#10008", tutor: "Alex Jones", cashflow: "Payout", amount: "£100", status: "Pending" },
        { id: 9, order: "#10009", tutor: "Alex Jones", cashflow: "Payout", amount: "£100", status: "Paid" },
    ];

    return (
        <div className="mt-8">
            <h5 className="mb-4 font-medium">Transactions</h5>
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

export default TransactionsTable;
