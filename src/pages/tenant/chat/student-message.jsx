import { Helmet } from "@dr.pogodin/react-helmet";
import StudentMessage from "../../../section/tenant-portal/tenant-chat/student-message";

const StudentMessagePage = () => {
  return (
    <div>
      <Helmet>
        <title> Student Message | Tuition Farm </title>
        <meta
          name="description"
          content="Track your recent activity: dataset updates, credit usage, request progress, and important system alerts
"
        />
      </Helmet>
      <StudentMessage />
    </div>
  );
};

export default StudentMessagePage;
