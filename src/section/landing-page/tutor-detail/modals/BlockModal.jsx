import React, { useState } from "react";
import Button from "../../../../components/UI/button";
import Modal from "../../../../components/UI/modal";
import GlobalInput from "../../../../components/UI/Form/Input";

const BlockModal = ({ isOpen, onClose, onBlock }) => {
    const [reason, setReason] = useState("");

    const handleBlock = () => {
        onBlock(reason);
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={<span className="text-[#2E7D32]">Block Reason</span>}
            size="md"
            footer={
                <>
                    <Button
                        label="Cancel"
                        variant="white"
                        onClick={onClose}
                        className="border-[#2E7D32]! text-[#2E7D32]! px-8!"
                    />
                    <Button
                        label="Block"
                        variant="primary"
                        onClick={handleBlock}
                        className="px-8!"
                    />
                </>
            }
        >
            <div className="space-y-2">
                <label className="text-[#555] text-sm font-medium">Reason</label>
                <GlobalInput
                    multiline
                    rows={4}
                    placeholder="Write reason here"
                    value={reason}
                    onChange={setReason}
                    className="w-full"
                />
            </div>
        </Modal>
    );
};

export default BlockModal;
