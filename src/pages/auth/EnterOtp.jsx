
import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import EnterOtpSection from "../../section/auth/otp/enter-otp";

const EnterOtp = () => {
    return (
        <>
            <Helmet>
                <title>Verify OTP | TuitionFarm</title>
                <meta name="description" content="Verify your email address." />
            </Helmet>
            <EnterOtpSection />
        </>
    );
};

export default EnterOtp;
