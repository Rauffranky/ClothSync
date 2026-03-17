import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, X, Eye, MessageSquare, Search } from "lucide-react";
import GlobalInput from "../../../components/UI/Form/Input";
import { SmartSelect } from "../../../components/UI/Form/Dropdown";
import { MdBlock } from "react-icons/md";
import StatusChipNew from "../../../components/UI/StatusChipNew";
import DataTable from "../../../components/UI/table";
import Pagination from "../../../components/UI/pagination";
import Button from "../../../components/UI/button";

// Modals
import SuspendModal from "../../landing-page/tenant-detail/modals/SuspendModal";
import BlockModal from "../../landing-page/tenant-detail/modals/BlockModal";
import ApproveModal from "../../landing-page/tenant-detail/modals/ApproveModal";

const ActionsElement = ({ row, onAction }) => {
    // Navigate hook needs to be used inside a component or passed down. 
    // Assuming onAction handles navigation or we use a simple Link logic? 
    // The previous TenantListings used navigate(). We can pass navigate from laundry if needed, 
    // or just let onAction handle it.

    return (
        <div className="flex items-center gap-1 justify-center">
            {/* Common: View Profile */}
            <Button
                variant="white"
                size="sm"
                leftIcon={<Eye size={16} />}
                label=""
                className="!p-1.5 !min-w-0 text-black! border-none"
                onClick={() => onAction('view', row)}
            />

            {row.status === "Pending" && (
                <>
                    {/* Message (Optional for Pending? usually not, but let's keep it minimal if not requested, user said 'pending mein sab show hoon gaye') */}
                    {/* Actually user said "active mein eye, message, block... pending mein sab" */}

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
                        onClick={() => onAction('approve', row)}
                    />
                    <Button
                        variant="white"
                        size="sm"
                        leftIcon={<X size={16} />}
                        label=""
                        className="!p-1.5 !min-w-0 text-black! border-none "
                        onClick={() => onAction('suspend', row)}
                    />
                    <Button
                        variant="white"
                        size="sm"
                        leftIcon={<MdBlock size={16} />}
                        label=""
                        className="!p-1.5 !min-w-0 text-black! border-none "
                        onClick={() => onAction('block', row)}
                    />
                </>
            )}

            {row.status === "Active" && (
                <>
                    <Button
                        variant="white"
                        size="sm"
                        leftIcon={<MessageSquare size={16} />}
                        label=""
                        className="!p-1.5 !min-w-0 text-black! border-none "
                    />
                    {/* User asked for Block in Active too */}
                    <Button
                        variant="white"
                        size="sm"
                        leftIcon={<MdBlock size={16} />}
                        label=""
                        className="!p-1.5 !min-w-0 text-black! border-none "
                        onClick={() => onAction('block', row)}
                    />
                </>
            )}
        </div>
    );
};

const LaundryTable = () => {
    // Modal State
    const [selectedRow, setSelectedRow] = useState(null);
    const [isApproveOpen, setIsApproveOpen] = useState(false);
    const [isSuspendOpen, setIsSuspendOpen] = useState(false);
    const [isBlockOpen, setIsBlockOpen] = useState(false);
    const navigate = useNavigate();

    const handleAction = (type, row) => {
        if (type === 'view') {
            const slug = row.name.toLowerCase().replace(/\s+/g, '-') + '-' + row.id;
            navigate(`/admin/laundries/${slug}`, { state: row });
            return;
        }
        setSelectedRow(row);
        if (type === 'approve') setIsApproveOpen(true);
        if (type === 'suspend') setIsSuspendOpen(true);
        if (type === 'block') setIsBlockOpen(true);
    };

    const columns = [
        { header: "Date joined", key: "date", align: "left", sorting: true },
        { header: "Name", key: "name", align: "left" },
        { header: "Email", key: "email", align: "left" },
        { header: "Phone Number", key: "phone", align: "left" },
        {
            header: "Status",
            key: "status",
            render: (val) => <StatusChipNew status={val} />,
        },
    ];

    const rows = [
        { id: 1, date: "10/02/2026", name: "Alex Jones", email: "alex.jones@gmail.com", phone: "1234567890", status: "Active" },
        { id: 2, date: "10/02/2026", name: "Alex Jones", email: "alex.jones@gmail.com", phone: "1234567890", status: "Pending" },
        { id: 3, date: "10/02/2026", name: "Alex Jones", email: "alex.jones@gmail.com", phone: "1234567890", status: "Active" },
        { id: 4, date: "10/02/2026", name: "Alex Jones", email: "alex.jones@gmail.com", phone: "1234567890", status: "Pending" },
        { id: 5, date: "10/02/2026", name: "Alex Jones", email: "alex.jones@gmail.com", phone: "1234567890", status: "Active" },
        { id: 6, date: "10/02/2026", name: "Alex Jones", email: "alex.jones@gmail.com", phone: "1234567890", status: "Pending" },
        { id: 7, date: "10/02/2026", name: "Alex Jones", email: "alex.jones@gmail.com", phone: "1234567890", status: "Active" },
        { id: 8, date: "10/02/2026", name: "Alex Jones", email: "alex.jones@gmail.com", phone: "1234567890", status: "Pending" },
        { id: 9, date: "10/02/2026", name: "Alex Jones", email: "alex.jones@gmail.com", phone: "1234567890", status: "Active" },
    ];

    return (
        <div className="mt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <div className="w-full sm:w-72">
                    <GlobalInput
                        leftIcon={<Search size={18} />}
                        placeholder="Search Laundry Name"
                        className="bg-white border-gray-200 "
                    />
                </div>
                <div className="w-full sm:w-40">
                    <SmartSelect
                        options={[
                            { label: 'Active', value: 'Active' },
                            { label: 'Pending', value: 'Pending' }
                        ]}
                        placeholder="Status"
                        width="w-32"
                        rounded="rounded-lg"
                        backgroundColor="bg-white"
                        checkbox={true}
                        triggerClassName="h-11 border-gray-200"
                    />
                </div>
            </div>
            <div className="overflow-hidden">
                <DataTable
                    columns={columns}
                    rows={rows}
                    selectable={false}
                    headerBg="bg-white"
                    rowBg="bg-table"
                    rowActions={(row) => <ActionsElement row={row} onAction={handleAction} />}
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

            {/* Modals */}
            <ApproveModal
                isOpen={isApproveOpen}
                onClose={() => setIsApproveOpen(false)}
                onApprove={() => console.log("Approved", selectedRow?.name)}
                name={selectedRow?.name}
            />

            <SuspendModal
                isOpen={isSuspendOpen}
                onClose={() => setIsSuspendOpen(false)}
                onSuspend={(reason) => console.log("Rejected", selectedRow?.name, reason)}
                action="Reject"
            />

            <BlockModal
                isOpen={isBlockOpen}
                onClose={() => setIsBlockOpen(false)}
                onBlock={(reason) => console.log("Blocked", selectedRow?.name, reason)}
            />
        </div>
    );
};

export default LaundryTable;
