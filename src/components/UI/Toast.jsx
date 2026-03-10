import React, { useEffect } from "react";
import { Check, X } from "lucide-react";

const Toast = ({ message, type = "success", onClose, duration = 3000 }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const bgColor = type === "success" ? "bg-[#2E7D32]" : "bg-red-500";
    const Icon = type === "success" ? Check : X;

    return (
        <div className="fixed top-4 right-4 z-[9999] animate-slideInRight">
            <div
                className={`${bgColor} text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 min-w-[250px] max-w-[400px]`}
            >
                <div className="bg-white/20 rounded-full p-1">
                    <Icon size={16} />
                </div>
                <p className="text-sm font-medium flex-1">{message}</p>
                <button
                    onClick={onClose}
                    className="text-white/80 hover:text-white transition-colors"
                >
                    <X size={16} />
                </button>
            </div>
        </div>
    );
};

export default Toast;
