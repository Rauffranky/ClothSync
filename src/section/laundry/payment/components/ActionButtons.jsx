import React, { useState } from "react";
import Button from "../../../../components/UI/button";
import RedeemVoucherModal from "./RedeemVoucherModal";
import BuyGiftVoucherModal from "./BuyGiftVoucherModal";
import AddFundModal from "./AddFundModal";

const ActionButtons = () => {
    const [isRedeemModalOpen, setRedeemModalOpen] = useState(false);
    const [isBuyVoucherModalOpen, setBuyVoucherModalOpen] = useState(false);
    const [isAddFundModalOpen, setAddFundModalOpen] = useState(false);

    return (
        <div className="flex flex-wrap gap-4 justify-end">
            <Button
                variant="white"
                label="Redeem"
                className="!border-[#4CAF50] !text-[#1E1E1E] min-w-[140px] font-semibold"
                onClick={() => setRedeemModalOpen(true)}
            />
            <Button
                variant="white"
                label="Buy Gift Voucher"
                className="!border-[#4CAF50] !text-[#1E1E1E] min-w-[160px] font-semibold"
                onClick={() => setBuyVoucherModalOpen(true)}
            />
            <Button
                variant="primary"
                label="Add Funds"
                className="bg-[#5CB35F] hover:bg-[#4FA052] min-w-[140px] font-semibold"
                onClick={() => setAddFundModalOpen(true)}
            />

            <RedeemVoucherModal
                isOpen={isRedeemModalOpen}
                onClose={() => setRedeemModalOpen(false)}
            />

            <BuyGiftVoucherModal
                isOpen={isBuyVoucherModalOpen}
                onClose={() => setBuyVoucherModalOpen(false)}
            />

            <AddFundModal
                isOpen={isAddFundModalOpen}
                onClose={() => setAddFundModalOpen(false)}
            />
        </div>
    );
};

export default ActionButtons;
