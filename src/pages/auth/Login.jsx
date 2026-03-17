
import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import TenantLoginSection from "../../section/auth/login/tenant-login.jsx";

const Login = () => {
    return (
        <>
            <Helmet>
                <title>Login | TuitionFarm</title>
                <meta name="description" content="Login to your account." />
            </Helmet>
            <TenantLoginSection />
        </>
    );
};

export default Login;
