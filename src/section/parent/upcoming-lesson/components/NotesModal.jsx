import React from "react";
import Modal from "../../../../components/UI/modal";
import Button from "../../../../components/UI/button";

const NotesModal = ({ isOpen, onClose, notes = [], customWidth = 1000 }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={<h2 className="text-2xl font-bold text-[#2E7D32]">Notes</h2>}
            customWidth={customWidth}
            className="rounded-[16px] overflow-hidden"
            footer={
                <Button
                    label="Cancel"
                    onClick={onClose}
                    variant="text"
                    className="!border !border-[#2E7D32] !text-[#2E7D32] hover:!bg-green-50 !font-medium !rounded-lg !px-6 !py-2"
                />
            }
        >
            <div className="flex flex-col gap-6">
                {notes.map((note, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-12 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                        <div className="min-w-[100px] pt-1">
                            <span className="text-gray-500 font-medium text-[15px]">
                                {note.date}
                            </span>
                        </div>
                        <div className="flex-1 flex flex-col gap-2">
                            <h4 className="font-bold text-[#1E1E1E] text-lg">
                                {note.tutor} <span className="text-gray-500 font-normal text-base">( {note.level} )</span>
                            </h4>
                            <p className="text-[#57606A] leading-relaxed text-[15px]">
                                {note.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Modal>
    );
};

export default NotesModal;
