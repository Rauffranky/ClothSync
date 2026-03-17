import React, { useState } from "react";
import DateNavigation from "../../../components/UI/DateNavigation";
import ViewTabs from "../../../components/UI/tabs/ViewTabs";

import DataTable from "../../../components/UI/table";
import Actions, { mockBookings } from "./booking-table";
import Pagination from "../../../components/UI/pagination";
import bookingColumns from "./bookingColumns";

const Bookings = () => {
  //   const [bookingType, setBookingType] = useState("this-week");
  const [currentDate, setCurrentDate] = useState(new Date(2024, 9, 7)); // Oct 7, 2024

  const handlePrev = () => {
    setCurrentDate((prev) => {
      const date = new Date(prev);
      date.setDate(date.getDate() - 6);
      return date;
    });
  };

  const handleNext = () => {
    setCurrentDate((prev) => {
      const date = new Date(prev);
      date.setDate(date.getDate() + 6);
      return date;
    });
  };

  const formatDateRange = (start) => {
    const end = new Date(start);
    end.setDate(end.getDate() + 6);

    const options = { month: "long", year: "numeric" };
    const monthYear = start.toLocaleDateString("en-US", options);

    return `${monthYear}, ${start.getDate()}-${end.getDate()}th`;
  };

  //   const tabOptions = [
  //     { label: "This Weeks Bookings", value: "this-week" },
  //     { label: "Future Booking", value: "future" },
  //   ];

  // Merge columns with the Actions column
  const columns = [
    ...bookingColumns,
    {
      key: "actions",
      header: "Actions",
      align: "center",
      render: (_, row) => <Actions row={row} />,
    },
  ];

  return (
    <div className="mt-6">
      <h4 className="font-semibold">Upcoming Classes</h4>
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Date Navigation Slider */}
        <DateNavigation
          title={formatDateRange(currentDate)}
          onPrev={handlePrev}
          onNext={handleNext}
        />

        {/* Tabs */}
        {/* <ViewTabs
          options={tabOptions}
          activeValue={bookingType}
          onChange={setBookingType}
        /> */}
      </div>

      {/* Table Area */}
      <div className="overflow-hidden mt-3">
        <DataTable
          columns={columns}
          rows={mockBookings}
          selectable={false}
          rowBg="bg-[#F0F0F0]"
          headerBg="bg-white border-b border-[#F1F5F9]"
        />
      </div>
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

export default Bookings;
