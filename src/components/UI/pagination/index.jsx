import React from "react";
import { SkipBack, SkipForward } from "lucide-react";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  disabled = false,
}) => {
  const totalPages = Math.max(
    6,
    Math.ceil((totalItems || 0) / (itemsPerPage || 1)),
  );

  // Desktop pages (same logic as before)
  const getDesktopPages = () => {
    const range = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) range.push(i);
      return range;
    }

    if (currentPage <= 4) {
      range.push(1, 2, 3, 4, 5, "...", totalPages);
    } else if (currentPage >= totalPages - 3) {
      range.push(
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      );
    } else {
      range.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      );
    }

    return range;
  };

  // Mobile pages: 1 2 3 ... last
  const getMobilePages = () => {
    // if very small, show all
    if (totalPages <= 5)
      return Array.from({ length: totalPages }, (_, i) => i + 1);

    // near start
    if (currentPage <= 3) return [1, 2, 3, "...", totalPages];

    // near end
    if (currentPage >= totalPages - 2)
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];

    // middle
    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  const goTo = (p) => {
    if (!onPageChange || disabled) return;
    const safe = Math.min(totalPages, Math.max(1, p));
    onPageChange(safe);
  };

  const btnBase =
    "xl:h-10 xl:w-10 w-8 h-8 lg:h-6 lg:w-6 rounded-md flex items-center justify-center xl:text-[16px] text-[14px] lg:text-[12px] font-semibold transition";
  const btnIdle = "bg-[#E7F3E8] text-[#2F2F2F] hover:bg-[#dff0e1]";
  const btnActive = "bg-[#1F6A2A] text-white";
  const btnDisabled = "opacity-40 cursor-not-allowed";

  const renderPages = (pages) => (
    <div className="flex items-center gap-2 sm:gap-2">
      {pages.map((num, idx) =>
        num === "..." ? (
          <span
            key={`dots-${idx}`}
            className="h-2 w-2 sm:h-10 sm:w-10 rounded-md flex items-center justify-center text-[#2F2F2F]/60 font-semibold"
          >
            …
          </span>
        ) : (
          <button
            key={num}
            type="button"
            disabled={disabled}
            onClick={() => goTo(num)}
            className={`cursor-pointer ${btnBase} ${num === currentPage ? btnActive : btnIdle
              } ${disabled ? btnDisabled : ""}`}
          >
            {num}
          </button>
        ),
      )}
    </div>
  );

  return (
    <div className="">
      <div className="w-full md:w-fit rounded-xl  px-2 sm:px-3 py-3 flex items-center justify-between md:justify-start gap-2 sm:gap-3 overflow-x-auto">
        {/* Prev */}
        <button
          type="button"
          disabled={disabled || currentPage === 1}
          onClick={() => goTo(currentPage - 1)}
          className={`cursor-pointer h-10 w-10 shrink-0 rounded-md flex items-center justify-center transition ${disabled || currentPage === 1 ? "opacity-30 cursor-not-allowed" : ""
            }`}
          aria-label="Previous page"
        >
          <SkipBack className="text-primary " size={22} />
        </button>

        {/* Pages */}
        <div className="flex-1 md:flex-none flex items-center justify-center md:justify-start ">
          {/* Mobile */}
          <div className="block md:hidden">{renderPages(getMobilePages())}</div>

          {/* Desktop */}
          <div className="hidden md:block">
            {renderPages(getDesktopPages())}
          </div>
        </div>

        {/* Next */}
        <button
          type="button"
          disabled={disabled || currentPage === totalPages}
          onClick={() => goTo(currentPage + 1)}
          className={`cursor-pointer h-10 w-10 shrink-0 rounded-md flex items-center justify-center transition ${disabled || currentPage === totalPages
            ? "opacity-30 cursor-not-allowed"
            : ""
            }`}
          aria-label="Next page"
        >
          <SkipForward className="text-[#1F6A2A]" size={22} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
