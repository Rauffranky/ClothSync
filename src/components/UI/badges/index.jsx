import React from "react";

const Badges = ({
  label = "Text",
  textColor = "text-black",
  fontSize = "text-[12px]",
  bgColor = "",
  borderColor = "",
  padding = "px-3 py-1",
  fontWeight = "font-medium",
  hover = true,
  className = "",
  icon = null,
  border = "border",
}) => {
  return (
    <div
      className={`
        inline-flex items-center justify-center gap-2
        rounded-full ${border} ${borderColor} ${bgColor}
        ${padding} ${fontSize} ${textColor} ${fontWeight}
        transition-all duration-300
        ${hover ? "hover:opacity-80 hover:scale-105" : ""}
        ${className}
      `}
    >
      {icon && icon}
      {label}
    </div>
  );
};

export default Badges;
