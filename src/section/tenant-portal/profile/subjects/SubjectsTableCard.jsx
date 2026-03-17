import React, { useState, useRef } from "react";
import CardOutline from "../../../../components/UI/card/CardOutline";
import DataTable from "../../../../components/UI/table";
import { MoreHorizontal, Pencil, Trash } from "lucide-react";
import Pagination from "../../../../components/UI/pagination";
import DropdownMenuItem from "../../../../components/UI/dropdown";

const ActionMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const btnRef = useRef(null);

    const menuItems = [
        {
            id: "edit",
            label: "Edit",
            icon: <Pencil size={16} />,
            onClick: () => console.log("Edit clicked"),
        },
        {
            id: "delete",
            label: "Delete",
            icon: <Trash size={16} />,
            onClick: () => console.log("Delete clicked"),
        },
    ];

    return (
        <div className="relative">
            <button
                ref={btnRef}
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(!isOpen);
                }}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
                <MoreHorizontal size={20} className="text-[#555555]" />
            </button>

            {isOpen && (
                <DropdownMenuItem
                    title=""
                    anchorEl={btnRef.current}
                    closeDropdown={() => setIsOpen(false)}
                    items={menuItems}
                />
            )}
        </div>
    );
};

const SubjectsTableCard = () => {
    const columns = [
        { header: "Level", key: "level" },
        { header: "Subjects", key: "subject" },
        { header: "Exam Board", key: "examBoard" },
        { header: "Price/hour", key: "price", align: "center" },
    ];

    const rows = Array(7).fill({
        level: "GCSE",
        subject: "Physics",
        examBoard: "OCR",
        price: "£35.00",
    });

    return (
        <CardOutline padding="p-6" border="border-[#DCDCDC]" shadow="shadow-inner-full" className="bg-[#E5E5E533]! h-full">
            <h5 className="font-semibold mb-6 text-[18px]">Your Subjects</h5>

            <div className="">
                <DataTable
                    columns={columns}
                    rows={rows}
                    selectable={false}
                    headerBg="bg-white"
                    rowBg="bg-[#F8FAF8]"
                    rowActions={() => <ActionMenu />}
                />
            </div>
            <div className="flex justify-end mt-4">
                <Pagination
                    totalItems={30}
                    itemsPerPage={5}
                    currentPage={1}
                    onPageChange={() => { }}
                />
            </div>
        </CardOutline>
    );
};

export default SubjectsTableCard;
