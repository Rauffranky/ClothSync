import React from "react";
import GlobalLogin from "../../components/UI/GlobalLogin";
import { Helmet } from "@dr.pogodin/react-helmet";

const TenantLoginPage = () => (

<div>
  <Helmet>
      <title>Tenant Login | ClothSync</title>
      <meta name="description" content="Login to your account." />
    </Helmet>
    <GlobalLogin heading="Tenant Login" forgotPasswordUrl="/auth/forgot-password" />
  </div>

);

export default TenantLoginPage;
