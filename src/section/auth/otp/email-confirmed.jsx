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
  const mode = searchParams.get("mode"); // 'forgot-password', 'laundry-forgot', or null

  return (
    <>
      <div className="flex flex-col items-center text-center w-full mt-6">
        <h2 className="mb-3 font-medium! text-center">
          {mode === "forgot-password" || mode === "laundry-forgot"
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
          {mode === "forgot-password" || mode === "laundry-forgot"
            ? "Your identity has been successfully verified. You can now reset your password."
            : "Thank you for confirming your email address. Your account has now been successfully registered."}
        </h6>

        <div className="w-full max-w-50">
          <Button
            label="Continue"
            variant="primary"
            fullWidth
            className="py-3! text-white"
            onClick={() => {
              if (mode === "laundry-forgot") {
                navigate("/auth/laundry-login");
              } else if (mode === "forgot-password") {
                navigate("/auth/tenant-login");
              } else {
                navigate("/auth/laundry-login");
              }
            }}
          />
        </div>
      </div>
    </>
  );
};

export default EmailConfirmedSection;
