import React, { useState } from "react";
import { CirclePlay, Mail, MoreHorizontal, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DataTable from "../../../components/UI/table";
import Pagination from "../../../components/UI/pagination";
import DropdownMenuItem from "../../../components/UI/dropdown";

const ActionMenu = ({ row, onViewDetail }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    return (
        <>
            <button
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                onClick={(e) => setAnchorEl(e.currentTarget)}
            >
                <MoreHorizontal size={20} />
            </button>

            <DropdownMenuItem
                anchorEl={anchorEl}
                closeDropdown={() => setAnchorEl(null)}
                title=""
                className="w-fit"
                items={[
                    {
                        id: "view-detail",
                        label: "View Detail",
                        icon: <Eye size={20} />,
                        onClick: () => {
                            if (onViewDetail) onViewDetail(row);
                        },
                    },
                    {
                        id: "join",
                        label: "Join Lesson",
                        icon: <CirclePlay size={20} />,
                        onClick: () => console.log("Join Lesson for", row.id),
                    },
                    {
                        id: "Messages",
                        label: "Messages",
                        icon: <Mail size={20} />,
                        onClick: () => navigate("/student/chat"),
                    }
                ]}
            />
        </>
    );
};

const OrderTable = ({ onViewDetail }) => {
    const columns = [
        { header: "Order ID", key: "orderId", align: "left", sorting: true },
        { header: "Time", key: "time", align: "left" },
        { header: "Student", key: "student", align: "left", sorting: true },
        { header: "Tutor", key: "tutor", align: "left" },
        { header: "Subject", key: "subject", align: "left" },
        { header: "Level", key: "level", align: "left" },
        { header: "Lesson Booked", key: "lessonBooked", align: "center" },
        { header: "Lesson Remaining", key: "lessonRemaining", align: "center" },
        { header: "Next Lesson", key: "nextLesson", align: "left" },
    ];

    const rows = [
        { id: 1, orderId: "#1233", time: "15:00", student: "Estelle", tutor: "James", subject: "Math", level: "GCSE", lessonBooked: "08", lessonRemaining: "07", nextLesson: "02/09/2025" },
        { id: 2, orderId: "#1233", time: "15:00", student: "Estelle", tutor: "James", subject: "Math", level: "GCSE", lessonBooked: "08", lessonRemaining: "07", nextLesson: "02/09/2025" },
        { id: 3, orderId: "#1233", time: "15:00", student: "Estelle", tutor: "James", subject: "Math", level: "GCSE", lessonBooked: "08", lessonRemaining: "07", nextLesson: "02/09/2025" },
        { id: 4, orderId: "#1233", time: "15:00", student: "Estelle", tutor: "James", subject: "Math", level: "GCSE", lessonBooked: "08", lessonRemaining: "07", nextLesson: "02/09/2025" },
        { id: 5, orderId: "#1233", time: "15:00", student: "Estelle", tutor: "James", subject: "Math", level: "GCSE", lessonBooked: "08", lessonRemaining: "07", nextLesson: "02/09/2025" },
        { id: 6, orderId: "#1233", time: "15:00", student: "Estelle", tutor: "James", subject: "Math", level: "GCSE", lessonBooked: "08", lessonRemaining: "07", nextLesson: "02/09/2025" },
        { id: 7, orderId: "#1233", time: "15:00", student: "Estelle", tutor: "James", subject: "Math", level: "GCSE", lessonBooked: "08", lessonRemaining: "07", nextLesson: "02/09/2025" },
    ];

    return (
        <div className="mt-8">
            <h5 className="mb-4 font-medium">Dashboard</h5>
            <div className="overflow-hidden">
                <DataTable
                    columns={columns}
                    rows={rows}
                    selectable={false}
                    headerBg="bg-white"
                    rowBg="bg-table"
                    rowActions={(row) => <ActionMenu row={row} onViewDetail={onViewDetail} />}
                />
            </div>
            <div className="flex justify-end mt-4">
                <Pagination
                    totalItems={7}
                    itemsPerPage={5}
                    currentPage={1}
                    onPageChange={() => { }}
                />
            </div>
        </div>
    );
};

export default OrderTable;
