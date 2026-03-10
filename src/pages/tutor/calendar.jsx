import React from "react";
import CalendarSection from "../../section/tutor-portal/calendar";
import { Helmet } from "@dr.pogodin/react-helmet";

const CalendarPage = () => {
  return (
    <div>
      <Helmet>
        <title> Calendar | Tuition Farm </title>
        <meta
          name="description"
          content="Track your recent activity: dataset updates, credit usage, request progress, and important system alerts
"
        />
      </Helmet>
      <CalendarSection />
    </div>
  );
};

export default CalendarPage;
