import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Eye, MessageSquare, Check, X, RefreshCw, Search } from "lucide-react";
import GlobalInput from "../../../components/UI/Form/Input";
import { SmartSelect } from "../../../components/UI/Form/Dropdown";
import StatusChipNew from "../../../components/UI/StatusChipNew";
import { MdBlock } from "react-icons/md";
import DataTable from "../../../components/UI/table";
import Avatar from "../../../components/UI/avatar";
import Button from "../../../components/UI/button";
import Pagination from "../../../components/UI/pagination";

// Modals
import SuspendModal from "../../landing-page/tutor-detail/modals/SuspendModal";
import BlockModal from "../../landing-page/tutor-detail/modals/BlockModal";
import ApproveModal from "../../landing-page/tutor-detail/modals/ApproveModal";

const TutorListings = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState(null);

    // Modal State
    const [selectedTutor, setSelectedTutor] = useState(null);
    const [isApproveOpen, setIsApproveOpen] = useState(false);
    const [isSuspendOpen, setIsSuspendOpen] = useState(false);
    const [isBlockOpen, setIsBlockOpen] = useState(false);

    const statusOptions = [
        { label: "Active", value: "active" },
        { label: "Pending", value: "pending" },
        { label: "Suspended", value: "suspended" },
        { label: "Blocked", value: "blocked" },
    ];

    const columns = [
        {
            header: "Profile Image",
            sorting: true,
            key: "image",
            render: (_, row) => (
                <Avatar src={row.image} alt={row.name} size={40} className="rounded-full" />
            ),
        },
        { header: "Name", key: "name", align: "left", sorting: true },
        { header: "Date Joined", key: "dateJoined" },
        // { header: "DBS", key: "dbs" },
        {
            header: "Status",
            key: "status",
            render: (val) => <StatusChipNew status={val} />,
        },
    ];

    const rows = [
        { id: 101, image: "https://preview.redd.it/amelia-kerr-v0-sw82ln3bwxqb1.jpg?width=1080&crop=smart&auto=webp&s=5618897738ef47c0c5546656483fe2eb855eb6f1", name: "Amelia Kerr", dateJoined: "10/02/2026", dbs: "Pending", status: "Active", },
        { id: 102, image: "https://tse3.mm.bing.net/th/id/OIP.qQwYqaPBeldhc_2gOfp0ugHaFL?pid=Api&h=220&P=0", name: "Babar Azam", dateJoined: "10/02/2026", dbs: "Pending", status: "Active" },
        { id: 103, image: "https://tse2.mm.bing.net/th/id/OIP.2r49UYpVWyWwlm852wK7YAHaEO?pid=Api&h=220&P=0", name: "Mohammad Hafeez", dateJoined: "10/02/2026", dbs: "Pending", status: "Active" },
    ];

    const handleAction = (type, row) => {
        setSelectedTutor(row);
        if (type === 'approve') setIsApproveOpen(true);
        if (type === 'suspend') setIsSuspendOpen(true);
        if (type === 'block') setIsBlockOpen(true);
    };

    const isDashboard = location.pathname.includes('/dashboard');

    return (
        <div className="flex flex-col gap-4">
            {/* Filters Section */}
            {/* Filters Section */}
            {isDashboard ? ( // Conditional render
                <h5 className='font-medium mt-4'>Tutor Listings</h5>
            ) : (
                <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
                    <div className="w-full sm:w-72">
                        <GlobalInput
                            leftIcon={<Search size={18} />}
                            placeholder="Search Tutor Name"
                            value={search}
                            onChange={setSearch}
                            className="bg-white border-gray-200 "
                        />
                    </div>
                    <div className="w-full sm:w-40">
                        <SmartSelect
                            options={statusOptions}
                            value={status}
                            onChange={setStatus}
                            placeholder="Status"
                            width="w-32"
                            rounded="rounded-lg"
                            backgroundColor="bg-white"
                            checkbox={true}
                            triggerClassName="h-11 border-gray-200"
                        />
                    </div>
                </div>
            )}

            {/* Table Section */}
            <div className=" overflow-hidden">
                <DataTable
                    columns={columns}
                    rows={rows}
                    selectable={false}
                    headerBg="bg-white"
                    rowBg="bg-table"
                    rowActions={(row) => (
                        <div className="flex items-center gap-1 justify-center">
                            <Button
                                variant="white"
                                size="sm"
                                leftIcon={<Eye size={16} />}
                                label=""
                                className="!p-1.5 !min-w-0 text-black! border-none"
                                onClick={() => navigate(`/admin/tutor/${row.id}`)}
                            />
                            {row.status !== "Blocked" && (
                                <>
                                    <Button
                                        variant="white"
                                        size="sm"
                                        leftIcon={<MessageSquare size={16} />}
                                        label=""
                                        className="!p-1.5 !min-w-0 text-black! border-none "
                                    />
                                    <Button
                                        variant="white"
                                        size="sm"
                                        leftIcon={<Check size={16} />}
                                        label=""
                                        className="!p-1.5 !min-w-0 text-black! border-none "
                                        onClick={() => handleAction('approve', row)}
                                    />
                                    <Button
                                        variant="white"
                                        size="sm"
                                        leftIcon={<X size={16} />}
                                        label=""
                                        className="!p-1.5 !min-w-0 text-black! border-none "
                                        onClick={() => handleAction('suspend', row)}
                                    />
                                    <Button
                                        variant="white"
                                        size="sm"
                                        leftIcon={<MdBlock size={16} />}
                                        label=""
                                        className="!p-1.5 !min-w-0 text-black! border-none "
                                        onClick={() => handleAction('block', row)}
                                    />
                                </>
                            )}
                        </div>
                    )}
                />
            </div>
            <div className="flex justify-end">
                <Pagination
                    totalItems={7}
                    itemsPerPage={5}
                    currentPage={1}
                    onPageChange={() => { }}
                />
            </div>

            {/* Modals */}
            <ApproveModal
                isOpen={isApproveOpen}
                onClose={() => setIsApproveOpen(false)}
                onApprove={() => console.log("Approved", selectedTutor?.name)}
                name={selectedTutor?.name}
            />

            <SuspendModal
                isOpen={isSuspendOpen}
                onClose={() => setIsSuspendOpen(false)}
                onSuspend={(reason) => console.log("Suspended", selectedTutor?.name, reason)}
            />

            <BlockModal
                isOpen={isBlockOpen}
                onClose={() => setIsBlockOpen(false)}
                onBlock={(reason) => console.log("Blocked", selectedTutor?.name, reason)}
            />
        </div>
    );
};

export default TutorListings;
