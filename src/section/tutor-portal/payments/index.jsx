import React from "react";
import { Pencil } from "lucide-react";
import Button from "../../../components/UI/button";
import DataTable from "../../../components/UI/table";
import LinkedAccountCard from "./LinkedAccountCard";
import PaymentFilters from "./PaymentFilters";
import { paymentColumns, mockPayments } from "./payments-table";
import PaymentStats from "./card-summary";
import Pagination from "../../../components/UI/pagination";

const Payments = () => {
  const handleWithdraw = () => {
    console.log("Withdraw funds clicked");
  };

  const handleFilterChange = (filters) => {
    console.log("Filters changed:", filters);
  };

  const handleExportCSV = () => {
    console.log("Export CSV clicked");
  };

  const handleExportPDF = () => {
    console.log("Export PDF clicked");
  };

  return (
    <div className="space-y-6 mt-6">
      <h4 className="font-semibold">Payments</h4>
      <PaymentStats />
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
        {/* Left - Card Section */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <h4 className="text-[18px] font-semibold text-[#1E1E1E]">
              Linked Account
            </h4>
            <button className="p-1 hover:bg-gray-100 rounded transition-colors cursor-pointer">
              <Pencil size={16} className="text-gray-500" />
            </button>
          </div>
          <LinkedAccountCard cardNumber="**** **** **** 3507" />
        </div>

        {/* Right - Withdraw Button */}
        <div className="lg:self-start">
          <Button
            label="Withdraw Funds Now"
            variant="primary"
            size="md"
            onClick={handleWithdraw}
          />
        </div>
      </div>

      {/* Filters Section */}
      <div className="">
        <PaymentFilters
          onFilterChange={handleFilterChange}
          onExportCSV={handleExportCSV}
          onExportPDF={handleExportPDF}
        />
      </div>

      {/* Table Section */}
      <div className="overflow-hidden">
        <DataTable
          columns={paymentColumns}
          rows={mockPayments}
          selectable={false}
          headerBg="bg-white"
        />
      </div>
      <div className="flex justify-end mt-4">
        <Pagination
          totalItems={15}
          itemsPerPage={5}
          currentPage={1}
          onPageChange={() => {}}
        />
      </div>
    </div>
  );
};

export default Payments;
