import React from "react";
import { AlertCircle, Hourglass, CircleCheckBig } from "lucide-react";

// Status badge component - matches exact design
const StatusBadge = ({ status }) => {
    const statusConfig = {
        "In Dispute": {
            text: "text-[#1E1E1E]",
            icon: <AlertCircle size={18} className="text-[#F59E0B]" fill="#FEF3C7" />,
        },
        "Clearing": {
            text: "text-[#1E1E1E]",
            icon: <Hourglass size={18} className="text-[#65A30D]" />,
        },
        "Completed": {
            text: "text-[#1E1E1E]",
            icon: <CircleCheckBig size={18} className="text-[#22C55E]" />,
        },
    };

    const config = statusConfig[status] || statusConfig["Completed"];

    return (
        <div className="inline-flex items-center gap-2">
            {config.icon}
            <span className={`text-[14px] ${config.text}`}>{status}</span>
        </div>
    );
};

export const paymentColumns = [
    {
        key: "lessonDate",
        header: "Lesson Date",
        render: (val) => <span className="text-[14px] whitespace-nowrap">{val}</span>,
    },
    {
        key: "detail",
        header: "Detail",
        render: (val) => <span className="text-[14px]">{val}</span>,
    },
    {
        key: "lessonRate",
        header: "Lesson Rate",
        render: (val) => <span className="text-[14px]">£{val}</span>,
    },
    {
        key: "commission",
        header: (
            <span className="flex items-center gap-1">
                Commission
                <span className="text-[10px] text-gray-400 cursor-help" title="Platform fee">ⓘ</span>
            </span>
        ),
        render: (val) => <span className="text-[14px] text-red-500">-£{val}</span>,
    },
    {
        key: "amount",
        header: "Amount",
        render: (val) => <span className="text-[14px] font-medium">£{val}</span>,
    },
    {
        key: "status",
        header: "Status",
        render: (val) => <StatusBadge status={val} />,
    },
    {
        key: "clearedDate",
        header: "Cleared Date",
        render: (val) => <span className="text-[14px] whitespace-nowrap">{val}</span>,
    },
    {
        key: "withdrawnDate",
        header: "Withdrawn Date",
        render: (val) => <span className="text-[14px] whitespace-nowrap">{val}</span>,
    },
];

export const mockPayments = [
    {
        id: 1,
        lessonDate: "02/09/2025",
        detail: "Math-Lincoln Jones 14:00-15:00",
        lessonRate: "35.00",
        commission: "7.00",
        amount: "28.00",
        status: "In Dispute",
        clearedDate: "02/09/2025",
        withdrawnDate: "02/09/2025",
    },
    {
        id: 2,
        lessonDate: "02/09/2025",
        detail: "Math-Lincoln Jones 14:00-15:00",
        lessonRate: "35.00",
        commission: "7.00",
        amount: "28.00",
        status: "Clearing",
        clearedDate: "02/09/2025",
        withdrawnDate: "02/09/2025",
    },
    {
        id: 3,
        lessonDate: "02/09/2025",
        detail: "Math-Lincoln Jones 14:00-15:00",
        lessonRate: "35.00",
        commission: "7.00",
        amount: "28.00",
        status: "Completed",
        clearedDate: "02/09/2025",
        withdrawnDate: "02/09/2025",
    },
    {
        id: 4,
        lessonDate: "02/09/2025",
        detail: "Physics-Sarah Smith 10:00-11:00",
        lessonRate: "40.00",
        commission: "8.00",
        amount: "32.00",
        status: "Completed",
        clearedDate: "02/09/2025",
        withdrawnDate: "02/09/2025",
    },
    {
        id: 5,
        lessonDate: "03/09/2025",
        detail: "English-Emma Wilson 09:00-10:00",
        lessonRate: "30.00",
        commission: "6.00",
        amount: "24.00",
        status: "Clearing",
        clearedDate: "03/09/2025",
        withdrawnDate: "-",
    },
];

export default StatusBadge;
