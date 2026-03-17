import React, { useState } from "react";
import { Search } from "lucide-react";
import TransactionsTable from "../dashboard/TransactionsTable";
import GlobalInput from "../../../components/UI/Form/Input";
import { SmartSelect } from "../../../components/UI/Form/Dropdown";

const PaymentTable = () => {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState(null);

    const statusOptions = [
        { label: "Paid", value: "paid" },
        { label: "Pending", value: "pending" },
    ];

    return (
        <div>
            <h5 className="my-4 font-medium">Payment</h5>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between my-4">
                <GlobalInput
                    placeholder="Search Tenant Name"
                    value={search}
                    onChange={setSearch}
                    leftIcon={<Search size={18} className="text-gray-400" />}
                    className="max-w-xs"
                />

                <div className="flex items-center gap-3">
                    <SmartSelect
                        options={statusOptions}
                        value={status}
                        onChange={setStatus}
                        placeholder="Status"
                        width="w-32"
                        rounded="rounded-lg"
                        backgroundColor="bg-white"
                    />
                </div>
            </div>

            <div>
                <TransactionsTable />
            </div>
        </div>
    );
};

export default PaymentTable;