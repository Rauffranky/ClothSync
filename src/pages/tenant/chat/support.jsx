import { Helmet } from "@dr.pogodin/react-helmet";
import SupportMessage from "../../../section/tenant-portal/tenant-chat/support";

const SupportChatPageTenant = () => {
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

export default SupportChatPageTenant;
