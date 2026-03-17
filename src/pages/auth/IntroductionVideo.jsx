import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import IntroductionVideoSection from "../../section/auth/introduction-video";

const IntroductionVideo = () => {
  return (
    <>
      <Helmet>
        <title>Introduction Video | TuitionFarm</title>
        <meta
          name="description"
          content="Upload an introduction video to showcase your tenanting services."
        />
      </Helmet>
      <IntroductionVideoSection />
    </>
  );
};

export default IntroductionVideo;
