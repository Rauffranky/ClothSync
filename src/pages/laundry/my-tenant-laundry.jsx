import { Helmet } from "@dr.pogodin/react-helmet";
import MyTenantLaundry from "../../section/laundry/my-tenant";

const MyTenantLaundryPage = () => {
    return (
        <>
            <Helmet>
                <title>My Tenant | TuitionFarm</title>
            </Helmet>
            <div>
                <MyTenantLaundry />
            </div>
        </>
    );
};

export default MyTenantLaundryPage;