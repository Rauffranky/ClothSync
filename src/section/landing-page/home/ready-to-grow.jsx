import React from "react";
import Button from "../../../components/UI/button";

const ReadyToGrow = () => {
  return (
    <section
      className="relative overflow-hidden py-12 mb-20"
      style={{
        background: "linear-gradient(90deg, #E8F4E9 0%, #FCEEE6 100%)",
      }}
    >
      <img
        src="/landing-images/shine.svg"
        alt="Cloud decoration"
        className="
    absolute
    top-0
    left-20
    w-40
    md:w-76
    opacity-80
    z-1
    pointer-events-none
  "
      />
         <img
        src="/landing-images/shine.svg"
        alt="Cloud decoration"
        className="
    absolute
    top-0
    right-20
    w-40
    md:w-76
    opacity-80
    z-1
    pointer-events-none
  "
      />
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-center gap-1">
          <h1 className="font-semibold text-[#345A3A]">Ready to Grow?</h1>
          <img src="/icons/grow-icon.svg" alt="" />
        </div>

        <h5 className="text-center text-text mt-1 ">
          Join Tuition Farm and turn your expertise into extra income, on your
          own schedule.
        </h5>
        <div className="flex items-center justify-center gap-1">
          <Button
            variant="white"
            label="Register as Tutor"
            className="mt-6 px-8! font-bold! "
          />
        </div>
      </div>
    </section>
  );
};

export default ReadyToGrow;
