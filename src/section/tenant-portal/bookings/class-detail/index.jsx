import React from "react";
import Pagination from "../../../../components/UI/pagination";
import Actions, { UpcomingLessons } from "./UpcomingLessonTable";
import DataTable from "../../../../components/UI/table";
import { PastLessons } from "./PastLesson";
import bookingColumnsPast from "./bookingColumnsPast";
import bookingColumns from "./bookingColumns";

const ClassDetail = () => {
  //   const tabOptions = [
  //     { label: "This Weeks Bookings", value: "this-week" },
  //     { label: "Future Booking", value: "future" },
  //   ];

  const columns1 = [
    ...bookingColumns,
    {
      key: "actions",
      header: "Actions",
      align: "center",
      render: (_, row) => <Actions row={row} />,
    },
  ];
  const columns2 = [
    ...bookingColumnsPast,
    {
      key: "actions",
      header: "Actions",
      align: "center",
      render: (_, row) => <Actions row={row} />,
    },
  ];

  return (
    <div className="mt-6">
      <h4 className="font-semibold">Classes Detail </h4>
      <h5 className="font-semibold mt-2">Upcoming Lessons</h5>
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Date Navigation Slider */}

        {/* Tabs */}
        {/* <ViewTabs
          options={tabOptions}
          activeValue={bookingType}
          onChange={setBookingType}
        /> */}
      </div>
      <div className="overflow-hidden mt-3">
        <DataTable
          columns={columns1}
          rows={UpcomingLessons}
          selectable={false}
          rowBg="bg-[#F0F0F0]"
          headerBg="bg-white border-b border-[#F1F5F9]"
        />
      </div>

      {/* Table Area */}
      <div className="flex justify-end mt-4">
        <Pagination
          totalItems={60}
          itemsPerPage={10}
          currentPage={1}
          onPageChange={() => {}}
        />
      </div>
      <h5 className="font-semibold mt-2">Past Lessons</h5>
      <div className="overflow-hidden mt-3">
        <DataTable
          columns={columns2}
          rows={PastLessons}
          selectable={false}
          rowBg="bg-[#F0F0F0]"
          headerBg="bg-white border-b border-[#F1F5F9]"
        />
      </div>

      {/* Table Area */}
      <div className="flex justify-end mt-4">
        <Pagination
          totalItems={60}
          itemsPerPage={10}
          currentPage={1}
          onPageChange={() => {}}
        />
      </div>
    </div>
  );
};

export default ClassDetail;
