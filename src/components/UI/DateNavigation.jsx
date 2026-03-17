import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * DateNavigation Component
 *
 * Props:
 * - title: string (e.g., "October 2024, 7-13th")
 * - onPrev: function
 * - onNext: function
 * - className: string
 */
const DateNavigation = ({ title, onPrev, onNext, className = "" }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <h5 className=" font-semibold! text-[#1B2559]!">{title}</h5>
      <div className="flex items-center gap-2">
        <button
          onClick={onPrev}
          className="h-9 w-9 flex items-center justify-center rounded-xl bg-[#F1F5F9] text-[#64748B] hover:bg-emerald-50 hover:text-emerald-600 transition-all active:scale-95 shadow-sm border border-translaundry hover:border-emerald-100 cursor-pointer"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={onNext}
          className="h-9 w-9 flex items-center justify-center rounded-xl bg-[#F1F5F9] text-[#64748B] hover:bg-emerald-50 hover:text-emerald-600 transition-all active:scale-95 shadow-sm border border-translaundry hover:border-emerald-100 cursor-pointer"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default DateNavigation;
