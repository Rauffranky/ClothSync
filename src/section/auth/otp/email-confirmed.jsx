import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../../components/UI/button";
import {
  ArrowRightIcon,
  ArrowLeft,
  Check,
  CircleChevronLeft,
  CircleChevronRight,
} from "lucide-react";

const EmailConfirmedSection = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode"); // '2fa', 'forgot-password' or null

  return (
    <>
      <div className="flex flex-col items-center text-center w-full">
        <h2 className="mb-3 font-medium! text-center">
          {mode === "2fa"
            ? "2- Factor Authentication"
            : mode === "forgot-password"
              ? "Verification Successful"
              : "Email Address Confirmed"}
        </h2>

        <div
          className="mb-4 flex items-center justify-center w-20 h-20 rounded-full"
          style={{
            background: "linear-gradient(94deg, #2E7D32 0.25%, #66BB6A 88.23%)",
          }}
        >
          <Check className="text-white w-10 h-10" strokeWidth={3} />
        </div>

        <h5 className="text-primary font-semibold mb-4">
          Successfully Verified
        </h5>

        <h6 className="mb-8">
          {mode === "2fa"
            ? "Your 6-digit code has been successfully verified, and Two-Factor Authentication (2FA) is now active on your account. Now, let's create your listing"
            : mode === "forgot-password"
              ? "Your identity has been successfully verified. You can now reset your password."
              : "Thank you for confirming your email address. Your account has now been successfully registered. To activate and login to your account, enable Two-Factor Authentication (2FA) with your mobile phone. This additional layer of security helps safeguard your information."}
        </h6>

        <div className="w-full max-w-[200px]">
          <Button
            label={mode === "2fa" ? "Continue" : "Continue"}
            variant="primary"
            fullWidth
            className="py-3! text-white"
            onClick={() => {
              if (mode === "2fa") {
                console.log("Continue");
                // Navigate to profile setup
                navigate("/auth/create-tutor-profile");
              } else if (mode === "forgot-password") {
                navigate("/auth/login"); // Or reset password page if it existed
              } else {
                navigate("/auth/2fa");
              }
            }}
          />
        </div>
      </div>
    </>
  );
};

export default EmailConfirmedSection;
