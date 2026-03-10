import StudentTable from "../../section/student/dashboard/student-table";

import { Helmet } from "@dr.pogodin/react-helmet";

const StudentOrderDetailsPage = () => {
    return (
        <>
            <Helmet>
                <title>Order Details | Tuition Farm</title>
                <meta name="description" content="Order Details" />
            </Helmet>
            <StudentTable />
        </>
    );
};

export default StudentOrderDetailsPage;
