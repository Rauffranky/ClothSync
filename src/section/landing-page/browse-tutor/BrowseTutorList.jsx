import React from "react";
import { useNavigate } from "react-router-dom";
import CardOutline from "../../../components/UI/card/CardOutline";
import Button from "../../../components/UI/button";
import Badges from "../../../components/UI/badges";
import {
  Star,
  MapPin,
  Users,
  CheckCircle2,
  XCircle,
  Heart,
  Info,
  ShieldCheck,
} from "lucide-react";
import Pagination from "../../../components/UI/pagination";

const tutors = [
  {
    id: 1,
    name: "Ms. Alice",
    rating: 5,
    reviews: 12,
    subject: "GCSE Physics",
    studentsTutored: 13,
    location: "Warburton, UK",
    methods: { online: true, inPerson: true },
    description:
      "Lorem ipsum dolor sit amet consectetur. Vivamus. Lorem ipsum dolor sit amet consectetur. Vivamus. Lorem ipsum dolor sit amet consectetur. Vivamus. Lorem ipsum dolor sit amet consectetur. Vivamus. Lorem ipsum dolor sit amet consectetur.",
    price: 547,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    isTopTutor: true,
    isVerified: true,
  },
  {
    id: 2,
    name: "Mr. John",
    rating: 5,
    reviews: 12,
    subject: "GCSE Physics",
    studentsTutored: 13,
    location: "Manchester, UK",
    methods: { online: true, inPerson: false },
    description:
      "Lorem ipsum dolor sit amet consectetur. Vivamus. Lorem ipsum dolor sit amet consectetur. Vivamus. Lorem ipsum dolor sit amet consectetur. Vivamus. Lorem ipsum dolor sit amet consectetur. Vivamus. Lorem ipsum dolor sit amet consectetur.",
    price: 547,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    isTopTutor: true,
    isVerified: true,
  },
  {
    id: 3,
    name: "Ms. Amelia",
    rating: 5,
    reviews: 12,
    subject: "GCSE English",
    studentsTutored: 13,
    location: "Los Angeles, USA",
    methods: { online: false, inPerson: true },
    description:
      "Lorem ipsum dolor sit amet consectetur. Vivamus. Lorem ipsum dolor sit amet consectetur. Vivamus. Lorem ipsum dolor sit amet consectetur. Vivamus. Lorem ipsum dolor sit amet consectetur. Vivamus. Lorem ipsum dolor sit amet consectetur.",
    price: 547,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    isTopTutor: true,
    isVerified: true,
  },
];

const TutorCard = ({ tutor, isFavorite, onToggleFavorite }) => {
  const navigate = useNavigate();
  return (
    <CardOutline
      className="p-6 relative bg-white border-gray-100 hover:-translate-y-1.25 transition-all duration-300"
      rounded="rounded-[24px]"
      shadow="shadow-sm"
    >
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Profile Image & Verified Icon */}
        <div className="relative shrink-0 mx-auto lg:mx-0">
          <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
              src={tutor.image}
              alt={tutor.name}
              className="w-full h-full object-cover"
            />
          </div>
          {tutor.isVerified && (
            <div className="absolute top-0 left-0 bg-white rounded-full p-1 shadow-sm border border-green-50">
              <ShieldCheck className="text-primary" size={20} fill="#E8F5E9" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-[#1E1E1E]">{tutor.name}</h3>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-[#FFD700] text-[#FFD700]"
                  />
                ))}
                <span className="text-[14px] text-[#57606A] ml-1">
                  {tutor.reviews} Reviews
                </span>
              </div>
            </div>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-[#1E1E1E] text-[15px] font-medium">
            <div className="flex items-center gap-2">
              <span>{tutor.subject}</span>
              <Info size={16} className="text-[#57606A]" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#57606A] font-normal">
                Students Tutored:
              </span>
              <span>{tutor.studentsTutored}</span>
            </div>
          </div>

          {/* Delivery Methods & Location */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              {tutor.methods.online ? (
                <CheckCircle2 size={18} className="text-primary" />
              ) : (
                <XCircle size={18} className="text-[#EB5757]" />
              )}
              <span className="text-[14px] text-[#57606A]">Online</span>
            </div>
            <div className="flex items-center gap-2">
              {tutor.methods.inPerson ? (
                <CheckCircle2 size={18} className="text-primary" />
              ) : (
                <XCircle size={18} className="text-[#EB5757]" />
              )}
              <span className="text-[14px] text-[#57606A]">In Person</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-primary" />
              <span className="text-[14px] text-[#57606A]">
                {tutor.location}
              </span>
            </div>
          </div>
        </div>

        {/* Price & Action */}
        <div className="flex flex-col justify-between items-center sm:items-end gap-4 min-w-35 mb-2 lg:mb-0 ">
          {/* Top Tutor Badge & Favorite (moved to end of card) */}
          <div className="flex justify-between w-full lg:flex-col gap-2  ">
            <div className="flex justify-end items-center gap-3">
              {tutor.isTopTutor && (
                <Badges
                  label="Top Tutor"
                  bgColor="bg-[#E8F5E9]"
                  textColor="text-[#2E7D32]"
                  borderColor="border-[#C8DCC4]"
                  padding="px-4 py-1"
                  fontWeight="font-medium"
                />
              )}
              <button
                aria-label="Add to favorites"
                className="text-[#EB5757] hover:scale-110 transition-transform"
                onClick={() => onToggleFavorite(tutor.id)}
              >
                <Heart
                  size={20}
                  className={isFavorite ? "fill-[#EB5757]" : ""}
                />
              </button>
            </div>

            <div className="text-right">
              <span className="text-[20px] font-bold text-[#1E1E1E]">
                £ {tutor.price}
              </span>
              <span className="text-[14px] text-[#57606A]">/ Lesson</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap gap-2 ">
        {/* Description */}
        <div className="max-w-[80%] ">
          <p className="text-[14px] text-[#57606A] leading-relaxed line-clamp-2">
            {tutor.description}
          </p>
        </div>
        <div className="w-full sm:w-auto">
          <Button
            variant="primary"
            label="View Profile"
            className="w-full sm:w-auto px-8 bg-[#4CAF50] hover:bg-[#45a049]  "
            onClick={() => navigate(`/tutor/${tutor.id}`)}
          />
        </div>
      </div>
    </CardOutline>
  );
};

const BrowseTutorList = ({ showFavoritesOnly = false }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [favorites, setFavorites] = React.useState(() => {
    try {
      const saved = localStorage.getItem("favoriteTutors");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const newFavorites = prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id];
      localStorage.setItem("favoriteTutors", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const filteredTutors = showFavoritesOnly
    ? tutors.filter((tutor) => favorites.includes(tutor.id))
    : tutors;

  return (
    <div className="space-y-6">
      {filteredTutors.length > 0 ? (
        filteredTutors.map((tutor) => (
          <TutorCard
            key={tutor.id}
            tutor={tutor}
            isFavorite={favorites.includes(tutor.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))
      ) : (
        <div className="text-center py-10 text-gray-500">
          No {showFavoritesOnly ? "favorite" : ""} tutors found.
        </div>
      )}
      <div className="flex justify-center w-fu ">
        <Pagination
          totalItems={filteredTutors?.length || 0}
          itemsPerPage={3}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default BrowseTutorList;
