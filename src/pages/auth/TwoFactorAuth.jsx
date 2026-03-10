
import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import TwoFactorInputSection from "../../section/auth/otp/TwoFactorInput";

const TwoFactorAuth = () => {
    return (
        <>
            <Helmet>
                <title>2-Factor Authentication | TuitionFarm</title>
                <meta name="description" content="Setup 2-Factor Authentication provided." />
            </Helmet>
            <TwoFactorInputSection />
        </>
    );
};

export default TwoFactorAuth;
