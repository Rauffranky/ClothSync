import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import YourQualificationsSection from "../../section/auth/your-qualifications";

const YourQualifications = () => {
  return (
    <>
      <Helmet>
        <title>Your Qualifications | TuitionFarm</title>
        <meta
          name="description"
          content="Provide your educational qualifications and teaching registration details."
        />
      </Helmet>
      <YourQualificationsSection />
    </>
  );
};

export default YourQualifications;
