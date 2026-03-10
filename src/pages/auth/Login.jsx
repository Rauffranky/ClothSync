
import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import TutorLoginSection from "../../section/auth/login/tutor-login.jsx";

const Login = () => {
    return (
        <>
            <Helmet>
                <title>Login | TuitionFarm</title>
                <meta name="description" content="Login to your account." />
            </Helmet>
            <TutorLoginSection />
        </>
    );
};

export default Login;
