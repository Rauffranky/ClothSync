
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../../components/UI/button";
import GlobalInput from "../../../components/UI/Form/Input";
import { ArrowRightIcon, CircleChevronLeft, CircleChevronRight } from "lucide-react";

const EnterOtpSection = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const mode = searchParams.get("mode"); // '2fa', 'login', 'forgot-password' or null
    const email = searchParams.get("email");

    const [otp, setOtp] = useState(["", "", "", "", ""]);
    const [timeLeft, setTimeLeft] = useState(50); // 50 seconds countdown
    const inputRefs = useRef([]);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft]);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        // Focus next input
        if (element.nextSibling && element.value !== "") {
            element.nextSibling.focus();
        }
    };

    const handlePaste = (e, index) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").slice(0, 5 - index).split("");

        if (pastedData.length > 0) {
            const newOtp = [...otp];
            pastedData.forEach((val, i) => {
                const targetIndex = index + i;
                if (targetIndex < 5 && !isNaN(val)) {
                    newOtp[targetIndex] = val;
                }
            });
            setOtp(newOtp);

            // Focus the input after the last pasted character
            const nextIndex = index + pastedData.length;
            const focusIndex = nextIndex < 5 ? nextIndex : 4;
            if (inputRefs.current[focusIndex]) {
                inputRefs.current[focusIndex].focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            if (e.target.value === "" && index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    };

    const handleResend = () => {
        setTimeLeft(50);
        // Add API call here if needed
        console.log("Resending OTP...");
    };

    return (
        <>
            <div className="flex flex-col items-center text-center">


                {mode === "2fa" || mode === "login" || mode === "forgot-password" ? (
                    <>
                        <h2 className="mb-3 font-medium! text-center">
                            {mode === "login" ? "Login Verification" : mode === "forgot-password" ? "Verification" : "2- Factor Authentication"}
                        </h2>
                        <h6 className=" mb-6 max-w-[400px]">
                            Enter the 6-digit verification sent via text message to complete the process.
                        </h6>
                    </>
                ) : (
                    <>
                        <h2 className="mb-3 font-medium! text-center">Enter OTP</h2>
                        <h6 className="text-sm text-light mb-6">
                            We've sent a verification code to your email address
                        </h6>
                    </>
                )}

                <div className="flex gap-3 justify-center mb-6">
                    {otp.map((data, index) => {
                        return (
                            <input
                                className="w-10 md:w-24 md:h-16 h-10 text-center text-xl font-bold bg-[#EDEDED] border-2 border-border-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-border-3"
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                ref={(el) => (inputRefs.current[index] = el)}
                                onChange={e => handleChange(e.target, index)}
                                onKeyDown={e => handleKeyDown(e, index)}
                                onPaste={(e) => handlePaste(e, index)}
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}
                </div>

                <h6 className=" mb-6">
                    We've sent a verification code to {mode === "2fa" || mode === "login" ? "+44*****0558" : email || ".......alex@gmail.com"}
                </h6>
                {(mode === "2fa" || mode === "login") && (
                    <button
                        className="text-[#2E7D32] hover:underline text-sm font-medium mb-6 mt-[-15px] underline"
                        onClick={() => navigate(-1)}
                    >
                        Change Number
                    </button>
                )}


                <div className="text-center mb-16">
                    <h6 className="">
                        If you don't receive the code within a minute, click Resend button below.
                    </h6>
                    <button
                        className="mt-2 text-blue-500 font-medium hover:text-blue-600 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                        onClick={handleResend}
                        disabled={timeLeft > 0}
                    >
                        {timeLeft > 0 ? formatTime(timeLeft) : "Resend"}
                    </button>
                </div>

                <div className="w-full max-w-[250px]">
                    <Button
                        label="Continue"
                        variant="primary"
                        fullWidth
                        className="md:py-3! text-white"
                        // href="/auth/profile-setup" // or wherever next
                        onClick={() => {
                            console.log('OTP Submitted', otp.join(''));
                            if (mode === "login") {
                                // Navigate to dashboard
                                navigate('/tutor/dashboard');
                            } else if (mode === "forgot-password") {
                                navigate('/auth/new-password');
                            } else {
                                navigate(mode === "2fa" ? '/auth/email-confirmed?mode=2fa' : '/auth/email-confirmed');
                            }
                        }}
                    />
                </div>

            </div>
        </>
    );
};

export default EnterOtpSection;
