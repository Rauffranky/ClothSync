import { Helmet } from "@dr.pogodin/react-helmet";
import LessonRequests from "../../../section/tenant-portal/tenant-chat/lesson-requests";

const LessonRequestsPage = () => {
  return (
    <div>
      <Helmet>
        <title> Lesson Requests | Tuition Farm </title>
        <meta
          name="description"
          content="Track your recent activity: dataset updates, credit usage, request progress, and important system alerts
"
        />
      </Helmet>
      <LessonRequests />
    </div>
  );
};

export default LessonRequestsPage;
