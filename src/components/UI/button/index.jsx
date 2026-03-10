import React from "react";
const Button = ({
  label = "Button",
  onClick = () => { },
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  leftIcon = null,
  rightIcon = null,
  className = "",
  ...rest
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-[10px] transition-all duration-600 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-[20px] py-[10px] text-[14px]",
  };

  const variantClasses = {
    primary:
      "relative text-white bg-[linear-gradient(96deg,#2E7D32_0.45%,#66BB6A_75.9%)] " +
      "rounded-[12px] cursor-pointer hover:opacity-90 " +
      "hover:shadow-[0_4px_12px_rgba(46,125,50,0.45)]  " +
      "before:absolute before:content-[''] before:-bottom-[10px] before:left-1/2 before:-translate-x-1/2 before:w-[180px] before:h-[20px] before:rounded-full before:bg-white before:opacity-40 before:blur-[18px]",
    text:
      "relative cursor-pointer ",
    white:
      "bg-white font-[600] text-[#2E7D32] border-1 border-border cursor-pointer hover:shadow-[0_4px_12px_rgba(46,125,50,0.45)]",

    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-200 cursor-pointer",
    outline:
      "border-2 border-primary text-gray-700 hover:bg-primary focus:ring-gray-300 cursor-pointer",
    danger:
      "relative text-white  bg-gradient-to-b from-[#FF6B6B] via-danger to-[#D63A3A] " +
      "rounded-[12px] cursor-pointer hover:opacity-70 " +
      "shadow-[0_4px_12px_rgba(234,84,85,0.45)] " +
      "before:absolute before:content-[''] before:-bottom-[10px] before:left-1/2 before:-translate-x-1/2 before:w-[160px] before:h-[18px] before:rounded-full before:bg-white before:opacity-40 before:blur-[18px]",

    disabled: "bg-gray-200 text-gray-400 cursor-not-allowed",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...rest}
    >
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}
      {label && <span>{label}</span>}
      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </button>
  );
};

export default Button;
