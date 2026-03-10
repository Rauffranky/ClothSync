import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const GlobalInput = (
  {
    type = "text",
    placeholder = "Enter text...",
    value,
    onChange,
    onBlur,
    name,

    leftIcon,
    rightIcon,
    onRightIconClick,

    disabled = false,
    className = "",

    helperText = "",
    error = false,

    multiline = false,
    rows = 4,
    ...rest
  },
  ref
) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  const actualType = isPassword ? (showPassword ? "text" : "password") : type;

  const handleRightIconClick = () => {
    if (isPassword) setShowPassword((s) => !s);
    onRightIconClick?.();
  };

  // rows => height (approx)
  const rowHeight = 20; // px
  const baseHeight = 44; // h-11
  const computedHeight = multiline ? rows * rowHeight + 24 : baseHeight;

  return (
    <div className="w-full">
      <div
        className={`
          relative flex w-full rounded-lg border bg-white px-4 text-[14px] transition
          ${error ? "border-red-500" : "border-[#CFE3D1]"}
          focus-within:ring-2
          ${error
            ? "focus-within:ring-red-500/20"
            : "focus-within:ring-border"
          }
          ${disabled ? "opacity-60 cursor-not-allowed" : ""}
          ${multiline ? "items-start py-3" : "items-center h-11"}
          ${className}
        `}
        style={multiline ? { height: computedHeight } : undefined}
      >
        {leftIcon && (
          <div
            className={`mr-2 flex items-center text-slate-500 ${multiline ? "mt-1" : ""
              }`}
          >
            {leftIcon}
          </div>
        )}

        {multiline ? (
          <textarea
            ref={ref}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            onBlur={onBlur}
            disabled={disabled}
            rows={rows}
            {...rest}
            className="
              flex-1 bg-transparent
              text-[#555555] placeholder:text-[#555555]
              outline-none resize-none
            "
          />
        ) : (
          <input
            ref={ref}
            name={name}
            type={actualType}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            onBlur={onBlur}
            disabled={disabled}
            {...rest}
            className="
              flex-1 bg-transparent
              text-[#555555] placeholder:text-[#555555]
              outline-none
            "
          />
        )}

        {(isPassword || rightIcon) && (
          <div
            onClick={handleRightIconClick}
            className={`ml-2 select-none ${disabled ? "cursor-not-allowed" : "cursor-pointer"
              }`}
          >
            {isPassword ? (
              showPassword ? (
                <EyeOff className="w-4 h-4 text-slate-600" />
              ) : (
                <Eye className="w-4 h-4 text-slate-600" />
              )
            ) : (
              rightIcon
            )}
          </div>
        )}
      </div>

      {helperText && (
        <p
          className={`mt-1 text-xs ${error ? "text-red-500" : "text-gray-500"}`}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

export default GlobalInput;
