import React, { useState } from "react";
import { Calendar, FileText, FileSpreadsheet } from "lucide-react";
import Button from "../../../components/UI/button";
import { SmartSelect } from "../../../components/UI/Form/Dropdown";
import CardOutline from "../../../components/UI/card/CardOutline";

const PaymentFilters = ({
    onFilterChange,
    onExportCSV,
    onExportPDF
}) => {
    const [transactionType, setTransactionType] = useState("all");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    const transactionOptions = [
        { value: "all", label: "All Transaction" },
        { value: "completed", label: "Completed" },
        { value: "clearing", label: "Clearing" },
        { value: "dispute", label: "In Dispute" },
    ];

    const handleTransactionChange = (value) => {
        setTransactionType(value);
        onFilterChange?.({ transactionType: value, fromDate, toDate });
    };

    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 w-full">
            {/* Left side - Filters */}
            <div className="flex flex-wrap items-center gap-3">
                {/* Transaction Type Dropdown - Using Global SmartSelect */}
                <SmartSelect
                    options={transactionOptions}
                    value={transactionType}
                    onChange={handleTransactionChange}
                    placeholder="All Transaction"
                    width="w-[180px]"
                    backgroundColor="bg-white"
                    rounded="rounded-lg"
                    triggerClassName="!border-border !py-2.5"
                />

                {/* From Date - Styled CardOutline */}
                <CardOutline
                    border="border border-border"
                    padding="px-3 py-2"
                    shadow=""
                    rounded="rounded-lg"
                    className="flex items-center gap-2 cursor-pointer hover:border-primary transition-colors"
                >
                    <input
                        type="date"
                        placeholder="From"
                        value={fromDate}
                        onChange={(e) => {
                            setFromDate(e.target.value);
                            onFilterChange?.({ transactionType, fromDate: e.target.value, toDate });
                        }}
                        className="bg-translaundry text-[14px] text-[#374151] w-[100px] focus:outline-none cursor-pointer"
                    />
                    {/* <Calendar className="text-[#6B7280]" size={16} /> */}
                </CardOutline>

                {/* To Date - Styled CardOutline */}
                <CardOutline
                    border="border border-border"
                    padding="px-3 py-2"
                    shadow=""
                    rounded="rounded-lg"
                    className="flex items-center gap-2 cursor-pointer hover:border-primary transition-colors"
                >
                    <input
                        type="date"
                        placeholder="To"
                        value={toDate}
                        onChange={(e) => {
                            setToDate(e.target.value);
                            onFilterChange?.({ transactionType, fromDate, toDate: e.target.value });
                        }}
                        className="bg-translaundry text-[14px] text-[#374151] w-[100px] focus:outline-none cursor-pointer"
                    />
                    {/* <Calendar className="text-[#6B7280]" size={16} /> */}
                </CardOutline>
            </div>

            {/* Right side - Export Buttons - Using Global Button with white variant */}
            <div className="flex items-center gap-2">
                <Button
                    label="CSV"
                    variant="white"
                    size="sm"
                    leftIcon={<FileSpreadsheet size={16} className="text-primary" />}
                    onClick={onExportCSV}
                />
                <Button
                    label="PDF"
                    variant="white"
                    size="sm"
                    leftIcon={<FileText size={16} className="text-red-500" />}
                    onClick={onExportPDF}
                />
            </div>
        </div>
    );
};

export default PaymentFilters;
