import React, { useState } from "react";
import { CirclePlay, Mail, MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
// import StatusChipNew from "../../../components/UI/StatusChipNew";
import DataTable from "../../../components/UI/table";
import Pagination from "../../../components/UI/pagination";
import DropdownMenuItem from "../../../components/UI/dropdown";
import JoinLessonModal from "./JoinLessonModal";

const ActionMenu = ({ row, onJoin }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    if (row.status === "Paid") {
        return (
            <button className="p-2 text-gray-300 cursor-not-allowed" disabled>
                <MoreHorizontal size={20} />
            </button>
        );
    }

    // Only show dropdown for "Pending" (or other statuses if needed)
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
                        id: "join",
                        label: "Join Lesson",
                        icon: <CirclePlay size={20} />,
                        onClick: () => {
                            if (onJoin) onJoin(row);
                        },
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

const StudentTable = () => {
    const [joinModalOpen, setJoinModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const handleJoin = (row) => {
        setSelectedRow(row);
        setJoinModalOpen(true);
    };

    const columns = [
        { header: "Lesson ID", key: "lesson", align: "left", sorting: true },
        { header: "Student", key: "student", align: "left", sorting: true },
        { header: "Tenant", key: "tenant", align: "left" },
        { header: "Subject", key: "subject", align: "left" },
        { header: "Level", key: "level", align: "left" },
        {
            header: "Lesson Date",
            key: "lessonDate",
            align: "left",
        },
        { header: "Lesson Time", key: "lessonTime", align: "left" },
    ];

    const rows = [
        { id: 1, lesson: "#10001", student: "Alex Jones", tenant: "Alex Jones", subject: "Math", level: "Beginner", lessonDate: "2023-01-01", lessonTime: "10:00 AM" },
        { id: 2, lesson: "#10002", student: "Alex Jones", tenant: "Alex Jones", subject: "Math", level: "Beginner", lessonDate: "2023-01-02", lessonTime: "10:00 AM" },
        { id: 3, lesson: "#10003", student: "Alex Jones", tenant: "Alex Jones", subject: "Math", level: "Beginner", lessonDate: "2023-01-03", lessonTime: "10:00 AM" },
        { id: 4, lesson: "#10004", student: "Alex Jones", tenant: "Alex Jones", subject: "Math", level: "Beginner", lessonDate: "2023-01-04", lessonTime: "10:00 AM" },
        { id: 5, lesson: "#10005", student: "Alex Jones", tenant: "Alex Jones", subject: "Math", level: "Beginner", lessonDate: "2023-01-05", lessonTime: "10:00 AM" },
        { id: 6, lesson: "#10006", student: "Alex Jones", tenant: "Alex Jones", subject: "Math", level: "Beginner", lessonDate: "2023-01-06", lessonTime: "10:00 AM" },
        { id: 7, lesson: "#10007", student: "Alex Jones", tenant: "Alex Jones", subject: "Math", level: "Beginner", lessonDate: "2023-01-07", lessonTime: "10:00 AM" },
        { id: 8, lesson: "#10008", student: "Alex Jones", tenant: "Alex Jones", subject: "Math", level: "Beginner", lessonDate: "2023-01-08", lessonTime: "10:00 AM" },
        { id: 9, lesson: "#10009", student: "Alex Jones", tenant: "Alex Jones", subject: "Math", level: "Beginner", lessonDate: "2023-01-09", lessonTime: "10:00 AM" },
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
                    rowActions={(row) => <ActionMenu row={row} onJoin={handleJoin} />}
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

            <JoinLessonModal
                isOpen={joinModalOpen}
                onClose={() => setJoinModalOpen(false)}
                lessonData={selectedRow}
            />
        </div>
    );
};

export default StudentTable;
