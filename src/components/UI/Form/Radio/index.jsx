import React from "react";

const Radio = ({
  checked,
  onChange,
  label,
  value,
  name,
  disabled = false,
  className = "",
}) => {
  return (
    <label
      className={`flex items-center gap-2 cursor-pointer ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        className="peer sr-only"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
      />

      <div
        className="
          w-6 h-6
          rounded-full border-2 border-[#DCDCDC] bg-white
          flex items-center justify-center relative
          transition-all duration-200
          peer-checked:border-[#4CAF50]
        "
      >
        <div
          className={`
            w-3 h-3 rounded-full transition-all duration-200
            ${checked ? "bg-[linear-gradient(94deg,#2E7D32_0.25%,#66BB6A_88.23%)]" : "bg-translaundry"}
          `}
        />
      </div>

      {label && (
        <span className="text-[16px] font-medium text-black">{label}</span>
      )}
    </label>
  );
};

export default Radio;
