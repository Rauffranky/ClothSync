import React, { useState } from "react";
import { Calendar } from "lucide-react";
import Modal from "../../../components/UI/modal";
import Button from "../../../components/UI/button";
import GlobalInput from "../../../components/UI/Form/Input";

const NotesModal = ({ isOpen, onClose, studentName }) => {
  const [noteText, setNoteText] = useState("");

  // Mock data for existing notes
  const existingNotes = [
    { id: 1, date: "29/09/2025", text: "Needs help with basic principles" },
    { id: 2, date: "16/09/2025", text: "Good progress, but still needs work" },
    { id: 3, date: "10/09/2025", text: "Good progress, but still needs work" },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      showCloseIcon={false}
      title={<span className="text-primary font-medium ">Notes</span>}
      size="xl"
      footer={
        <div className="flex gap-3 w-full sm:w-auto">
          <Button
            label="Cancel"
            variant="white"
            className=""
            onClick={onClose}
          />
          <Button
            label="Add Note"
            variant="primary"
            className="flex-1 sm:flex-none"
            onClick={() => {
              console.log("Adding note:", noteText);
              setNoteText("");
              onClose();
            }}
          />
        </div>
      }
    >
      <div className="space-y-6 pt-2">
        {/* Shared Notes Header */}
        <div className="bg-[#F2F2F2] border border-gray-300 shadow-inner-full rounded-2xl p-4">
          <div className="mb-4">
            <h5 className="text-left font-medium text-tertiary2">Shared Notes</h5>
            <h6 className="text-left text-tertiary2">Laundries see these notes</h6>
          </div>

          <div className="space-y-4">
            {existingNotes.map((note) => (
              <div key={note.id} className="flex items-start gap-3">
                <div className="flex items-center gap-2 bg-[#E4E6DE] border border-border-4  rounded-md px-3 py-1.5 shrink-0">
                  <Calendar className="w-4 h-4 text-primary" />
                  <p className=" text-primary">{note.date}</p>
                </div>
                <p className=" pt-1.5">{note.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* New Note Textarea */}
        <div>
          <GlobalInput
            multiline
            rows={6}
            placeholder="Write your note here..."
            value={noteText}
            onChange={setNoteText}
          // className="!bg-white"
          />
        </div>
      </div>
    </Modal>
  );
};

export default NotesModal;
