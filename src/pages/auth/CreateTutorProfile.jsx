import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import CreateTutorProfileSection from "../../section/auth/create-tutor-profile";

const CreateTutorProfile = () => {
  return (
    <>
      <Helmet>
        <title>Create Tutor Profile | TuitionFarm</title>
        <meta
          name="description"
          content="Complete your tutor profile to get started."
        />
      </Helmet>
      <CreateTutorProfileSection />
    </>
  );
};

export default CreateTutorProfile;
