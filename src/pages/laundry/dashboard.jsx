import LaundryDashboard from "../../section/laundry/dashboard"

import { Helmet } from "@dr.pogodin/react-helmet";

const LaundryDashboardPage = () => {
    return (
        <>
            <Helmet>
                <title>Laundry Dashboard | Tuition Farm</title>
                <meta name="description" content="Manage your laundry account." />
            </Helmet>
            <LaundryDashboard />
        </>
    )
}

export default LaundryDashboardPage
