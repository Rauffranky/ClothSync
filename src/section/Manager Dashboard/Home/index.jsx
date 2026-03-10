import React from "react";
import LiveClockPill from "../../../components/clock";
import StatsBox from "../../../components/UI/stats";
import Badges from "../../../components/UI/badges";
import { Building2 } from "lucide-react";
import LocationBreakdown from "./locationBreakdown";

const HomeSection = () => {
  const statsData = [
    {
      icon: <Building2 size={24} />,
      Text: "Total Properties",
      count: "1,000",
    },
    {
      icon: <Building2 size={24} />,
      Text: "Vacant",
      count: "190",
      Badges: (
        <Badges
          bgColor="bg-[#FFB40080]"
          borderColor="border-primary"
          label="90%"
        />
      ),
    },
    {
      icon: <Building2 size={24} />,
      Text: "Occupied",
      count: "80",
      Badges: (
        <Badges
          bgColor="bg-[#FFB40080]"
          borderColor="border-primary"
          label="80%"
        />
      ),
    },
    {
      icon: <Building2 size={24} />,
      Text: "Under maintenance",
      count: "10",
      Badges: (
        <Badges
          bgColor="bg-[#FFB40080]"
          borderColor="border-primary"
          label="1%"
        />
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-[35px] leading-[35px]">Welcome Back, Abdul Rauf</h1>
        <div className="hidden md:block">
          <LiveClockPill />
        </div>
      </div>
      <hr className="border-b border-black/10 my-4" />
      <div className="mb-4">
        <p className="text-[24px] font-[500]">Dashboard</p>
        <p className="text-[12px] text-black/60">Dashboard Overview</p>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-3 space-y-[14px]">
          {statsData.map((item, idx) => (
            <StatsBox key={idx} {...item} />
          ))}
        </div>
        <div className=" col-span-12 md:col-span-9 ">
          <div className="h-full">
            <LocationBreakdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
