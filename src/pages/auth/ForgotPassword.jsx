import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import ForgotPasswordSection from "../../section/auth/forgot-password/forgot-password.jsx";

const ForgotPassword = () => {
    return (
        <>
            <Helmet>
                <title>Forgot Password | TuitionFarm</title>
                <meta name="description" content="Reset your password." />
            </Helmet>
            <ForgotPasswordSection />
        </>
    );
};

export default ForgotPassword;
