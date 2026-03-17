import React from "react";
import Table, { DataTable } from "../../../../components/UI/table";
import StatusChipNew from "../../../../components/UI/StatusChipNew";
import Pagination from "../../../../components/UI/pagination";

const TransactionTable = () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const columns = [
        {
            header: "Transaction ID",
            key: "transactionId",
            sorting: true,
            align: "left",
        },
        {
            header: "Order ID",
            key: "orderId",
            sorting: true,
            align: "left",
        },
        {
            header: "Date",
            key: "date",
            align: "left",
        },
        {
            header: "Lesson ID",
            key: "lessonId",
            sorting: true,
            align: "left",
        },
        {
            header: "Status",
            key: "status",
            render: (status) => <StatusChipNew status={status} />,
            align: "center",
            width: "140px",
        },
        {
            header: "Amount",
            key: "amount",
            align: "center",
        },
        {
            header: "Commission",
            key: "commission",
            render: (value) => (
                <span className="text-red-500">
                    {value}
                </span>
            ),
            align: "center",
        },
        {
            header: "Total Amount",
            key: "totalAmount",
            align: "right",
        },
    ];

    const data = [
        {
            id: 1,
            transactionId: "TID1212212",
            orderId: "OR121321",
            date: "02/09/2025",
            lessonId: "#122424",
            status: "Complete",
            amount: "£35.00",
            commission: "£7.00",
            totalAmount: "£42.00",
        },
        {
            id: 2,
            transactionId: "TID1212212",
            orderId: "OR121321",
            date: "02/09/2025",
            lessonId: "#122424",
            status: "Complete",
            amount: "£35.00",
            commission: "£7.00",
            totalAmount: "£42.00",
        },
        {
            id: 3,
            transactionId: "TID1212212",
            orderId: "OR121321",
            date: "02/09/2025",
            lessonId: "#122424",
            status: "Complete",
            amount: "£35.00",
            commission: "£7.00",
            totalAmount: "£42.00",
        },
        {
            id: 4,
            transactionId: "TID1212212",
            orderId: "OR121321",
            date: "02/09/2025",
            lessonId: "#122424",
            status: "Complete",
            amount: "£35.00",
            commission: "£7.00",
            totalAmount: "£42.00",
        },
        {
            id: 5,
            transactionId: "TID1212212",
            orderId: "OR121321",
            date: "02/09/2025",
            lessonId: "#122424",
            status: "Refund",
            amount: "£35.00",
            commission: "N/A",
            totalAmount: "£42.00",
        },
        {
            id: 6,
            transactionId: "TID1212212",
            orderId: "OR121321",
            date: "02/09/2025",
            lessonId: "#122424",
            status: "Failed",
            amount: "£35.00",
            commission: "£7.00",
            totalAmount: "£42.00",
        },
    ];

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#1E1E1E]">Transaction History</h3>
            <DataTable columns={columns} rows={data} />
            <div className="flex justify-end mt-4">
                <Pagination
                    totalItems={50} // Mock total for demonstration
                    itemsPerPage={6} // Matching data length
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default TransactionTable;
