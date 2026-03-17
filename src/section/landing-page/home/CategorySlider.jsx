import React from "react";
import CardOutline from "../../../components/UI/card/CardOutline";
import Slider from "../../../components/UI/slider";

const categories = [
  { name: "Mathematics", level: "GCSE", icon: "/icons/math.svg" },
  { name: "English", level: "A-Level", icon: "/icons/eng.svg" },
  { name: "Physics", level: "IGCSE", icon: "/icons/physics.svg" },
  { name: "Biology", level: "GCSE", icon: "/icons/bio.svg" },
  { name: "Mathematics", level: "GCSE", icon: "/icons/math.svg" },
  { name: "English", level: "A-Level", icon: "/icons/eng.svg" },
  { name: "Physics", level: "IGCSE", icon: "/icons/physics.svg" },
  { name: "Biology", level: "GCSE", icon: "/icons/bio.svg" },
];

const CategorySlider = () => {
  const renderCategoryCard = (cat) => (
    <CardOutline
      shadow="shadow-inner-full"
      bg="bg-white"
      border="border-none"
      className="w-full flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform"
      padding="py-3 px-2"
    >
      <img src={cat.icon} alt={cat.name} className="w-10 h-10 mb-3" />
      <span className="font-bold text-[16px] text-[#2E7D32]">{cat.name}</span>
      <span className="text-[15px] mt-1 uppercase text-[#646464]">
        {cat.level}
      </span>
    </CardOutline>
  );

  return (
    <CardOutline
      border="border-none"
      shadow="shadow-[0_51.785px_51.785px_0_rgba(81,77,89,0.10),0_12.682px_28.534px_0_rgba(81,77,89,0.10)]"
      rounded="rounded-none"
      bg="bg-translaundry"
      className="py-1 px-12! overflow-hidden relative"
      style={{
        background:
          "linear-gradient(180deg, rgba(232, 245, 234, 0.80) 0%, rgba(231, 246, 236, 0.7) 91.57%)",
        backdropFilter: "blur(26.42078971862793px)",
      }}
    >
      <div className="mx-auto relative px-6 py-4">
        <Slider
          items={categories}
          renderSlide={renderCategoryCard}
          showNavigation={true}
          showPagination={false} // categories me dots usually nahi chahye; true karna ho to kar do
          autoplayConfig={false}
          breakpoints={{
            320: { slidesPerView: 1.4, spaceBetween: 12 },
            480: { slidesPerView: 2.2, spaceBetween: 14 },
            640: { slidesPerView: 3.1, spaceBetween: 16 },
            768: { slidesPerView: 4.1, spaceBetween: 16 },
            1024: { slidesPerView: 5.2, spaceBetween: 18 },
            1280: { slidesPerView: 6.2, spaceBetween: 18 },
          }}
          spaceBetween={16}
        />
      </div>
    </CardOutline>
  );
};

export default CategorySlider;
