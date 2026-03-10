/* eslint-disable react-refresh/only-export-components */
import React, { useState } from "react";
import {
  MoreHorizontal,
  Calendar,
  NotebookPen,
  Video,
  MessageCircleMore,
  SquarePlay,
  CircleAlert,
  Eye,
} from "lucide-react";
import DropdownMenuItem from "../../../components/UI/dropdown";
import NotesModal from "./NotesModal";
import EditLinkModal from "./EditLinkModal";
import RescheduleModal from "../components/RescheduleModal";
import { useNavigate } from "react-router-dom";

const Actions = ({ row }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isEditLinkOpen, setIsEditLinkOpen] = useState(false);
  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);
  const navigate = useNavigate();
  // const btnRef = useRef(null);

  // const menuItems = [
  //   {
  //     id: "view-notes",
  //     label: "View Notes",
  //     icon: <NotebookPen size={16} />,
  //     onClick: () => setIsNotesOpen(true),
  //   },
  //   {
  //     id: "reschedule",
  //     label: "Reschedule",
  //     icon: <Calendar size={16} />,
  //     onClick: () => setIsRescheduleOpen(true),
  //   },

  //   {
  //     id: "edit-link",
  //     label: "Edit Class Link",
  //     icon: <Video size={16} className="" />,
  //     onClick: () => setIsEditLinkOpen(true),
  //   },
  //   {
  //     id: "send-message",
  //     label: "Send Message",
  //     icon: <MessageCircleMore size={16} className="" />,
  //     // onClick: () => console.log("Cancel", row),
  //   },
  //   {
  //     id: "start-class",
  //     label: "Start Class",
  //     icon: <SquarePlay size={16} className="" />,
  //     // onClick: () => console.log("Cancel", row),
  //   },
  // ];

  return (
    <div className="relative">
      {/* <button
        ref={btnRef}
        onClick={() => setIsOpen(!isOpen)}
        className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
      >
        <MoreHorizontal size={20} className="text-gray-600" />
      </button> */}

      {/* {isOpen && (
        <DropdownMenuItem
          title=""
          anchorEl={btnRef.current}
          closeDropdown={() => setIsOpen(false)}
          items={menuItems}
        />
      )} */}
      <div className="flex gap-2">
        <button
          className="btn btn-primary cursor-pointer bg-white p-1 rounded-md "
          onClick={() => navigate("/tutor/class-detail")}
        >
          <Eye size={16} />
        </button>
        <button
          className="btn btn-primary cursor-pointer bg-white p-1 rounded-md "
          onClick={() => setIsNotesOpen(true)}
        >
          <NotebookPen size={16} />
        </button>
        <button
          className="btn btn-primary cursor-pointer bg-white p-1 rounded-md "
          onClick={() => setIsRescheduleOpen(true)}
        >
          <Calendar size={16} />
        </button>
        <button
          className="btn btn-primary cursor-pointer bg-white p-1 rounded-md "
          onClick={() => setIsEditLinkOpen(true)}
        >
          <Video size={16} />
        </button>
        <button
          className="btn btn-primary cursor-pointer bg-white p-1 rounded-md "
          // onClick={() => setIsEditLinkOpen(true)}
        >
          <MessageCircleMore size={16} />
        </button>
        <button
          className="btn btn-primary cursor-pointer bg-white p-1 rounded-md "
          // onClick={() => setIsEditLinkOpen(true)}
        >
          <SquarePlay size={16} />
        </button>
      </div>

      <NotesModal
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        studentName={row?.student}
      />

      <EditLinkModal
        isOpen={isEditLinkOpen}
        onClose={() => setIsEditLinkOpen(false)}
      />

      <RescheduleModal
        isOpen={isRescheduleOpen}
        onClose={() => setIsRescheduleOpen(false)}
        details={row}
      />
    </div>
  );
};

export const mockBookings = Array(10).fill({
  id: "#1233",
  date: "02/09/2025",
  startTime: "15:00",
  student: "Estelle",
  level: "GCSE",
  subject: "Math",
  lessonsBooked: "08",
  lessonsRemaining: "07",
  nextLesson: "02/09/2025",
});

export default Actions;
