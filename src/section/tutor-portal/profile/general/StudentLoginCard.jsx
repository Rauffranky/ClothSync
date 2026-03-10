import React, { useState } from "react";
import { Info, Lock, X } from "lucide-react";
import CardOutline from "../../../../components/UI/card/CardOutline";
import Button from "../../../../components/UI/button";
import { DataTable } from "../../../../components/UI/table";

const StudentLoginCard = () => {
    // Mock data for the table
    const [students, setStudents] = useState([
        { id: 1, name: "Alan", userId: "Aj 12345" },
        { id: 2, name: "Alan", userId: "Aj 12345" },
        { id: 3, name: "Alan", userId: "Aj 12345" },
    ]);

    const handleDelete = (id) => {
        setStudents(prev => prev.filter(s => s.id !== id));
    };

    const handleEdit = (id) => {
        console.log("Edit student", id);
        // Implement edit logic or modal opening here
    };

    const columns = [
        {
            header: "Name",
            key: "name",
            sorting: true,
            align: "left",
        },
        {
            header: "User ID",
            key: "userId",
            align: "left",
        },
        {
            header: "Action",
            key: "action",
            align: "center",
            render: (row) => (
                <div className="flex items-center justify-center gap-2">
                    <button
                        onClick={() => handleDelete(row.id)}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-red-500 hover:bg-gray-50 transition-colors text-sm font-medium"
                    >
                        <X size={14} />
                        Delete
                    </button>
                    <button
                        onClick={() => handleEdit(row.id)}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors text-sm font-medium"
                    >
                        <Lock size={14} />
                        Edit Details
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div
        // padding="p-6"
        // border="border-[#DCDCDC]"
        // shadow="shadow-inner-full"
        // className="bg-[#E5E5E533]! h-full"
        >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                    <h5 className="font-semibold text-base sm:text-lg">Create student login for lessons.</h5>
                    <Info size={18} className="text-gray-500 cursor-pointer" />
                </div>
                <Button
                    label="Add Child"
                    variant=""
                    className="!bg-[#E7F3E8] !text-[#1F6A2A] hover:!bg-[#d9ebd9] font-medium"
                    onClick={() => console.log("Add Child clicked")}
                />
            </div>

            <DataTable
                columns={columns}
                rows={students}
                selectable={false}
                headerBg="bg-white"
                rowBg="bg-[#F5F5F5]!" // Light grey row background as requested/implied
            />
        </div>
    );
};

export default StudentLoginCard;
