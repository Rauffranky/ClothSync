import { Helmet } from "@dr.pogodin/react-helmet";
import Dispute from "../../../section/tutor-portal/tutor-chat/dispute";

const DisputePage = () => {
  return (
    <div>
      <Helmet>
        <title> Dispute | Tuition Farm </title>
        <meta
          name="description"
          content="Track your recent activity: dataset updates, credit usage, request progress, and important system alerts
"
        />
      </Helmet>
      <Dispute />
    </div>
  );
};

export default DisputePage;
