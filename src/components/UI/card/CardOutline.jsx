// src/components/common/CardOutline.jsx
import React from "react";

const CardOutline = ({
  children,
  border = "border border-border",
  rounded = "rounded-[15px]",
  bg = "bg-white",
  shadow = "shadow-md",
  padding = "py-[15px] px-[21px]",
  className = "",
  ...rest
}) => {
  return (
    <div
      className={`${border} ${rounded} ${bg} ${shadow} ${padding} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default CardOutline;
