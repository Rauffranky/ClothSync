import React from "react";
import Button from "../../../../components/UI/button";
import Modal from "../../../../components/UI/modal";

const ApproveModal = ({ isOpen, onClose, onApprove, name }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            hideHeader={true}
            size="md"
            footer={
                <div className="flex gap-3">
                    <Button
                        label="No"
                        variant="white"
                        onClick={onClose}
                        className="border-[#2E7D32]! text-[#2E7D32]! px-8!"
                    />
                    <Button
                        label="Yes"
                        variant="primary"
                        onClick={() => {
                            onApprove();
                            onClose();
                        }}
                        className="px-8!"
                    />
                </div>
            }
        >
            <div className="flex items-start gap-6 py-4 px-2">
                {/* Custom Icon */}
                <div className="relative shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#66BB6A] to-[#2E7D32] flex items-center justify-center shadow-md">
                        <span className="text-white text-3xl font-medium">?</span>
                    </div>
                    {/* Decorative dots mimicking the image */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#66BB6A]"></div>
                    <div className="absolute top-0 -left-2 w-1.5 h-1.5 rounded-full bg-[#2E7D32]"></div>
                    <div className="absolute bottom-1 -left-1 w-1 h-1 rounded-full bg-[#66BB6A]"></div>
                    <div className="absolute -bottom-1 -right-0 w-1.5 h-1.5 rounded-full bg-[#2E7D32]"></div>
                </div>

                {/* Text Content */}
                <div className="space-y-2 mt-1">
                    <h3 className="text-xl font-bold text-gray-900">Are You Sure?</h3>
                    <p className="text-gray-500 text-[15px] leading-relaxed">
                        Are You sure you want to Approve {name || "this tenant"}?
                    </p>
                </div>
            </div>
        </Modal>
    );
};

export default ApproveModal;
