import React from "react";
import Modal from "../../../components/UI/modal";
import Button from "../../../components/UI/button";

const JoinLessonModal = ({ isOpen, onClose, lessonData }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={<span className="text-[#5DAD46] font-bold text-xl">Start Class</span>}
            size="xl"
            footer={
                <>
                    <Button
                        label="Cancel"
                        variant="white"
                        onClick={onClose}
                        className="!px-6"
                    />
                    <Button
                        label="Start Class Now"
                        variant="primary"
                        onClick={() => {
                            console.log("Starting class for", lessonData?.id);
                            onClose();
                        }}
                        className="!px-6"
                    />
                </>
            }
        >
            <div className="space-y-6 py-2">
                <div>
                    <h6 className="text-tertiary2 mb-2">URL for your classroom:</h6>
                    <a
                        href="https://Zoom.us/j/987654321?pwd+A1B2C3D4"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#4194F3] hover:underline break-all"
                    >
                        https://Zoom.us/j/987654321?pwd+A1B2C3D4
                    </a>
                </div>

                <div className="flex flex-wrap gap-x-30 gap-y-4">
                    <div className="flex items-center gap-3">
                        <h6 className="text-tertiary2 mb-2">Meeting ID: </h6>
                        <h6 className="text-tertiary2 mb-2">987654321</h6>
                    </div>
                    <div className="flex items-center gap-3">
                        <h6 className="text-tertiary2 mb-2">Meeting Password: </h6>
                        <h6 className="text-tertiary2 mb-2">123455644</h6>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default JoinLessonModal;
