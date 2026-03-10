import React from "react";
import AvailabilityManager from "./AvailabilityManager";
import CalendarGrid from "./CalendarGrid";

const CalendarSection = () => {
  return (
    <div className=" space-y-1">
      <h2 className="text-[20px]! font-semibold! mt-6">Availability</h2>
      <div>
        <AvailabilityManager />
      </div>

      <div className="h-[calc(100vh-400px)] min-h-[800px]">
        <CalendarGrid />
      </div>
    </div>
  );
};

export default CalendarSection;
