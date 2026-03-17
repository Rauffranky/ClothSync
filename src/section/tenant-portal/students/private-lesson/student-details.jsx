import React, { useState } from "react";
import {
  Users,
  Calendar,
  Clock,
  BookOpen,
  Notebook,
  NotebookPen,
} from "lucide-react";
import Button from "../../../../components/UI/button";
import CardOutline from "../../../../components/UI/card/CardOutline";
import NotesModal from "../../bookings/NotesModal";
import RescheduleModal from "../../components/RescheduleModal";

const DetailRow = ({ icon: Icon, label, value, items = [] }) => {
  const hasItems = items.length > 0;
  return (
    <div
      className={`bg-tertiary rounded-[12px] p-4 mb-4 flex gap-4 ${hasItems ? "items-start" : "items-center"}`}
    >
      <div
        className={`flex items-center gap-3 ${hasItems ? "min-w-[140px]" : ""}`}
      >
        {Icon && <Icon size={16} className="text-tertiary2" />}
        <h6 className="text-tertiary2 whitespace-nowrap">
          {label}
        </h6>
        {value && <subtitle className="text-tertiary2">{value}</subtitle>}
      </div>
      {hasItems && (
        <div className="space-y-4 flex-1">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 text-[14px]">
              <div className="flex items-center gap-2 min-w-[120px]">
                <Calendar size={16} className="text-[#2E7D32]" />
                <subtitle className="text-tertiary2 font-medium">{item.date}</subtitle>
              </div>
              {item.time && (
                <div className="flex items-center gap-2 min-w-[80px]">
                  <Clock size={16} className="text-tertiary2" />
                  <subtitle className="text-tertiary2 font-medium">
                    {item.time}
                  </subtitle>
                </div>
              )}
              {item.subject && (
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-[#2E7D32]" />
                  <subtitle className="text-tertiary2 font-medium">
                    {item.subject}
                  </subtitle>
                </div>
              )}
              {item.note && (
                <div className="flex-1 text-[#1E293B]">
                  <span>{item.note}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const StudentDetails = ({ student }) => {
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);

  if (!student) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400 italic">
        Select a student to view details
      </div>
    );
  }

  return (
    <div className="student-details-section h-full flex flex-col">
      <div className="flex-1 overflow-y-auto pr-2">
        <DetailRow icon={Users} label="Laundries(s):" value={student.laundries} />

        <DetailRow label="Past Lessons:" items={student.pastLessons} />

        <DetailRow label="Future Lessons:" items={student.futureLessons} />

        <DetailRow label="Note:" items={student.notes} />
      </div>

      <div className="flex justify-end gap-4 mt-6 pt-4 border-t border-gray-100">
        <Button
          label="Reschedule"
          variant="white"
          className="w-[180px] shadow-sm"
          onClick={() => setIsRescheduleOpen(true)}
        />
        <Button
          label="Add Note"
          variant="primary"
          className="w-[180px]"
          onClick={() => setIsNotesOpen(true)}
        />
      </div>

      <NotesModal
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        studentName={`${student.firstName} ${student.lastName}`}
      />
      <RescheduleModal
        isOpen={isRescheduleOpen}
        onClose={() => setIsRescheduleOpen(false)}
      />
    </div>
  );
};

export default StudentDetails;
