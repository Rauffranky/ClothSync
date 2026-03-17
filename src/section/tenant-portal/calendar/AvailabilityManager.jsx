import React, { useState } from "react";
import CardOutline from "../../../components/UI/card/CardOutline";
import Checkbox from "../../../components/UI/check-box";
import GlobalInput from "../../../components/UI/Form/Input";
import Button from "../../../components/UI/button";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const AvailabilityManager = () => {
  const [availability, setAvailability] = useState(
    daysOfWeek.reduce((acc, day) => {
      acc[day] = {
        enabled: day !== "Tuesday", // Mocking based on image (Tuesday is unchecked)
        from: "15:00",
        to: "15:00",
      };
      return acc;
    }, {}),
  );

  const handleToggle = (day, checked) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: { ...prev[day], enabled: checked },
    }));
  };

  const handleTimeChange = (day, field, value) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: { ...prev[day], [field]: value },
    }));
  };

  return (
    <CardOutline
      padding="py-4"
      className="bg-translaundry! !shadow-none border-none"
    >
      <div className="space-y-4 overflow-x-auto hide-scrollbar ">
        {/* Days Row */}
        <div className="flex  items-center gap-x-14 gap-y-4">
          <span className="text-[18px] font-medium min-w-[60px]">Days:</span>
          {daysOfWeek.map((day) => (
            <div key={day} className="flex items-center">
              <Checkbox
                label={day}
                checked={availability[day].enabled}
                onChange={(checked) => handleToggle(day, checked)}
              />
            </div>
          ))}
        </div>

        {/* From Row */}
        <div className="flex  items-center gap-x-8 gap-y-4">
          <span className="text-[18px] font-medium min-w-[60px]">From:</span>
          {daysOfWeek.map((day) => (
            <div key={`from-${day}`} className="w-[120px]">
              <GlobalInput
                type="time"
                value={availability[day].from}
                onChange={(val) => handleTimeChange(day, "from", val)}
                disabled={!availability[day].enabled}
                className="!h-10 border-[#EDEDED] rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* To Row */}
        <div className="flex items-center gap-x-8 gap-y-4">
          <span className="text-[18px] font-medium min-w-[60px]">To:</span>
          {daysOfWeek.map((day) => (
            <div key={`to-${day}`} className="w-[120px]">
              <GlobalInput
                type="time"
                value={availability[day].to}
                onChange={(val) => handleTimeChange(day, "to", val)}
                disabled={!availability[day].enabled}
                className="!h-10 border-[#E5E5E5] rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Save Button */}
      <div className="flex justify-end mt-2  ">
        <Button
          label="Save"
          variant="primary"
          className="!px-10 !py-2.5 rounded-xl font-medium"
          onClick={() => console.log("Saving availability:", availability)}
        />
      </div>
    </CardOutline>
  );
};

export default AvailabilityManager;
