import { Helmet } from "@dr.pogodin/react-helmet";
import TenantDashboard from "../../section/tenant-portal/dashboard";

const TenantDashboardPage = () => {
  return (
    <div>
      <Helmet>
        <title> Dashboard | ClothSync </title>
        <meta
          name="description"
          content="Track your recent activity: dataset updates, credit usage, request progress, and important system alerts
"
        />
      </Helmet>
      <TenantDashboard />
    </div>
  );
};

export default TenantDashboardPage;
