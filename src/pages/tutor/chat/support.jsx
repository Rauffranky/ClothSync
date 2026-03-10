import { Helmet } from "@dr.pogodin/react-helmet";
import SupportMessage from "../../../section/tutor-portal/tutor-chat/support";

const SupportChatPageTutor = () => {
    return (
        <div>
            <Helmet>
                <title> Support Chat | Tuition Farm </title>
                <meta
                    name="description"
                    content="Track your recent activity: dataset updates, credit usage, request progress, and important system alerts
"
                />
            </Helmet>
            <SupportMessage />
        </div>
    );
};

export default SupportChatPageTutor;
