import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/UI/button";

const TermConditionSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center text-center w-full h-[calc(100vh-280px)] overflow-y-scroll hide-scrollbar ">
        <h2 className="mb-3 font-medium! text-center">Terms & Conditions</h2>

        <h6 className="mb-8">
          Lorem ipsum dolor sit amet consectetur. Pulvinar suspendisse
          condimentum habitasse malesuada sit pharetra ac nunc. Mattis vel
          cursus bibendum diam faucibus turpis. Duis et nunc velit porta
          pharetra elementum. Massa dictum morbi nunc fusce amet eget feugiat
          turpis amet. Cras pharetra commodo vulputate faucibus pellentesque
          tincidunt in massa. Nibh lorem ornare sed pellentesque porta venenatis
          vestibulum. Eget tincidunt massa duis libero vitae tortor amet massa.
          Quam elementum eget diam nunc scelerisque. Eu bibendum eget elementum
          feugiat porttitor enim elementum egestas. Lacus venenatis vel a eget
          sagittis viverra. Elit sodales dolor in volutpat quis in purus.
          Rhoncus tellus urna lectus eget cursus lectus nunc. Quis ultrices
          dictum ipsum odio interdum odio. Non metus dictumst amet in adipiscing
          nulla est ipsum. Eget at integer pellentesque maecenas sed.
          Suspendisse morbi turpis a est vulputate mauris lorem viverra. Euismod
          amet dui tellus ac elit tortor ultrices. Sed viverra semper gravida
          tortor lectus risus feugiat tristique. Nunc placerat dignissim
          fermentum mauris aliquam. Fermentum morbi lacus nunc cursus sem non.
          Sit donec feugiat feugiat sollicitudin libero turpis. Placerat mauris
          purus non suscipit. Tincidunt quisque placerat feugiat id cursus
          tempus. Est ut nec lorem arcu cursus volutpat tellus iaculis leo.
          Interdum consectetur pulvinar nunc quam et erat nunc a. Amet
          adipiscing mattis lectus orci platea aliquam sed lobortis auctor.
          Nulla bibendum ornare quisque laoreet aliquet quam nec sed nisl.
          Facilisi varius cursus sed eleifend nec nam pretium. Fames semper enim
          consectetur duis ipsum. Lacus cras.
        </h6>

        <div className="w-full max-w-[200px]">
          <Button
            label="I Agree"
            variant="primary"
            fullWidth
            className="py-3! text-white"
            onClick={() => {
              sessionStorage.setItem("terms_accepted", "true");
              navigate(-1);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default TermConditionSection;
