import React, { useState } from "react";
import { format, addDays, subDays, startOfWeek, endOfWeek } from "date-fns";
import CardOutline from "../../../components/UI/card/CardOutline";
import { SmartSelect } from "../../../components/UI/Form/Dropdown";
import DateNavigation from "../../../components/UI/DateNavigation";
import ProgressBar from "./ProgressBar";

const Reports = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [period, setPeriod] = useState("week");

    const handlePrevPeriod = () => {
        setCurrentDate((prev) => subDays(prev, 7));
    };

    const handleNextPeriod = () => {
        setCurrentDate((prev) => addDays(prev, 7));
    };

    const getDateRangeString = (date) => {
        const start = startOfWeek(date, { weekStartsOn: 1 });
        const end = endOfWeek(date, { weekStartsOn: 1 });

        const month = format(start, "MMMM yyyy");
        const dayStart = format(start, "d");
        const dayEnd = format(end, "do");

        return `${month}, ${dayStart}-${dayEnd}`;
    };

    const periodOptions = [
        { label: "Week", value: "week" },
        { label: "Month", value: "month" },
        { label: "Year", value: "year" },
    ];

    return (
        <CardOutline className="p-6 bg-white rounded-[20px]! border-none shadow-sm">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <DateNavigation
                    title={getDateRangeString(currentDate)}
                    onPrev={handlePrevPeriod}
                    onNext={handleNextPeriod}
                />
                <div className="w-32">
                    <SmartSelect
                        options={periodOptions}
                        value={period}
                        onChange={setPeriod}
                        placeholder="Period"
                        width="w-full"
                        rounded="rounded-lg"
                        backgroundColor="bg-[#F4F7FE]"
                    />
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-bold text-[#1B2559]">Cashflow</h3>
            </div>

            {/* Bars */}
            <div className="flex flex-col gap-8">
                <ProgressBar
                    label="Total Income"
                    value="£84,300"
                    color="bg-[#6352A2]" // Purple
                    bgColor="bg-[#4318FF]/10"
                    fillPercent={40}
                />
                <ProgressBar
                    label="Total Payout"
                    value="£84,300"
                    color="bg-[#DA944B]" // Orange/Yellow
                    bgColor="bg-[#F59E0B]/10"
                    fillPercent={40}
                />
                <ProgressBar
                    label="Accrued Payout"
                    value="£84,300"
                    color="bg-[#EAC251]" // Lighter Yellow
                    bgColor="bg-[#FACC15]/10"
                    fillPercent={40}
                />
                <ProgressBar
                    label="Net Profit"
                    value="£84,300"
                    color="bg-[#469A30]" // Green
                    bgColor="bg-[#BBF1AD]"
                    fillPercent={40}
                />
            </div>
        </CardOutline>
    );
};

export default Reports;
