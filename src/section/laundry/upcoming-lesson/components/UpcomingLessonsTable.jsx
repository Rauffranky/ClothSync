import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MoreHorizontal, Eye, FilePenLine, Calendar, MessageCircle, PlayCircle, MessageCircleWarning } from "lucide-react";
import { DataTable } from "../../../../components/UI/table";
import DropdownMenuItem from "../../../../components/UI/dropdown";
import Pagination from "../../../../components/UI/pagination";
import NotesModal from "./NotesModal";
import RaiseDisputeModal from "./RaiseDisputeModal";

const UpcomingLessonsTable = () => {
    const navigate = useNavigate();
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [showNotesModal, setShowNotesModal] = useState(false);
    const [showDisputeModal, setShowDisputeModal] = useState(false);

    const mockNotes = [
        {
            date: "11/08/2025",
            tenant: "Mrs.James",
            level: "GCSE",
            description: "Your payment has been completed, and your booking confirmed."
        },
        {
            date: "11/08/2025",
            tenant: "Mrs.James",
            level: "GCSE",
            description: "Your payment has been completed, and your booking confirmed."
        },
        {
            date: "11/08/2025",
            tenant: "Mrs.James",
            level: "GCSE",
            description: "Your payment has been completed, and your booking confirmed."
        }
    ];

    const [data] = useState([
        {
            id: 1,
            orderId: "#1233",
            time: "15:00",
            student: "Estelle",
            tenant: "James",
            subject: "Math",
            level: "GCSE",
            booked: "08",
            remaining: "07",
            nextLesson: "02/09/2025",
        },
        {
            id: 2,
            orderId: "#1233",
            time: "15:00",
            student: "Estelle",
            tenant: "James",
            subject: "Math",
            level: "GCSE",
            booked: "08",
            remaining: "07",
            nextLesson: "02/09/2025",
        },
        {
            id: 3,
            orderId: "#1233",
            time: "15:00",
            student: "Estelle",
            tenant: "James",
            subject: "Math",
            level: "GCSE",
            booked: "08",
            remaining: "07",
            nextLesson: "02/09/2025",
        },
        {
            id: 4,
            orderId: "#1233",
            time: "15:00",
            student: "Estelle",
            tenant: "James",
            subject: "Math",
            level: "GCSE",
            booked: "08",
            remaining: "07",
            nextLesson: "02/09/2025",
        },
        {
            id: 5,
            orderId: "#1233",
            time: "15:00",
            student: "Estelle",
            tenant: "James",
            subject: "Math",
            level: "GCSE",
            booked: "08",
            remaining: "07",
            nextLesson: "02/09/2025",
        },
        {
            id: 6,
            orderId: "#1233",
            time: "15:00",
            student: "Estelle",
            tenant: "James",
            subject: "Math",
            level: "GCSE",
            booked: "08",
            remaining: "07",
            nextLesson: "02/09/2025",
        },
        {
            id: 7,
            orderId: "#1233",
            time: "15:00",
            student: "Estelle",
            tenant: "James",
            subject: "Math",
            level: "GCSE",
            booked: "08",
            remaining: "07",
            nextLesson: "02/09/2025",
        },
        {
            id: 8,
            orderId: "#1233",
            time: "15:00",
            student: "Estelle",
            tenant: "James",
            subject: "Math",
            level: "GCSE",
            booked: "08",
            remaining: "07",
            nextLesson: "02/09/2025",
        },
    ]);

    const handleActionClick = (e, id) => {
        e.stopPropagation();
        if (activeDropdown?.id === id) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown({ id, anchor: e.currentTarget });
        }
    };

    const menuItems = [
        {
            id: "details",
            label: "View Details",
            icon: <Eye size={18} />,
            onClick: () => navigate("/laundries/upcoming-lesson-details"),
        },
        {
            id: "notes",
            label: "View Notes",
            icon: <FilePenLine size={18} />,
            onClick: () => {
                setActiveDropdown(null);
                setShowNotesModal(true);
            },
        },
        {
            id: "reschedule",
            label: "Reschedule",
            icon: <Calendar size={18} />,
            onClick: () => console.log("Reschedule", activeDropdown?.id),
        },
        {
            id: "message",
            label: "Send Message",
            icon: <MessageCircle size={18} />,
            onClick: () => console.log("Send Message", activeDropdown?.id),
        },
        {
            id: "join",
            label: "Join Lesson",
            icon: <PlayCircle size={18} />,
            onClick: () => console.log("Join Lesson", activeDropdown?.id),
        },
        {
            id: "dispute",
            label: "Raise a Dispute",
            icon: <MessageCircleWarning size={18} />,
            onClick: () => {
                setActiveDropdown(null);
                setShowDisputeModal(true);
            },
        },
    ];

    const columns = [
        {
            header: "Order ID",
            key: "orderId",
            sorting: true,
            align: "left",
        },
        {
            header: "Time",
            key: "time",
            align: "left",
        },
        {
            header: "Student",
            key: "student",
            align: "left",
        },
        {
            header: "Tenant",
            key: "tenant",
            align: "left",
        },
        {
            header: "Subject",
            key: "subject",
            align: "left",
        },
        {
            header: "Level",
            key: "level",
            align: "left",
        },
        {
            header: "Lesson Booked",
            key: "booked",
            align: "center",
        },
        {
            header: "Lesson Remaining",
            key: "remaining",
            align: "center",
        },
        {
            header: "Next Lesson",
            key: "nextLesson",
            align: "left",
        },
        {
            header: "Actions",
            key: "actions",
            align: "center",
            render: (_, row) => (
                <button
                    className="text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                    onClick={(e) => handleActionClick(e, row.id)}
                >
                    <MoreHorizontal size={20} />
                </button>
            ),
        },
    ];

    return (
        <div className="bg-white rounded-[20px]">
            <DataTable
                columns={columns}
                rows={data}
                selectable={false}
                headerBg="bg-[#F8FAF8]"
                rowBg="bg-[#F8FAF8]"
            />
            <div className="flex justify-end mt-2">
                <Pagination totalItems={4} itemsPerPage={5} currentPage={1} onPageChange={() => { }} />
            </div>
            {activeDropdown && (
                <DropdownMenuItem
                    title={null}
                    items={menuItems}
                    anchorEl={activeDropdown.anchor}
                    closeDropdown={() => setActiveDropdown(null)}
                    className="!bg-[#f5f5f5] !w-64"
                    itemClassName="!bg-white !rounded-[12px] !mb-2 !py-3 !px-4 hover:!bg-primary/20 shadow-sm"
                />
            )}

            <NotesModal
                isOpen={showNotesModal}
                onClose={() => setShowNotesModal(false)}
                notes={mockNotes}
            />

            <RaiseDisputeModal
                isOpen={showDisputeModal}
                onClose={() => setShowDisputeModal(false)}
                lessonId={activeDropdown?.id} // Assuming activeDropdown contains lesson info or ID
            />
        </div>
    );
};

export default UpcomingLessonsTable;
