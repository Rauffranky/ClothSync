import React, { useState } from "react";
import TutorSearchFilter from "../../components/UI/TutorSearchFilter";
import BrowseTutorList from "../../section/landing-page/browse-tutor/BrowseTutorList";
import {
  List,
  Map as MapIcon,
  ChevronDown,
  MapPin,
  LayoutList,
} from "lucide-react";
import { SmartSelect } from "../../components/UI/Form/Dropdown";
import Button from "../../components/UI/button";
import AdvancedTutorFilter from "../../section/landing-page/browse-tutor/AdvancedTutorFilter";
import ViewTabs from "../../components/UI/tabs/ViewTabs";
import MapView from "../../section/landing-page/browse-tutor/MapView";
import { Helmet } from "@dr.pogodin/react-helmet";

const levelOptions = [
  { label: "GCSE", value: "gcse" },
  { label: "A-Level", value: "a-level" },
  { label: "IGCSE", value: "igcse" },
];

const subjectOptions = [
  { label: "Mathematics", value: "mathematics" },
  { label: "English", value: "english" },
  { label: "Physics", value: "physics" },
  { label: "Biology", value: "biology" },
];

const sortOptions = [
  { label: "Nearest Me", value: "Nearest Me" },
  { label: "Best Reviews", value: "Best Reviews" },
  { label: "Hourly Rate - High to Low", value: "price-desc" },
  { label: "Hourly Rate - Low to High", value: "price-asc" },
];

const viewOptions = [
  { label: "List View", value: "list", icon: LayoutList },
  { label: "Map View", value: "map", icon: MapPin },
];

const BrowseTutors = () => {
  const [level, setLevel] = useState(
    (levelOptions.find((o) => o.value != null) || levelOptions[0]).value
  );
  const [subject, setSubject] = useState(
    (subjectOptions.find((o) => o.value != null) || subjectOptions[0]).value
  );
  const [sortBy, setSortBy] = useState("price-desc");
  const [view, setView] = useState("list");
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);

  const handleSearch = () => {
    console.log("Searching for:", { level, subject });
  };

  const handleApplyFilter = (advancedFilters) => {
    console.log("Applying advanced filters:", advancedFilters);
    // Integrate with search logic here
  };

  return (
    <div className="bg-tertiary/30 ">
      <Helmet>
        <title>Browse Tutors | Tuition Farm</title>
        <meta name="description" content="Find the best tutors for your needs." />
      </Helmet>
      {/* Header Section */}
      <header className="py-6 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h1 className="text-[40px] font-bold text-[#1E1E1E] mt-5 ">
            Find & Hire Verified Tutors
          </h1>

          <div className="">
            <TutorSearchFilter
              level={level}
              setLevel={setLevel}
              subject={subject}
              setSubject={setSubject}
              levelOptions={levelOptions}
              subjectOptions={subjectOptions}
              onSearch={handleSearch}
            />

            <div className="flex flex-col items-center mt-5 ">
              <Button
                label={showAdvancedOptions ? "Close Filter" : "Filter Results"}
                variant=""
                className="text-primary font-medium hover:underline cursor-pointer transition-all duration-300"
                onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
              />

              <div
                className={`w-full transition-all duration-500 ease-in-out ${showAdvancedOptions
                  ? "overflow-visible mt-5 opacity-100 max-h-500"
                  : "overflow-hidden max-h-0 opacity-0"
                  }`}
              >
                <AdvancedTutorFilter onApplyFilter={handleApplyFilter} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <main className="max-w-7xl mx-auto pb-16 px-6 lg:px-0 ">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          {/* View Toggles */}
          <ViewTabs
            options={viewOptions}
            activeValue={view}
            onChange={setView}
          />

          {/* Sort By (styled like image) */}
          <div className="w-full md:w-auto rounded-xl border-2 border-[#A3A3A3] bg-transparent flex items-center gap-3 px-4 py-2">
            <span className="text-[#1E1E1E] font-semibold text-[18px] whitespace-nowrap">
              Sort By
            </span>

            <div className="flex-1 min-w-50">
              <SmartSelect
                options={sortOptions}
                value={sortBy}
                onChange={setSortBy}
                placeholderClassName="!font-[400] text-secondary "
                triggerClassName="!rounded-none !border-none !bg-transparent !px-0 !py-0 text-[16px] !font-medium shadow-none h-auto w-full text-left"
                label=""
              />
            </div>
          </div>
        </div>

        {/* Content Area: List or Map */}
        {view === "list" ? <BrowseTutorList /> : <MapView />}
      </main>
    </div>
  );
};

export default BrowseTutors;
