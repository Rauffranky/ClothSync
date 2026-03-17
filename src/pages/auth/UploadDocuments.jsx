import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import IntroductionVideoSection from "../../section/auth/introduction-video";
import UploadDocumentsSection from "../../section/auth/upload-documents";

const UploadDocuments = () => {
  return (
    <>
      <Helmet>
        <title>Upload Documents | TuitionFarm</title>
        <meta
          name="description"
          content="Upload an introduction video to showcase your tenanting services."
        />
      </Helmet>
      <UploadDocumentsSection />
    </>
  );
};

export default UploadDocuments;
