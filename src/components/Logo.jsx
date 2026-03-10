import React from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

const Logo = ({ width = 68, height = 68, className, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate("/");
    }
  };

  return (
    <div className={clsx("cursor-pointer", className)} onClick={handleClick}>
      <img
        src="/tuition-farm-logo.svg"
        alt="LOGO"
        style={{ width: width, height: height }}
      />
    </div>
  );
};

export default Logo;
