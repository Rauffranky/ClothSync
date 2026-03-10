import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/UI/button";
import Checkbox from "../../../components/UI/check-box";
import { ChevronDown } from "lucide-react";

const YourAvailabilitySection = () => {
  const navigate = useNavigate();

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [availability, setAvailability] = useState(
    daysOfWeek.reduce((acc, day) => {
      acc[day] = {
        enabled: day !== "Tuesday", // Match image where Tuesday is unchecked
        from: "15:00",
        to: "15:00",
      };
      return acc;
    }, {}),
  );

  const handleToggleDay = (day) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: { ...prev[day], enabled: !prev[day].enabled },
    }));
  };

  const handleTimeChange = (day, field, value) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: { ...prev[day], [field]: value },
    }));
  };

  const handleContinue = () => {
    console.log("Availability Submitted", availability);
    navigate("/auth/profile-preview"); // Or next step
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="mb-10 font-normal! text-center">Your Availability</h2>

      <div className="w-full max-w-[500px]">
        {/* Table Headers */}
        <div className="grid grid-cols-[1fr_120px_60px] sm:grid-cols-[1fr_1fr_1fr] gap-4 mb-4 px-2">
          <h5 className="text-[#1E1E1E] text-left font-normal ">Days:</h5>
          <h5 className="text-[#1E1E1E] sm:text-left font-normal ">From:</h5>
          <h5 className="text-[#1E1E1E] text-left font-normal ">To:</h5>
        </div>

        {/* Days Rows */}
        <div className="space-y-4 mb-10 overflow-x-scroll overflow-y-hidden hide-scrollbar ">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="grid grid-cols-[1fr_90px_90px] sm:grid-cols-[1fr_1fr_1fr] gap-4 items-center"
            >
              <div className="flex items-center w-[90px] md:w-full ">
                <Checkbox
                  checked={availability[day].enabled}
                  onChange={() => handleToggleDay(day)}
                  label={day}
                  className="!gap-3"
                />
              </div>

              {/* From Time Selector */}
              <div className="relative">
                <select
                  disabled={!availability[day].enabled}
                  value={availability[day].from}
                  onChange={(e) =>
                    handleTimeChange(day, "from", e.target.value)
                  }
                  className={`
                    w-full appearance-none bg-[#EDEDED] border border-[#DCDCDC] rounded-[10px] 
                    py-2 px-3 text-sm text-[#555555] outline-none cursor-pointer
                    disabled:opacity-50 disabled:cursor-not-allowed
                  `}
                >
                  <option value="15:00">15:00</option>
                  {/* Add more time options if needed */}
                </select>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[#555555]">
                  <div className="flex flex-col -gap-1">
                    <ChevronDown size={12} className="rotate-180" />
                    <ChevronDown size={12} />
                  </div>
                </div>
              </div>

              {/* To Time Selector */}
              <div className="relative">
                <select
                  disabled={!availability[day].enabled}
                  value={availability[day].to}
                  onChange={(e) => handleTimeChange(day, "to", e.target.value)}
                  className={`
                    w-full appearance-none bg-[#EDEDED] border border-[#DCDCDC] rounded-[10px] 
                    py-2 px-3 text-sm text-[#555555] outline-none cursor-pointer
                    disabled:opacity-50 disabled:cursor-not-allowed
                  `}
                >
                  <option value="15:00">15:00</option>
                  {/* Add more time options if needed */}
                </select>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[#555555]">
                  <div className="flex flex-col -gap-1 text-[#1E1E1E]">
                    <ChevronDown size={12} className="rotate-180" />
                    <ChevronDown size={12} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h6 className="text-center text-[#555555] font-normal mb-6">
          You can edit availability in your dashboard
        </h6>

        <div className="w-[50%] flex justify-center mx-auto">
          <Button
            label="Continue"
            variant="primary"
            fullWidth
            onClick={handleContinue}
            className="!rounded-[15px] py-4! font-bold text-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default YourAvailabilitySection;
