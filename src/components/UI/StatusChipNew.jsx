import React from "react";
import Badges from "./badges";

const StatusChipNew = ({ status, icon }) => {
    let style = "";

    switch (status) {
        case "Cooking":
            style = "text-white bg-[#F07D2D]";
            break;
        case "Paid":
            style = "text-white bg-[#5DAD46]";
            break;
        case "Requested":
            style = "text-white bg-[#3C8BE0]";
            break;
        case "Accepted":
            style = "text-white bg-[#5DAD46]";
            break;
        case "QA Review":
            style = "text-white bg-[#312D3E]";
            break;
        case "Completed":
            style = "text-white bg-[#5DAD46]";
            break;
        case "Suspended":
            style = "text-white bg-[#6352A2]"
            break;
        case "Approved":
            style = "text-white bg-[#4F7DDB]";
            break;
        case "Rejected":
            style = "text-white bg-[#DD2025]";
            break;
        case "Staffed":
            style = "text-white bg-[#9660CD]";
            break;
        case "Pending":
            style = "text-white bg-[#DA944B]";
            break;
        case "Active":
            style = "text-white bg-[#5DAD46]";
            break;
        case "Deactivated":
            style = "text-white bg-[#312D3E]";
            break;
        case "Archived":
            style = "text-white bg-[#E75E73]";
            break;
        case "Blocked":
            style = "text-white bg-[#CA0C29]";
            break;
        case "Complete":
            style = "text-white bg-[#5DAD46]";
            break;
        case "Refund":
            style = "text-white bg-[#6352A2]";
            break;
        case "Failed":
            style = "text-white bg-[#DD2025]";
            break;
        default:
            style = "text-gray-700 bg-[rgba(0,0,0,0.05)] border border-slate-400";
    }

    return (
        <Badges
            label={status}
            textColor={style}
            className="w-[130px] text-[14px] rounded-[10px]!"
            icon={icon}
        />
    );
};

export default StatusChipNew;
