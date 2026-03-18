import React from "react";
import GlobalLogin from "../../components/UI/GlobalLogin";
import { Helmet } from "@dr.pogodin/react-helmet";
import { useTranslation } from "react-i18next";

const AdminLoginPage = () => {
const { t } = useTranslation();
  return (
  <div>
    <Helmet>
      <title>Admin Login | ClothSync</title>
      <meta name="description" content="Login to your account." />
    </Helmet>
    <GlobalLogin heading={t("adminLogin")} forgotPasswordUrl={null} />
  </div>
);}

export default AdminLoginPage;
