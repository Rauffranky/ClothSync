import AdminTenantDashboardStats from "../tenant/tenant-stats";
import LaundryTable from "./laundry-table";

const IndexLaundry = () => {
    return (
        <div>
            <div>
                <h5 className="my-4 font-medium">Laundries</h5>
            </div>
            <AdminTenantDashboardStats />
            <div>
                <LaundryTable />
            </div>
        </div>
    );
};

export default IndexLaundry;