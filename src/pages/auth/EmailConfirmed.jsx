
import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import EmailConfirmedSection from "../../section/auth/otp/email-confirmed";

const EmailConfirmed = () => {
    return (
        <>
            <Helmet>
                <title>Email Confirmed | TuitionFarm</title>
                <meta name="description" content="Email address successfully verified." />
            </Helmet>
            <EmailConfirmedSection />
        </>
    );
};

export default EmailConfirmed;
