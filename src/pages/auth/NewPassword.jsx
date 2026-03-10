import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import NewPasswordSection from "../../section/auth/forgot-password/new-password.jsx";

const NewPassword = () => {
    return (
        <>
            <Helmet>
                <title>New Password | TuitionFarm</title>
                <meta name="description" content="Set your new password." />
            </Helmet>
            <NewPasswordSection />
        </>
    );
};

export default NewPassword;
