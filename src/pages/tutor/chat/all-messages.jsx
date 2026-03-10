import { Helmet } from "@dr.pogodin/react-helmet";
import AllMessages from "../../../section/tutor-portal/tutor-chat/all-messages";

const AllMessagesPage = () => {
  return (
    <div>
      <Helmet>
        <title> All Messages | Tuition Farm </title>
        <meta
          name="description"
          content="Track your recent activity: dataset updates, credit usage, request progress, and important system alerts
"
        />
      </Helmet>
      <AllMessages />
    </div>
  );
};

export default AllMessagesPage;
