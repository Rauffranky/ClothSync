import React from "react";
import Badges from "../badges";
import CardOutline from "../card/CardOutline";

const StatsBox = ({
  icon,
  Text = "",
  count = 0,
  subText = "",
  Badges = "",
  className = "",
}) => {
  return (
    <CardOutline className={className}>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          {icon}
          <p className="text-[18px]"> {Text}</p>
        </div>
        <div>{Badges}</div>
      </div>
      <div className="mt-4">
        <h1 className="text-[30px] mb-0 leading-[30px] font-bold">{count}</h1>
        {subText && <p className="text-[12px] text-black/40">{subText}</p>}
      </div>
    </CardOutline>
  );
};

export default StatsBox;
