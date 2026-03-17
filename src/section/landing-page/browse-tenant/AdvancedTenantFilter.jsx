import React, { useState } from "react";
import { Search, Info, Check, ChevronDown } from "lucide-react";
import Button from "../../../components/UI/button";
import { SmartSelect } from "../../../components/UI/Form/Dropdown";
import Checkbox from "../../../components/UI/check-box";

const AdvancedTenantFilter = ({ onApplyFilter, className = "" }) => {
  const [filters, setFilters] = useState({
    online: true,
    inPerson: true,
    qualifiedTeacher: false,
    senExperience: false,
    backgroundCheck: false,
    zipCode: "",
    radius: "",
    examBoard: "",
  });

  //   const toggleFilter = (key) => {
  //     setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  //   };

  const handleInputChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const examBoardOptions = [
    { label: "AQA", value: "aqa" },
    { label: "Edexcel", value: "edexcel" },
    { label: "OCR", value: "ocr" },
    { label: "WJEC", value: "wjec" },
  ];
  //   const locationOptions = [
  //     { label: "London", value: "london" },
  //     { label: "Manchester", value: "manchester" },
  //     { label: "Birmingham", value: "birmingham" },
  //     { label: "Leeds", value: "leeds" },
  //   ];

  const radiusOptions = [
    { label: "National", value: "National" },
    { label: "5 Km", value: "5" },
    { label: "10 Km", value: "10" },
    { label: "15 Km", value: "15" },
    { label: "20 Km", value: "20" },
    { label: "25 Km", value: "25" },
    { label: "30 Km", value: "30" },
    { label: "35 Km", value: "35" },
    { label: "50 Km", value: "50" },
    { label: "100 km", value: "100" },
  ];

  return (
    <div
      className={` space-y-4 animate-in fade-in slide-in-from-top-4 duration-500 ${className}`}
    >
      {/* First Row: Status & Qualifications */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Online / In Person Segment */}
        <div className="w-full md:w-auto flex items-center gap-6 px-4 sm:px-6 py-2 border-2 border-[#A4A4A4] rounded-xl">
          <Checkbox label="Online" />

          <Checkbox label="In Person" />
        </div>

        {/* Qualifications Segment */}
        <div className="w-full md:flex-1 flex flex-wrap items-center gap-4 md:gap-8 px-4 sm:px-6 py-2 border-2 border-[#A4A4A4] rounded-xl">
          {[
            { key: "qualifiedTeacher", label: "Qualified Teacher" },
            { key: "senExperience", label: "SEN Experience" },
            { key: "backgroundCheck", label: "Background Check" },
          ].map((item) => (
            <div key={item.key} className="flex items-center gap-2 group">
              <Checkbox label={item.label} />
              <Info size={16} className="text-gray-400 cursor-help" />
            </div>
          ))}
        </div>

        {/* Exam Board Segment */}
        <div className="w-full md:w-70">
          <SmartSelect
            options={examBoardOptions}
            value={filters.examBoard}
            onChange={(val) => handleInputChange("examBoard", val)}
            placeholder="Exam Board"
            placeholderClassName="text-secondary"
          selectedValueClassName="text-secondary font-medium "
            triggerClassName="!rounded-[12px] !bg-[#F8FAF8] border-2 !border-[#A4A4A4] !px-4 sm:!px-6 !py-3 text-[14px] !font-medium shadow-none h-auto"
            label=""
          />
        </div>
      </div>

      {/* Second Row: Location & Apply */}
      <div className="flex flex-col lg:flex-row gap-4 items-stretch md:items-center">
        {/* Location Input Group */}
        <div className="grid md:grid-cols-2 min-w-0 w-full border-2 border-[#A4A4A4] rounded-xl bg-[#F8FAF8] ">
          <div className="flex-1 flex items-center px-3 sm:px-4 py-2 md:border-r-2 md:border-[#A4A4A4] ">
            <input
              type="text"
              placeholder="Enter Zip/Post Code"
              className="w-full bg-translaundry outline-none text-[14px] font-medium text-secondary placeholder:text-secondary"
              value={filters.zipCode}
              onChange={(e) => handleInputChange("zipCode", e.target.value)}
            />
            <Search size={18} className="text-gray-400 ml-2" />
          </div>
          <div className="w-full px-3 sm:px-4 py-2 flex items-center justify-between cursor-pointer md:border-l md:border-gray-200">
            <SmartSelect
              options={radiusOptions}
              value={filters.radius}
              onChange={(val) => handleInputChange("radius", val)}
              placeholder="Radius Km"
              placeholderClassName="text-secondary"
              selectedValueClassName="text-secondary font-medium "
              triggerClassName=" !rounded-none !border-none !bg-translaundry !px-1 !py-1 text-[14px] !font-medium shadow-none h-auto w-full text-left"
              label=""
            />
          </div>
        </div>

        {/* Apply Filter Button */}
        <div className="w-full md:w-auto ">
          <Button
            label="Apply Filter"
            variant="primary"
            onClick={() => onApplyFilter(filters)}
            className="w-full h-12 bg-[linear-gradient(96deg,#2E7D32_0.45%,#66BB6A_75.9%)] hover:opacity-90 transition-opacity text-white font-bold text-[15px] shadow-none before:hidden border-none whitespace-nowrap flex items-center justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default AdvancedTenantFilter;
