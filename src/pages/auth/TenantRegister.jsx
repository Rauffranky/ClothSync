import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import TenantRegisterSection from "../../section/auth/register/tenant-register";

const TenantRegister = ({ role = "tenant" }) => {
    return (
        <>
            <Helmet>
                <title>
                    {role === "laundry"
                        ? "Create Laundry Account | TuitionFarm"
                        : "Create Tenant Account | TuitionFarm"}
                </title>
                <meta
                    name="description"
                    content={`Register as a ${role} on TuitionFarm.`}
                />
            </Helmet>
            <TenantRegisterSection role={role} />
        </>
    );
};

export default TenantRegister;
