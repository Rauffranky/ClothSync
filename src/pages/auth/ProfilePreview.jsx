import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import ProfilePreview from "../../section/auth/ProfilePreview";

const ProfilePreviewPage = () => {
  return (
    <>
      <Helmet>
        <title>Profile Preview | TuitionFarm</title>
        <meta
          name="description"
          content="Preview your profile before finalizing your registration."
        />
      </Helmet>
      <ProfilePreview />
    </>
  );
};

export default ProfilePreviewPage;
