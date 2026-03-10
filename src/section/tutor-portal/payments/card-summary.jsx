import React from "react";
import { Banknote, DollarSign, Clock } from "lucide-react";
import CardOutline from "../../../components/UI/card/CardOutline";

const PaymentStats = () => {
    const stats = [
        {
            id: 1,
            label: "Total Earnings",
            value: "£2,130",
            icon: <Banknote className="text-[#2E7D32]" size={24} />,
            bgColor: "bg-[linear-gradient(94deg,rgba(46,125,50,0.30)_0.25%,rgba(102,187,106,0.30)_88.23%)]",
        },
        {
            id: 2,
            label: "Pending Bookings",
            value: "£1,250",
            icon: <Banknote className="text-[#2E7D32]" size={24} />,
            bgColor: "bg-[linear-gradient(94deg,rgba(46,125,50,0.30)_0.25%,rgba(102,187,106,0.30)_88.23%)]",
        },
        {
            id: 3,
            label: "Available For Withdrawal",
            value: "£880",
            icon: <DollarSign className="text-[#2E7D32]" size={24} />,
            bgColor: "bg-[linear-gradient(94deg,rgba(46,125,50,0.30)_0.25%,rgba(102,187,106,0.30)_88.23%)]",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((stat) => (
                <CardOutline
                    key={stat.id}
                    className="flex flex-col items-center py-6 px-4 text-center"
                    bg="bg-white"
                    border="border border-[#E5E7EB]"
                    shadow="shadow-sm"
                    rounded="rounded-xl"
                >
                    {/* Icon Container */}
                    <div className={`p-3 rounded-full border border-primary ${stat.bgColor} mb-3`}>
                        {stat.icon}
                    </div>

                    {/* Label */}
                    <span className="text-gray-500 text-[13px] font-medium mb-2">
                        {stat.label}
                    </span>

                    {/* Value */}
                    <h2 className="text-[28px] font-bold text-[#1E1E1E]">
                        {stat.value}
                    </h2>
                </CardOutline>
            ))}
        </div>
    );
};

export default PaymentStats;
