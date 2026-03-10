import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import AccountTypeSelectionSection from "../../section/auth/account-type/index";

const AccountTypeSelection = () => {
    return (
        <>
            <Helmet>
                <title>Select Account Type | TuitionFarm</title>
                <meta name="description" content="Select your account type to continue as a tutor or a parent." />
            </Helmet>
            <AccountTypeSelectionSection />
        </>
    );
};

export default AccountTypeSelection;
