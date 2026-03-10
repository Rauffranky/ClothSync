import React from "react";
import Bookings from "../../section/tutor-portal/bookings";
import { Helmet } from "@dr.pogodin/react-helmet";

const BookingsPage = () => {
  return (
    <div>
      <Helmet>
        <title> Bookings | Tuition Farm </title>
        <meta
          name="description"
          content="Track your recent activity: dataset updates, credit usage, request progress, and important system alerts
"
        />
      </Helmet>
      <Bookings />
    </div>
  );
};

export default BookingsPage;
