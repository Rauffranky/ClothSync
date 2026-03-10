import React from "react";
import ActionButtons from "./components/ActionButtons";
import AvailableFundsCard from "./components/AvailableFundsCard";
import TransactionTable from "./components/TransactionTable";
import SocialIcons from "../../../components/UI/SocialIcons";

const PaymentParent = () => {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h4 className="font-bold my-4">Payment</h4>
                <div className="flex gap-2 items-center">
                    <h6>Share your profile:</h6>
                    <SocialIcons />
                </div>
            </div>
            <ActionButtons />
            <AvailableFundsCard />
            <TransactionTable />
        </div>
    );
};

export default PaymentParent;
