import React, { useState } from "react";
import CardOutline from "../../../components/UI/card/CardOutline";
import GlobalInput from "../../../components/UI/Form/Input";
import { SmartSelect } from "../../../components/UI/Form/Dropdown";
import { Badge, Search } from "lucide-react";
import Badges from "../../../components/UI/badges";

const LocationBreakdown = () => {
  const [single, setSingle] = useState(null);
  const [text, setText] = useState("");
  const [city, setCity] = useState("");
  const [status, setStatus] = useState("");
  const country = [
    {
      value: "Pakistan",
      label: "Pakistan",
    },
    {
      value: "India",
      label: "India",
    },
    {
      value: "United States",
      label: "United States",
    },
    {
      value: "United Kingdom",
      label: "United Kingdom",
    },
  ];
  const cites = [
    {
      value: "Lahore",
      label: "Lahore",
    },
    {
      value: "Karachi",
      label: "Karachi",
    },
    {
      value: "Islamabad",
      label: "Islamabad",
    },
    {
      value: "Rawalpindi",
      label: "Rawalpindi",
    },
  ];
  const statuses = [
    {
      value: "Active",
      label: "Active",
    },
    {
      value: "Inactive",
      label: "Inactive",
    },
  ];
  const properties = [
    {
      id: 1,
      image:
        "https://thumbs.dreamstime.com/b/beautiful-new-home-exterior-clear-evening-provides-setting-luxurious-34711767.jpg",
      address: "8460 Rockville Ave. Greenville, NC 27834",
      bgColor: "bg-[#F28F8F80]",
      borderColor: "border-[#F28F8F]",
      label: "Vacant",
    },
    {
      id: 2,
      image:
        "https://thumbs.dreamstime.com/b/beautiful-new-home-exterior-clear-evening-provides-setting-luxurious-34711767.jpg",
      address: "8460 Rockville Ave. Greenville, NC 27834",
      bgColor: "bg-[#4BCBEB80]",
      borderColor: "border-[#4BCBEB]",
      label: "Under maintenance",
    },
    {
      id: 3,
      image:
        "https://thumbs.dreamstime.com/b/beautiful-new-home-exterior-clear-evening-provides-setting-luxurious-34711767.jpg",
      address: "8460 Rockville Ave. Greenville, NC 27834",
      bgColor: "bg-[#F28F8F80]",
      borderColor: "border-[#F28F8F]",
      label: "Vacant",
    },
    {
      id: 4,
      image:
        "https://thumbs.dreamstime.com/b/beautiful-new-home-exterior-clear-evening-provides-setting-luxurious-34711767.jpg",
      address: "8460 Rockville Ave. Greenville, NC 27834",
      bgColor: "bg-[#1BCFB480]",
      borderColor: "border-[#1BCFB4]",
      label: "Occupied",
    },
    {
      id: 5,
      image:
        "https://thumbs.dreamstime.com/b/beautiful-new-home-exterior-clear-evening-provides-setting-luxurious-34711767.jpg",
      address: "8460 Rockville Ave. Greenville, NC 27834",
      bgColor: "bg-[#F28F8F80]",
      borderColor: "border-[#F28F8F]",
      label: "Vacant",
    },
    {
      id: 6,
      image:
        "https://thumbs.dreamstime.com/b/beautiful-new-home-exterior-clear-evening-provides-setting-luxurious-34711767.jpg",
      address: "8460 Rockville Ave. Greenville, NC 27834",
      bgColor: "bg-[#F28F8F80]",
      borderColor: "border-[#F28F8F]",
      label: "Vacant",
    },
  ];

  return (
    <div className="h-full ">
      <CardOutline border="border-0" className="h-full">
        <div className="flex justify-between flex-wrap">
          <div>
            <p className="text-[24px] font-[500]">Location Breakdown</p>
            <p className="text-black/60 text-[12px]">
              30 properties (5 vacant, 5 under maintenance, 20 occupied)
            </p>
          </div>
          <div className="flex gap-2 flex-wrap mt-4 md:mt-0">
            <GlobalInput
              placeholder="Search something..."
              value={text}
              onChange={setText}
              rightIcon={<Search size={16} className="text-black/60" />}
            />
            <SmartSelect
              options={country}
              value={single}
              onChange={setSingle}
              placeholder="Select country"
              className=""
              name="single"
            />
            <SmartSelect
              options={cites}
              value={city}
              onChange={setCity}
              placeholder="Select city"
              className=""
              name="single"
            />
            <SmartSelect
              options={statuses}
              value={status}
              onChange={setStatus}
              placeholder="Select status"
              className=""
              name="single"
            />
          </div>
        </div>
        <div className="flex gap-2 overflow-x-auto hide-scrollbar mt-[30px]" >
          {properties.map((property) => (
            <CardOutline
              key={property.id}
            //   border="border-0"
              padding="px-2 py-3"
              shadow="shadow-none"
            >
              <img
                className="rounded-[15px] w-[220px] h-[250px] object-cover"
                src={property.image}
                alt={property.address}
              />
              <p className="truncate text-[12px] my-[12px]">
                {property.address}
              </p>
              <Badges
                bgColor={property.bgColor}
                borderColor={property.borderColor}
                label={property.label}
              />
            </CardOutline>
          ))}
        </div>
      </CardOutline>
    </div>
  );
};

export default LocationBreakdown;
