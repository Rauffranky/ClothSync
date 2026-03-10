import React from "react";
import { Asterisk } from "lucide-react";
import CardOutline from "../../../../components/UI/card/CardOutline";

const AvailableFundsCard = () => {
    return (
        <CardOutline
            className="bg-white"
            rounded="rounded-[24px]"
            shadow="shadow-none border border-gray-100"
            padding="p-8"
        >
            <div className="space-y-4">
                <h3 className="text-[#1E1E1E] text-lg font-normal">Available Funds!</h3>
                <div className="text-[48px] font-medium text-[#57606A]">£50.00</div>
                <div className="flex items-center gap-2 text-[#1E1E1E] text-md">
                    <Asterisk size={20} className="text-[#57606A]" />
                    <span>Credit is automatically applied to your next purchase</span>
                </div>
            </div>
        </CardOutline>
    );
};

export default AvailableFundsCard;
