import React from "react";
import GlobalLogin from "../../components/UI/GlobalLogin";
import { Helmet } from "@dr.pogodin/react-helmet";

const AdminLoginPage = () => (
  <div>
    <Helmet>
      <title>Admin Login | ClothSync</title>
      <meta name="description" content="Login to your account." />
    </Helmet>
    <GlobalLogin heading="Admin Login" forgotPasswordUrl={null} />
  </div>
);

export default AdminLoginPage;
