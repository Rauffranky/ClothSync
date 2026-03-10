import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import YourAvailabilitySection from "../../section/auth/your-availability";

const YourAvailability = () => {
  return (
    <>
      <Helmet>
        <title>Your Availability | TuitionFarm</title>
        <meta
          name="description"
          content="Set your teaching availability for throughout the week."
        />
      </Helmet>
      <YourAvailabilitySection />
    </>
  );
};

export default YourAvailability;
