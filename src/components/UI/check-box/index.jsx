import React from "react";

const Checkbox = ({
  checked,
  onChange,
  label,
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
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
      />

      <span
        className="
          w-4 h-4 p-2
          rounded-md border-2 border-[#DCDCDC] bg-transparent
          flex items-center justify-center relative
          transition-colors

         peer-checked:bg-[linear-gradient(94deg,#2E7D32_0.25%,#66BB6A_88.23%)]
          peer-checked:border-primary

          peer-checked:after:content-['']
          peer-checked:after:absolute
          peer-checked:after:w-2.5
          peer-checked:after:h-1.25
          peer-checked:after:border-b-2
          peer-checked:after:border-l-2
          peer-checked:after:border-white
          peer-checked:after:-rotate-45
        "
      />

      {label && <h6 className="text-[18px]  leading-tight">{label}</h6>}
    </label>
  );
};

export default Checkbox;
