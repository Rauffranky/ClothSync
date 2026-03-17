import React, { useState } from "react";
import GlobalInput from "../../../components/UI/Form/Input";
import { SmartSelect } from "../../../components/UI/Form/Dropdown";
import Button from "../../../components/UI/button";
import { Search } from "lucide-react";
import ImageSlider from "../../../components/UI/ImageSlider";
import CardOutline from "../../../components/UI/card/CardOutline";
import TenantSearchFilter from "../../../components/UI/TenantSearchFilter";

// Mock options for the selector
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

const sliderImages = [
  "/landing-images/hero-image-tree.svg",
  "/landing-images/hero-Property 1=Variant2.svg",
  "/landing-images/hero-Property 1=Variant3.svg",
];

const Hero = () => {
  const [level, setLevel] = useState((levelOptions.find(o => o.value != null) || levelOptions[0]).value);
  const [subject, setSubject] = useState((subjectOptions.find(o => o.value != null) || subjectOptions[0]).value);

  const handleSearch = () => {
    console.log("Searching for:", { level, subject });
    // Handle search logic here
  };

  return (
    <section
      className="relative overflow-visible"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #E8F5E9 60%, #7FAB83 100%)",
      }}
    >
      <container className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-1">
        {/* Left Content */}
        <div className="text-left space-y-2">
          <div>
            <div>
              <h1 className="font-semibold ">
                Find <span className="text-primary">Verified Tenants</span>
              </h1>
              <h5 className=" text-gray-600 ">
                Hire the best tenants for private tuition, and help secure your
                child's future.
              </h5>
            </div>
            <div className="flex lg:hidden relative aspect-square md:aspect-auto  justify-center" >
              <ImageSlider
                images={sliderImages}
                className="w-full h-full sm:w-96 sm:h-96 "
                interval={4000}
              />
            </div>
          </div>

          <TenantSearchFilter
            level={level}
            setLevel={setLevel}
            subject={subject}
            setSubject={setSubject}
            levelOptions={levelOptions}
            subjectOptions={subjectOptions}
            className="mt-10 mb-5"
            onSearch={handleSearch}
          />
        </div>

        {/* Right Content - Slider */}
        <div className="hidden lg:flex relative w-full aspect-square">
          <ImageSlider
            images={sliderImages}
            className="w-full h-full"
            interval={4000}
          />
        </div>
      </container>

      {/* Decorative elements */}
      {/* <div className="absolute top-10 right-[-5%] w-64 h-64 bg-green-200/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-10 left-[-5%] w-96 h-96 bg-green-100/30 rounded-full blur-3xl pointer-events-none"></div> */}
    </section>
  );
};

export default Hero;
