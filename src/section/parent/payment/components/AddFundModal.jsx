import React, { useState } from "react";
import Modal from "../../../../components/UI/modal";
import Button from "../../../../components/UI/button";
import GlobalInput from "../../../../components/UI/Form/Input";
import Checkbox from "../../../../components/UI/check-box";

const AMOUNTS = [
    { label: "£50.00", value: 50 },
    { label: "£100.00", value: 100 },
    { label: "£150.00", value: 150 },
    { label: "£200.00", value: 200 },
    { label: "Enter Other Amount", value: "custom" },
];

const AddFundModal = ({ isOpen, onClose }) => {
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [customAmount, setCustomAmount] = useState("");
    const [isTermsAccepted, setIsTermsAccepted] = useState(false);

    const handleConfirm = () => {
        // Handle submission logic
        console.log({
            amount: selectedAmount === "custom" ? customAmount : selectedAmount,
        });
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={<span className="text-[#4CAF50]">Add Fund</span>}
            size="lg"
            footer={
                <div className="flex justify-end w-full">
                    <Button
                        label="Confirm"
                        variant="primary"
                        onClick={handleConfirm}
                        className="bg-[#4CAF50] hover:bg-[#45a049] !px-8"
                        disabled={!isTermsAccepted}
                    />
                </div>
            }
        >
            <div className="space-y-6">

                {/* Amount Selection */}
                <div className="space-y-3">
                    <h4 className="font-bold text-[#1E1E1E]">Select The Amount You Want To Add In Your Account</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                        {AMOUNTS.map((amt) => (
                            <button
                                key={amt.label}
                                onClick={() => setSelectedAmount(amt.value)}
                                className={`
                            py-3 px-2 rounded-[12px] border text-sm font-medium transition-all
                            ${selectedAmount === amt.value
                                        ? "border-[#4CAF50] bg-[#E8F5E9] text-[#4CAF50]"
                                        : "border-gray-200 text-[#57606A] hover:border-[#4CAF50]"
                                    }
                        `}
                            >
                                {amt.label}
                            </button>
                        ))}
                    </div>
                    {selectedAmount === "custom" && (
                        <GlobalInput
                            placeholder="Enter amount"
                            value={customAmount}
                            onChange={setCustomAmount}
                            type="number"
                        />
                    )}
                </div>

                {/* Terms */}
                <div className="space-y-2">
                    <h4 className="font-bold text-[#1E1E1E]">Terms & Conditions</h4>
                    <p className="text-[#57606A] text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    </p>
                </div>

                <div>
                    <Checkbox
                        label="I have read & Accept the terms & Conditions"
                        checked={isTermsAccepted}
                        onChange={setIsTermsAccepted}
                        className="text-sm font-medium text-[#1E1E1E]"
                    />
                </div>

            </div>
        </Modal>
    );
};

export default AddFundModal;
