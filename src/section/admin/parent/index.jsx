import AdminTutorDashboardStats from "../tutor/tutor-stats";
import ParentTable from "./parent-table";

const IndexParent = () => {
    return (
        <div>
            <div>
                <h5 className="my-4 font-medium">Parents</h5>
            </div>
            <AdminTutorDashboardStats />
            <div>
                <ParentTable />
            </div>
        </div>
    );
};

export default IndexParent;