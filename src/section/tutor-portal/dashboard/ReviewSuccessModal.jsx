import React from "react";
import { Check } from "lucide-react";
import Modal from "../../../components/UI/modal";

const ReviewSuccessModal = ({ isOpen, onClose, tutorName }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            hideHeader={true}
            size="sm"
            className="!w-[400px] !max-w-[90vw]"
            footer={null}
        >
            <div className="flex items-center gap-4 py-6 px-2">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="text-white w-6 h-6" strokeWidth={3} />
                </div>
                <div>
                    <h3 className="text-[16px] font-bold text-[#1E1E1E]">
                        Review Added Successfully
                    </h3>
                    <p className="text-[12px] text-[#57606A] mt-1">
                        Review Added For <span className="font-medium">{tutorName}</span>
                    </p>
                </div>
            </div>
        </Modal>
    );
};

export default ReviewSuccessModal;
