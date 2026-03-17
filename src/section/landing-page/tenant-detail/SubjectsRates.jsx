import React from "react";
import DataTable from "../../../components/UI/table";
import CardOutline from "../../../components/UI/card/CardOutline";
import Pagination from "../../../components/UI/pagination";

const SubjectsRates = () => {
    const columns = [
        { key: "level", header: "Level" },
        {
            key: "subject",
            header: "Subjects",
            render: (val) => <span className="text-primary font-medium">{val}</span>
        },
        { key: "board", header: "Exam Board" },
        {
            key: "price",
            header: "Price/Lesson",
            align: "right",
            render: (val) => <span className="font-bold">{val}</span>
        }
    ];

    const rows = [
        { level: "GCSE", subject: "Physics", board: "OCR", price: "£35.00" },
        { level: "GCSE", subject: "Physics", board: "OCR", price: "£35.00" }
    ];

    return (
        <div className="space-y-6">
            <h5 className="font-semibold">Subjects & Rates</h5>
            <CardOutline bg="bg-[rgba(229,229,229,0.2)]" border="border-none" shadow="shadow-inner-full" padding="p-6" className="rounded-[12px]">
                <DataTable
                    headerBg="bg-tertiary"
                    columns={columns}
                    rows={rows}
                    selectable={false}
                />
                <div className="flex justify-end mt-4">
                    <Pagination
                        totalItems={2}
                        itemsPerPage={5}
                        currentPage={1}
                        onPageChange={() => { }}
                    />
                </div>
            </CardOutline>
        </div>
    );
};

export default SubjectsRates;
