import ParentDashboard from "../../section/parent/dashboard"

import { Helmet } from "@dr.pogodin/react-helmet";

const ParentDashboardPage = () => {
    return (
        <>
            <Helmet>
                <title>Parent Dashboard | Tuition Farm</title>
                <meta name="description" content="Manage your parent account." />
            </Helmet>
            <ParentDashboard />
        </>
    )
}

export default ParentDashboardPage
