import React from "react";
import GlobalLogin from "../../components/UI/GlobalLogin";
import { Helmet } from "@dr.pogodin/react-helmet";

const LaundryLoginPage = () => (
  <div>
    <Helmet>
      <title>Laundry Login | ClothSync</title>
      <meta name="description" content="Login to your account." />
    </Helmet>
    <GlobalLogin
      heading="Laundry Login"
      forgotPasswordUrl="/auth/forgot-password"
    />
  </div>
);

export default LaundryLoginPage;
