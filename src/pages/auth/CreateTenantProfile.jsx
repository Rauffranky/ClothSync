import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import CreateTenantProfileSection from "../../section/auth/create-tenant-profile";

const CreateTenantProfile = () => {
  return (
    <>
      <Helmet>
        <title>Create Tenant Profile | TuitionFarm</title>
        <meta
          name="description"
          content="Complete your tenant profile to get started."
        />
      </Helmet>
      <CreateTenantProfileSection />
    </>
  );
};

export default CreateTenantProfile;
