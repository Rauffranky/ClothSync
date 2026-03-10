
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/UI/button";
import PhoneNumberField from "../../../components/UI/PhoneNumberField";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

const TwoFactorInputSection = () => {
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState("");

    return (
        <>
            <div className="flex flex-col items-center text-center w-full">

                <h2 className="mb-3 font-medium! text-center">2- Factor Authentication</h2>
                <h6 className="mb-8">
                    Great! Lets verify your cell phone number
                </h6>

                <div className="w-full max-w-[400px] text-left mb-8">
                    <PhoneNumberField
                        label="Phone Number"
                        value={phoneNumber}
                        onChange={(val) => setPhoneNumber(val)}
                        placeholder="+44"
                        className="bg-[#EDEDED] border-[#DCDCDC]"
                    />
                </div>

                <div className="w-full max-w-[400px] mb-8">
                    <h6 className="text-center">
                        Click on the button below to receive a verification code via text message
                    </h6>
                </div>

                <div className="w-full max-w-[250px]">
                    <Button
                        label="Send Text Code"
                        variant="primary"
                        fullWidth
                        className="py-3! px-6! text-white"
                        onClick={() => navigate('/auth/verify-otp?mode=2fa')}
                    />
                </div>

            </div>
        </>
    );
};

export default TwoFactorInputSection;
