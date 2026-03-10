import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import TutorRegisterSection from "../../section/auth/register/tutor-register";

const TutorRegister = ({ role = "tutor" }) => {
    return (
        <>
            <Helmet>
                <title>
                    {role === "parent"
                        ? "Create Parent Account | TuitionFarm"
                        : "Create Tutor Account | TuitionFarm"}
                </title>
                <meta
                    name="description"
                    content={`Register as a ${role} on TuitionFarm.`}
                />
            </Helmet>
            <TutorRegisterSection role={role} />
        </>
    );
};

export default TutorRegister;
