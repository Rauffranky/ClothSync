import React from "react";
import CardOutline from "../../../components/UI/card/CardOutline";
import Button from "../../../components/UI/button";
import { Star, ArrowRight } from "lucide-react";
import Badges from "../../../components/UI/badges";
import Slider from "../../../components/UI/slider";

const tutors = [
  {
    name: "Emma J.",
    subject: "Maths Expert",
    tags: ["Mathematics", "GCSE", "A-Level"],
    rating: 5,
    reviews: 112,
    description: "Makes learning enjoyable and engaging!",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Sarah Bennett",
    subject: "English & Reading Specialist",
    tags: ["English", "Creative Writing", "O-Level"],
    rating: 5,
    reviews: 315,
    description: "Her explanations are clear and confidence-boosting!",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "Jason Miller",
    subject: "Physics & STEM Coach",
    tags: ["Physics", "IGCSE", "SAT Prep"],
    rating: 5,
    reviews: 1143,
    description: "Breaks down complex concepts into simple steps!",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Emily Carter",
    subject: "Chemistry & Lab Instructor",
    tags: ["Chemistry", "A-Level", "Practical"],
    rating: 5,
    reviews: 1118,
    description: "Makes learning chemistry fun and less overwhelming!",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
  },
  {
    name: "Emily Carter",
    subject: "Chemistry & Lab Instructor",
    tags: ["Chemistry", "A-Level", "Practical"],
    rating: 5,
    reviews: 1118,
    description: "Makes learning chemistry fun and less overwhelming!",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
  },
];

const TopTutors = () => {
  // Render function for each tutor card
  const renderTutorCard = (tutor) => (
    <CardOutline
      className="flex flex-col items-center text-center bg-white border-border cursor-pointer h-[400px] hover:translate-y-[-5px] transition-all duration-300"
      shadow="shadow-none"
      rounded="rounded-[24px]"
    >
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-3 border-border">
        <img
          src={tutor.image}
          alt={tutor.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="font-semibold text-lg mb-1">{tutor.name}</h3>

      {/* Subject */}
      <p className="text-text text-sm mb-3">{tutor.subject}</p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-1.5 mb-3">
        {tutor.tags.map((tag, i) => (
          <Badges
            key={i}
            label={tag}
            bgColor="bg-tertiary"
            textColor="text-primary"
            border="border-none"
            className="text-[10px] px-2.5 py-1"
          />
        ))}
      </div>

      {/* Rating */}
      <div className="flex items-center justify-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className="fill-[#FFD700] text-[#FFD700]"
          />
        ))}
        <span className="text-[11px] text-text ml-1">
          ({tutor.reviews} Reviews)
        </span>
      </div>

      {/* Description */}
      <p className="text-text italic text-sm mb-6 leading-relaxed px-2">
        "{tutor.description}"
      </p>

      {/* View Profile Button */}
      <Button
        variant=""
        label="View Profile"
        rightIcon={<ArrowRight size={16} />}
        className="cursor-pointer text-primary font-semibold hover:underline text-sm mt-auto"
      />
    </CardOutline>
  );

  return (
    <div className="md:pb-30 md:pt-60 md:-mt-22.5 py-12 px-6 relative overflow-hidden">
      <img
        src="/landing-images/clouds.svg"
        alt="Cloud decoration"
        className="
          absolute
          top-30
          left-20
          w-40
          md:w-76
          opacity-80
          z-1
          pointer-events-none
          hidden md:block
        "
      />
      <img
        src="/landing-images/top-tutor-bg.svg"
        alt=""
        className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-screen z-0 object-cover"
      />

      <div className="max-w-7xl mx-auto text-center mb-16 relative z-1">
        <div className="flex justify-center mb-4">
          <img
            src="/landing-images/leaf-image.svg"
            alt="Leaves decoration"
            className="opacity-50"
          />
        </div>
        <h1 className="font-bold text-gray-900 mb-12">Top Tutors by Reviews</h1>
      </div>

      <div className="lg:px-10 px-2 mx-auto relative z-1">
        <Slider
          items={tutors}
          renderSlide={renderTutorCard}
          showNavigation={true}
          showPagination={true}
          autoplayConfig={false}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4.2,
              spaceBetween: 20,
            },
          }}
          spaceBetween={16}
        />
      </div>
    </div>
  );
};

export default TopTutors;

