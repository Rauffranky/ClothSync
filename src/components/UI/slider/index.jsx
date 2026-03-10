import React from "react";
import PropTypes from "prop-types";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider = ({
  items = [],
  renderSlide,
  breakpoints = {
    640: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  showNavigation = true,
  showPagination = true,
  autoplayConfig = {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  spaceBetween = 16,
  className = "",
  navigationClassName = "",
  paginationClassName = "",
  slidesPerView = 1,
  loop = false,
  speed = 300,
}) => {
  const modules = [];
  if (showNavigation) modules.push(Navigation);
  if (showPagination) modules.push(Pagination);
  // Only add Autoplay module if autoplayConfig is not false
  if (autoplayConfig && autoplayConfig !== false) modules.push(Autoplay);

  const navigationConfig = showNavigation
    ? {
        prevEl: ".swiper-button-prev-custom",
        nextEl: ".swiper-button-next-custom",
      }
    : false;

  const paginationConfig = showPagination
    ? {
        clickable: true,
        el: ".swiper-pagination-custom",
      }
    : false;

  return (
    <div className="relative">
      <Swiper
        modules={modules}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={navigationConfig}
        pagination={paginationConfig}
        autoplay={autoplayConfig}
        breakpoints={breakpoints}
        loop={loop}
        speed={speed}
        className={`pb-12 ${className}`}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{renderSlide(item, index)}</SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      {showNavigation && (
        <>
          <div className="bg-[#C8DCC4]/50 p-2 flex items-center justify-center absolute -left-7 top-1/2 -translate-y-1/2 z-10 rounded-full ">
            <button
              className={`swiper-button-prev-custom  bg-[#C8DCC4] rounded-full  flex items-center justify-center  w-10 h-10 cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${navigationClassName}`}
              aria-label="Previous slide"
            >
              <ArrowLeft size={24} />
            </button>
          </div>
          <div className="flex justify-center items-center absolute -right-7 top-1/2 -translate-y-1/2 z-10 bg-[#C8DCC4]/50 p-2 rounded-full ">
            <button
              className={` cursor-pointer swiper-button-next-custom  w-10 h-10 bg-[#C8DCC4] rounded-full  flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${navigationClassName}`}
              aria-label="Next slide"
            >
              <ArrowRight size={24} />
              {/* <ChevronRight size={24} /> */}
            </button>
          </div>
        </>
      )}

      {/* Custom Pagination */}
      {showPagination && (
        <div
          className={`swiper-pagination-custom flex justify-center mt-8 gap-2 ${paginationClassName}`}
        ></div>
      )}
    </div>
  );
};

Slider.propTypes = {
  items: PropTypes.array.isRequired,
  renderSlide: PropTypes.func.isRequired,
  breakpoints: PropTypes.object,
  showNavigation: PropTypes.bool,
  showPagination: PropTypes.bool,
  autoplayConfig: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  spaceBetween: PropTypes.number,
  className: PropTypes.string,
  navigationClassName: PropTypes.string,
  paginationClassName: PropTypes.string,
  slidesPerView: PropTypes.number,
  loop: PropTypes.bool,
  speed: PropTypes.number,
};

export default Slider;
