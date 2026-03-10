
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MoreHorizontal, Eye, FilePenLine, Calendar, MessageCircle, PlayCircle, MessageCircleWarning, Star } from "lucide-react";
import { DataTable } from "../../../components/UI/table";
import DropdownMenuItem from "../../../components/UI/dropdown";
import Pagination from "../../../components/UI/pagination";
import SocialIcons from "../../../components/UI/SocialIcons";
import NotesModal from "../upcoming-lesson/components/NotesModal";
import RaiseDisputeModal from "../upcoming-lesson/components/RaiseDisputeModal";
import WriteReviewModal from "../../tutor-portal/dashboard/WriteReviewModal";

const PastLessons = () => {
    const navigate = useNavigate();
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [showNotesModal, setShowNotesModal] = useState(false);
    const [showDisputeModal, setShowDisputeModal] = useState(false);
    const [showReviewModal, setShowReviewModal] = useState(false);

    const mockNotes = [
        {
            date: "11/08/2025",
            tutor: "Mrs.James",
            level: "GCSE",
            description: "Your payment has been completed, and your booking confirmed."
        },
        {
            date: "11/08/2025",
            tutor: "Mrs.James",
            level: "GCSE",
            description: "Your payment has been completed, and your booking confirmed."
        },
        {
            date: "11/08/2025",
            tutor: "Mrs.James",
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
            tutor: "James",
            subject: "Math",
            level: "GCSE",
            booked: "08",
            remaining: "07",
            nextLesson: "02/09/2025",
        },
        // ... (data can stay as is, I'm replacing the whole component logic mainly)
        {
            id: 2,
            orderId: "#1233",
            time: "15:00",
            student: "Estelle",
            tutor: "James",
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
            tutor: "James",
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
            tutor: "James",
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
            tutor: "James",
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
            tutor: "James",
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
            tutor: "James",
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
            tutor: "James",
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

    const handleReviewSubmit = (reviewData) => {
        console.log("Submitted Review: ", reviewData);
        setShowReviewModal(false);
    };

    const menuItems = [
        {
            id: "details",
            label: "View Details",
            icon: <Eye size={18} />,
            onClick: () => navigate("/parents/past-lesson-details"),
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
            id: "review",
            label: "Write Review",
            icon: <Star size={18} />,
            onClick: () => {
                setActiveDropdown(null);
                setShowReviewModal(true);
            },
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
            header: "Tutor",
            key: "tutor",
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
            <div className="flex items-center justify-between">
                <h4 className="font-bold my-4">Past Lessons</h4>
                <div className="flex gap-2 items-center">
                    <h6>Share your profile:</h6>
                    <SocialIcons />
                </div>
            </div>
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
                lessonId={activeDropdown?.id}
            />

            <WriteReviewModal
                isOpen={showReviewModal}
                onClose={() => setShowReviewModal(false)}
                onSubmit={handleReviewSubmit}
            />
        </div>
    );
};

export default PastLessons;
