import React from "react";

const bookingColumnsPast = [
  {
    key: "id",
    header: "Lesson ID",
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
    key: "Student",
    header: "Student",
    render: (val) => React.createElement("span", null, val),
  },
  {
    key: "Laundry",
    header: "Laundry",
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
    key: "LessonDate",
    header: "Lesson Date",
    render: (val) => React.createElement("span", null, val),
  },
  {
    key: "LessonTime",
    header: "Lesson Time",
    render: (val) => React.createElement("span", null, val),
  },
];

export default bookingColumnsPast;
