import React, { useState } from "react";
import {
  NotebookPen,
  Calendar,
  MessageCircleMore,
} from "lucide-react";
import DataTable from "../../../../components/UI/table";
import CardOutline from "../../../../components/UI/card/CardOutline";
import NotesModal from "../../bookings/NotesModal";
import RescheduleModal from "../../components/RescheduleModal";
import Pagination from "../../../../components/UI/pagination";

const Actions = ({ row, onReschedule }) => {
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsNotesOpen(true);
          }}
          className="w-8 h-8 flex items-center justify-center bg-white rounded-[10px] text-gray-600 hover:text-primary transition-colors cursor-pointer border border-[#E1E0E1]"
        >
          <NotebookPen size={16} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsRescheduleOpen(true);
          }}
          className="w-8 h-8 flex items-center justify-center bg-white rounded-[10px] text-gray-600 hover:text-primary transition-colors cursor-pointer border border-[#E1E0E1]"
        >
          <Calendar size={16} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            // Trigger message logic
          }}
          className="w-8 h-8 flex items-center justify-center bg-white rounded-[10px] text-gray-600 hover:text-primary transition-colors cursor-pointer border border-[#E1E0E1]"
        >
          <MessageCircleMore size={16} />
        </button>
      </div>

      <NotesModal
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        studentName={`${row?.firstName} ${row?.lastName}`}
      />

      <RescheduleModal
        isOpen={isRescheduleOpen}
        onClose={() => setIsRescheduleOpen(false)}
        details={{ student: `${row?.firstName} ${row?.lastName}` }}
      />
    </>
  );
};

const StudentTable = ({ students, onSelectStudent, selectedStudentId }) => {
  const columns = [
    {
      key: "student",
      header: "Student",
      align: "left",
      render: (_, row) => (
        <span className="font-medium text-[#1E293B]">
          {row.firstName} {row.lastName}
        </span>
      ),
    },
    {
      key: "subject",
      header: "Subject",
      align: "left",
      render: () => <span className="text-[#1E293B]">Math</span>, // Hardcoded as per request "Math"
    },
    {
      key: "level",
      header: "Level",
      align: "left",
      render: () => <span className="text-[#1E293B]">GCSE</span>, // Hardcoded as per request "GCSE"
    },
    {
      key: "actions",
      header: "Action",
      align: "center",
      render: (_, row) => <Actions row={row} />,
    },
  ];

  return (
    <CardOutline
      padding="p-2 sm:p-6"
      border="border-none"
      className="shadow-sm student-table-section"
    >
      <DataTable
        columns={columns}
        rows={students}
        selectable={false}
        getRowId={(row) => row.id}
        rowBg="bg-[#F0F0F0]" // Gray background for rows as in design
        headerBg="bg-white shadow-sm-full"
        onRowClick={(_, id) => onSelectStudent(id)}
        rowClassName={(row, id) =>
          id === selectedStudentId ? "!bg-[#E8F5E9]" : ""
        }
      />
      <div className="flex justify-end mt-4">
        <Pagination
          totalItems={50}
          itemsPerPage={10}
          currentPage={1}
          onPageChange={() => { }}
        />
      </div>
    </CardOutline>
  );
};

export default StudentTable;
