import React, { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { LayoutPanelTop, ChevronRight } from "lucide-react";
import Button from "../../../components/UI/button";
import { SmartSelect } from "../../../components/UI/Form/Dropdown";
import DateNavigation from "../../../components/UI/DateNavigation";
import RescheduleModal from "../components/RescheduleModal";

const CalendarGrid = () => {
  const calendarRef = useRef(null);
  const [currentDate, setCurrentDate] = useState(new Date(2024, 9, 7)); // Oct 7, 2024
  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [viewType, setViewType] = useState("week");
  const [title, setTitle] = useState("");

  const viewOptions = [
    { label: "Week", value: "week" },
    { label: "Day", value: "day" },
    { label: "Month", value: "month" },
  ];

  // Mock events data
  const events = [
    {
      id: "1",
      title: "Tuition Farm",
      start: "2024-10-07T08:00:00",
      end: "2024-10-07T09:00:00",
      backgroundColor: "#EFF6FF",
      borderColor: "#BFDBFE",
      textColor: "#1E40AF",
    },
    {
      id: "2",
      title: "Tuition Farm",
      start: "2024-10-09T08:00:00",
      end: "2024-10-09T09:00:00",
      backgroundColor: "#EFF6FF",
      borderColor: "#BFDBFE",
      textColor: "#1E40AF",
    },
    {
      id: "3",
      title: "Service name",
      start: "2024-10-10T10:00:00",
      end: "2024-10-10T11:00:00",
      backgroundColor: "#ECFEFF",
      borderColor: "#A5F3FC",
      textColor: "#0E7490",
    },
    {
      id: "4",
      title: "Lorem Ipsum",
      start: "2024-10-07T16:00:00",
      end: "2024-10-07T17:00:00",
      backgroundColor: "#EFF6FF",
      borderColor: "#BFDBFE",
      textColor: "#1E40AF",
    },
    {
      id: "5",
      title: "Lorem Ipsum",
      start: "2024-10-07T16:00:00",
      end: "2024-10-07T17:00:00",
      backgroundColor: "#ECFEFF",
      borderColor: "#A5F3FC",
      textColor: "#0E7490",
    },
    {
      id: "6",
      title: "Third Event",
      start: "2024-10-07T16:00:00",
      end: "2024-10-07T17:00:00",
      backgroundColor: "#FFF7ED",
      borderColor: "#FED7AA",
      textColor: "#C2410C",
    },
  ];

  const handlePrev = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.prev();
    setCurrentDate(calendarApi.getDate());
  };

  const handleNext = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.next();
    setCurrentDate(calendarApi.getDate());
  };

  const handleDatesSet = (arg) => {
    const view = arg.view;
    const start = view.currentStart;
    const end = new Date(view.currentEnd);
    end.setDate(end.getDate() - 1);

    const options = { month: "long", year: "numeric" };
    const monthYear = start.toLocaleDateString("en-US", options);

    setTitle(`${monthYear}, ${start.getDate()}-${end.getDate()}th`);
  };

  const handleEventClick = (info) => {
    setSelectedEvent({
      student: info.event.title,
      date: info.event.start.toLocaleDateString("en-GB"), // DD/MM/YYYY format
      time: info.event.start.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false, // 24-hour format matching typical schedules
      }),
    });
    setIsRescheduleOpen(true);
  };

  return (
    <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
      {/* Header */}
      <div className="p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-gray-100">
        <DateNavigation
          title={title}
          onPrev={handlePrev}
          onNext={handleNext}
        />
        <SmartSelect
          options={viewOptions}
          value={viewType}
          onChange={setViewType}
          width="w-32"
          selectedValueClassName="font-normal text-[12px] text-[#666] "
          rounded="rounded-lg"
          backgroundColor="bg-[#EDEDED]"
        />
      </div>

      {/* FullCalendar */}
      <div className="flex-1 overflow-hidden p-2 sm:p-4">
        <FullCalendar
          ref={calendarRef}
          plugins={[timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          initialDate={currentDate}
          headerToolbar={false}
          events={events}
          eventClick={handleEventClick}
          datesSet={handleDatesSet}
          slotMinTime="08:00:00"
          slotMaxTime="19:00:00"
          slotDuration="01:00:00"
          allDaySlot={false}
          height="100%"
          dayHeaderFormat={{ weekday: "long", day: "numeric" }}
          slotLabelFormat={{
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }}
          eventDisplay="block"
          eventTimeFormat={{
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }}
          nowIndicator={true}
          editable={true}
          droppable={true}
          slotEventOverlap={false}
          dayMaxEvents={false}
          eventMinHeight={30}
        />
      </div>

      {/* Footer Button */}
      <div className="p-4 sm:p-6 flex justify-center border-t border-gray-100">
        <Button
          label="Links Teams Calendar"
          variant="primary"
          leftIcon={<LayoutPanelTop size={18} />}
          className="!px-4 sm:!px-8 !py-2.5 sm:!py-3 rounded-xl font-medium !bg-[#5CB35F] text-sm sm:text-base w-full sm:w-auto"
          onClick={() => setIsRescheduleOpen(true)}
        />
      </div>

      <RescheduleModal
        isOpen={isRescheduleOpen}
        onClose={() => setIsRescheduleOpen(false)}
        details={
          selectedEvent || {
            student: "Multiple",
            date: "Multiple",
            time: "Multiple",
          }
        }
      />
    </div>
  );
};

export default CalendarGrid;
