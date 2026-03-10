import React from "react";

const ViewTabs = ({ options = [], activeValue, onChange }) => {
  return (
    <div className="flex items-center gap-1 p-1 rounded-xl w-fit">
      {options.map((option) => {
        const isActive = activeValue === option.value;
        const Icon = option.icon;

        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`flex items-center gap-2 px-4 py-3 rounded-[10px] transition-all duration-300 cursor-pointer ${
              isActive
                ? "bg-tertiary border border-tertiary text-text shadow-md"
                : "text-[#57606A] border border-[#A3A3A3] hover:bg-white hover:shadow-sm"
            }`}
          >
            {Icon && <Icon size={20} />}
            <span className="font-semibold">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ViewTabs;
