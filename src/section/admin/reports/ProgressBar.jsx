import React, { useState, useEffect } from "react";

const ProgressBar = ({ label, value, color, bgColor, fillPercent = 50 }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setWidth(fillPercent);
        }, 100);
        return () => clearTimeout(timer);
    }, [fillPercent]);

    return (
        <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${color}`}></div>
                    <span className="text-[#1B2559] font-medium text-sm">{label}</span>
                </div>
                <span className="text-[#1B2559] font-bold text-sm">{value}</span>
            </div>
            <div className={`w-full h-2 rounded-full ${bgColor}`}>
                <div
                    className={`h-full rounded-full ${color} transition-all duration-1000 ease-out`}
                    style={{ width: `${width}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
