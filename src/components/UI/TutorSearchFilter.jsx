import React from "react";
import { SmartSelect } from "./Form/Dropdown";
import Button from "./button";
import { Search } from "lucide-react";
import CardOutline from "./card/CardOutline";

const TutorSearchFilter = ({
  level,
  setLevel,
  subject,
  setSubject,
  levelOptions = [],
  subjectOptions = [],
  className = "",
  onSearch,
}) => {
  return (
    <CardOutline
      className={className}
      border="border-none"
      padding="py-[9px] px-[8px] md:px-[12px]"
    >
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex-1 ">
          <SmartSelect
            label="Choose Level"
            rounded="rounded-[10px]"
            options={levelOptions}
            value={level}
            onChange={setLevel}
            // placeholder="Choose Level"
            width="w-full"
            labelClassName="text-[10px] uppercase text-label"
            triggerClassName="data-[state=open]:!border-[#2E7D32]"
          />
        </div>

        <div className="flex-1">
          <SmartSelect
            rounded="rounded-[10px]"
            label="Select Subject"
            options={subjectOptions}
            value={subject}
            onChange={setSubject}
            // placeholder="Choose Level"
            width="w-full"
            labelClassName="text-[10px] uppercase text-label"
            triggerClassName="data-[state=open]:!border-[#2E7D32]"
          />
        </div>

        <div>
          <Button
            label="Search"
            variant="primary"
            onClick={onSearch}
            rightIcon={<Search size={18} />}
            className="h-[50px] w-full px-6 bg-[#4CAF50] hover:bg-[#45a049] shadow-none before:hidden justify-center"
          />
        </div>
      </div>
    </CardOutline>
  );
};

export default TutorSearchFilter;
