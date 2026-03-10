import React, { useState } from "react";
import { Copy } from "lucide-react";
import Modal from "../../../../components/UI/modal";
import Button from "../../../../components/UI/button";
import GlobalInput from "../../../../components/UI/Form/Input";
import Checkbox from "../../../../components/UI/check-box";

const RedeemVoucherModal = ({ isOpen, onClose }) => {
    const [voucherCode, setVoucherCode] = useState("D45G-DF5F-HE4D-45TH");
    const [isChecked, setIsChecked] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(voucherCode);
        // Optional: show toast
    };

    const handleActivate = () => {
        console.log("Activating voucher:", voucherCode);
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={<span className="text-[#4CAF50]">Redeem Voucher</span>}
            size="md"
            footer={
                <div className="flex justify-end w-full">
                    <Button
                        label="Activate"
                        variant="primary"
                        onClick={handleActivate}
                        className="bg-[#4CAF50] hover:bg-[#45a049] !px-8"
                        disabled={!isChecked}
                    />
                </div>
            }
        >
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <label className="text-[#1E1E1E] font-medium">Voucher Amount</label>
                    <span className="text-[#4CAF50] font-bold text-xl">$50</span>
                </div>

                <div className="space-y-2">
                    <label className="text-[#57606A] text-sm">Voucher Code</label>
                    <div className="relative">
                        <GlobalInput
                            value={voucherCode}
                            onChange={setVoucherCode}
                            className="pr-10"
                        />
                        <button
                            onClick={handleCopy}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#57606A] hover:text-[#1E1E1E]"
                        >
                            <Copy size={18} />
                        </button>
                    </div>
                </div>

                <div className="space-y-2">
                    <h4 className="font-bold text-[#1E1E1E]">Terms & Conditions</h4>
                    <p className="text-[#57606A] text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    </p>
                </div>

                <div>
                    <Checkbox
                        label="I have read & Accept the terms & Conditions"
                        checked={isChecked}
                        onChange={setIsChecked}
                        className="text-sm font-medium text-[#1E1E1E]"
                    />
                </div>
            </div>
        </Modal>
    );
};

export default RedeemVoucherModal;
