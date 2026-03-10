import { Helmet } from "@dr.pogodin/react-helmet";
import TutorDashboard from "../../section/tutor-portal/dashboard";

const TutorDashboardPage = () => {
  return (
    <div>
      <Helmet>
        <title> Dashboard | Tuition Farm </title>
        <meta
          name="description"
          content="Track your recent activity: dataset updates, credit usage, request progress, and important system alerts
"
        />
      </Helmet>
      <TutorDashboard />
    </div>
  );
};

export default TutorDashboardPage;
