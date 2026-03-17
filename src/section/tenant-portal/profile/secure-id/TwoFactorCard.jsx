import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CardOutline from "../../../../components/UI/card/CardOutline";
import Button from "../../../../components/UI/button";
import GlobalInput from "../../../../components/UI/Form/Input";
import PhoneNumberField from "../../../../components/UI/PhoneNumberField";

const TwoFactorCard = () => {
    const [step, setStep] = React.useState("phone"); // "phone" or "otp"
    const [otp, setOtp] = React.useState(["", "", "", "", ""]);

    const formik = useFormik({
        initialValues: {
            phoneNumber: "",
        },
        validationSchema: Yup.object({
            phoneNumber: Yup.string()
                .min(10, "Invalid phone number")
                .required("Phone number is required"),
        }),
        onSubmit: (values) => {
            if (step === "phone") {
                console.log("2FA Number verification requested:", values);
                setStep("otp");
            } else {
                console.log("Verifying OTP:", otp.join(""));
                // Handle OTP verification
            }
        },
    });

    const handleOtpChange = (index, value) => {
        // Only allow digits
        const cleanValue = value.replace(/[^0-9]/g, "");
        if (cleanValue.length > 1) return;

        const newOtp = [...otp];
        newOtp[index] = cleanValue;
        setOtp(newOtp);

        // Auto focus next
        if (cleanValue && index < 4) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            if (nextInput) nextInput.focus();
        }
    };

    return (
        <CardOutline padding="p-6" border="border-[#DCDCDC]" shadow="shadow-inner-full" className="bg-[#E5E5E533]! h-full">
            <h5 className="font-semibold mb-2 text-[18px]">2- Factor Authentication</h5>
            <p className="text-[14px] text-[#555555] mb-6 leading-relaxed">
                Changed your phone? Enter your new mobile number below and verify it.
            </p>

            <form onSubmit={formik.handleSubmit} className="space-y-4">
                {/* Phone Input */}
                <PhoneNumberField
                    label="Phone Number"
                    name="phoneNumber"
                    value={formik.values.phoneNumber}
                    onChange={(phone) => formik.setFieldValue("phoneNumber", phone)}
                    error={formik.errors.phoneNumber}
                    touched={formik.touched.phoneNumber}
                    placeholder="+44"
                />

                {/* Status Info (Current Mobile, etc.) - Positioned as per screenshot */}
                <div className="space-y-0.5 py-1">
                    <p className="text-[13px] text-[#555555]">
                        <span className="font-medium text-[#1E1E1E]">Current Mobile:</span> +44 1234 567 890
                    </p>
                    <p className="text-[13px] text-[#555555]">
                        <span className="font-medium text-[#1E1E1E]">Linked Device:</span> Apple iPhone 15 Pro
                    </p>
                    <p className="text-[13px] text-[#555555]">
                        <span className="font-medium text-[#1E1E1E]">Date linked:</span> 15 Nov 2024
                    </p>
                </div>

                {step === "otp" && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                        {/* OTP Input Boxes - Using GlobalInput */}
                        <div className="flex justify-between gap-2 sm:gap-[10px] pt-2">
                            {otp.map((digit, i) => (
                                <input
                                    key={i}
                                    id={`otp-${i}`}
                                    type="text"
                                    value={digit}
                                    onChange={(e) => handleOtpChange(i, e.target.value)}
                                    className={`w-full h-[50px] text-center text-[18px] font-semibold rounded-[10px] border transition-all outline-none
                                        ${digit ? "border-[#4CAF50] text-[#4CAF50] bg-white" : "border-[#DCDCDC] bg-[#EDEDED] text-[#1E1E1E]"}
                                        focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50]
                                    `}
                                    maxLength={1}
                                />
                            ))}
                        </div>

                        {/* Resend Logic */}
                        <div className="text-center space-y-2">
                            <p className="text-[13px] text-[#555555] leading-normal px-2">
                                If you don't receive the code within a minute, click Resend button below.
                            </p>
                            <button
                                type="button"
                                className="text-[#3F8CFF] text-[14px] font-medium hover:underline"
                            >
                                Resend the Code
                            </button>
                        </div>
                    </div>
                )}

                <div className="flex justify-end pt-4">
                    <Button
                        label={step === "phone" ? "Change & Verify Number" : "Verify Number"}
                        variant="primary"
                        type="submit"
                        className="!bg-[#4CAF50] !rounded-[12px] px-8 py-3 text-[16px] font-semibold"
                    />
                </div>
            </form>
        </CardOutline>
    );
};

export default TwoFactorCard;
