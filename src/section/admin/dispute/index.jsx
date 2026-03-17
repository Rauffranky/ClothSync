import React, { useState } from "react";
import { Search } from "lucide-react";
import GlobalInput from "../../../components/UI/Form/Input";
import { SmartSelect } from "../../../components/UI/Form/Dropdown";
import DisputeTable from "./dispute-table";
import SocialIcons from "../../../components/UI/SocialIcons";

const IndexDispute = () => {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState(null);

    const statusOptions = [
        { label: "Requested", value: "requested" },
        { label: "Accepted", value: "accepted" },
        { label: "Rejected", value: "rejected" },
    ];

    return (
        <div>
            {/* <h5 className="my-4 font-medium">Disputes</h5> */}
            <div className="flex items-center justify-between">
                <h4 className="font-bold my-4">Disputes</h4>
                <div className="flex gap-2 items-center">
                    <h6>Share your profile:</h6>
                    <SocialIcons />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between my-4">
                <GlobalInput
                    placeholder="Search Laundry Name"
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
                <DisputeTable />
            </div>
        </div>
    );
};

export default IndexDispute;