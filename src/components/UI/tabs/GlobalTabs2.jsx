
import React from "react";

const GlobalTabs2 = ({
    tabs = [],
    activeTab,
    onTabChange,
    className = ""
}) => {
    return (
        <div className={`flex gap-1 bg-white rounded-lg p-1 w-full shadow-sm ${className}`}>
            {tabs.map((tab) => (
                <button
                    key={tab.value}
                    type="button"
                    className={`cursor-pointer flex-1 py-3 text-sm font-medium rounded-lg transition-colors ${activeTab === tab.value
                            ? 'bg-[linear-gradient(94deg,#2E7D32_0.25%,#66BB6A_88.23%)] text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                    onClick={() => onTabChange(tab.value)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default GlobalTabs2;
