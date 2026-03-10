import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/UI/button";
import { DragDropUpload } from "../../../components/UI/fileUpload";
import { Upload, Play, X } from "lucide-react";

const StripVerificationSection = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Navigate to next step
    navigate("/auth/login ");
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="mb-4 font-medium text-center">
        Start Your Stripe Verification
      </h2>
      <div className="flex flex-col gap-2 justify-center items-center ">
        <h6 className=" text-center max-w-[450px]">
          We use <span className="font-semibold">Stripe </span> to onboard, and
          manage payments, to you.
        </h6>
        <h6>Click the button below to verify you and your bank account</h6>
        <h6 className="font-semibold ">
          <span className="text-[#F50100] ">*</span> Please note, Tuition Farm
          do not hold any of your banking information, we use Stripe as they are
          PCI compliant.
        </h6>
      </div>
      <img src="/tuitor/strip.svg" className="my-8 w-[75%] " alt="" />

      <div className="flex w-full max-w-[300px] gap-4">
        <Button
          label="Start Stripe Verification"
          variant="primary"
          fullWidth
          className="!rounded-[12px] py-3!"
          onClick={handleContinue}
        />
      </div>
    </div>
  );
};

export default StripVerificationSection;
