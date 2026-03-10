import Index from "../../section/student/dashboard";

import { Helmet } from "@dr.pogodin/react-helmet";

const StudentDashboardPage = () => {
    return (
        <>
            <Helmet>
                <title>Student Dashboard | Tuition Farm</title>
                <meta name="description" content="Student Dashboard" />
            </Helmet>
            <Index />
        </>
    );
};

export default StudentDashboardPage;
