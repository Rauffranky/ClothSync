import React from "react";
import Bookings from "../../section/tutor-portal/bookings";
import { Helmet } from "@dr.pogodin/react-helmet";
import ClassDetail from "../../section/tutor-portal/bookings/class-detail";

const ClassDetailPage = () => {
  return (
    <div>
      <Helmet>
        <title> Class Detail | Tuition Farm </title>
        <meta
          name="description"
          content="Track your recent activity: dataset updates, credit usage, request progress, and important system alerts
"
        />
      </Helmet>
      <ClassDetail />
    </div>
  );
};

export default ClassDetailPage;
