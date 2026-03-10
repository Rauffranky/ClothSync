import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import YourAvailabilitySection from "../../section/auth/your-availability";
import StripVerificationSection from "../../section/auth/strip-verification";

const StripVerification = () => {
  return (
    <>
      <Helmet>
        <title>Stripe Verification | TuitionFarm</title>
        <meta
          name="description"
          content="Set your teaching availability for throughout the week."
        />
      </Helmet>
      <StripVerificationSection />
    </>
  );
};

export default StripVerification;
