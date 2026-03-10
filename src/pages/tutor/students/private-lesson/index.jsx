import React from "react";
import PrivateLessonSection from "../../../../section/tutor-portal/students/private-lesson";
import { Helmet } from "@dr.pogodin/react-helmet";

const PrivateLessonPage = () => {
  return (
    <div className="">
      <Helmet>
        <title> Private Lesson | Tuition Farm </title>
        <meta
          name="description"
          content="Track your recent activity: dataset updates, credit usage, request progress, and important system alerts
"
        />
      </Helmet>
      <PrivateLessonSection />
    </div>
  );
};

export default PrivateLessonPage;
