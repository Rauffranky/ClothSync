import { CircleAlert } from "lucide-react";
import React from "react";

const bookingColumns = [
  {
    key: "id",
    header: "Order ID",
    sorting: true,
    render: (val) => React.createElement("span", null, val),
  },
  // {
  //   key: "date",
  //   header: "Date",
  //   sorting: true,
  //   render: (val) => <span className="">{val}</span>,
  // },
  {
    key: "startTime",
    header: "Start Time",
    render: (val) => React.createElement("span", null, val),
  },
  {
    key: "student",
    header: "Student",
    render: (val) => React.createElement("span", null, val),
  },
  {
    key: "level",
    header: "Level",
    render: (val) => React.createElement("span", null, val),
  },
  {
    key: "subject",
    header: "Subject",
    render: (val) => React.createElement("span", null, val),
  },
  {
    key: "lessonsBooked",
    header: (
      <div className="flex items-center justify-center gap-1">
        <span>Booked</span>
        <CircleAlert size={14} />
      </div>
    ),
    align: "center",
    render: (val) => React.createElement("span", null, val),
  },
  {
    key: "lessonsRemaining",
    header: (
      <div className="flex items-center justify-center gap-1">
        <span>Remaining</span>
        <CircleAlert size={14} />
      </div>
    ),
    align: "center",
    render: (val) => React.createElement("span", null, val),
  },
  {
    key: "nextLesson",
    header: "Next Lesson",
    render: (val) => React.createElement("span", null, val),
  },
];

export default bookingColumns;
