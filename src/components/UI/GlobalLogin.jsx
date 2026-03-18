import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "./button";
import GlobalInput from "./Form/Input";
import Checkbox from "./check-box";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const GlobalLogin = ({
  heading = "Login",
  forgotPasswordUrl = "/auth/forgot-password",
}) => {
  const { t } = useTranslation();
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    email: Yup.string().when("loginMethod", {
      is: "email",
      then: () =>
        Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
      otherwise: () => Yup.string().notRequired(),
    }),
    password: Yup.string().when("loginMethod", {
      is: "email",
      then: () => Yup.string().required("Password is required"),
      otherwise: () => Yup.string().notRequired(),
    }),
  });

  // Dummy credentials
  const dummyUsers = [
    { email: "admin@gmail.com", password: "12345678", role: "admin" },
    { email: "tenant@gmail.com", password: "12345678", role: "tenant" },
    { email: "laundry@gmail.com", password: "12345678", role: "laundry" },
  ];

  const [loginError, setLoginError] = useState("");

  const handleLogin = (values, { resetForm }) => {
    const user = dummyUsers.find(
      (u) => u.email === values.email && u.password === values.password,
    );
    if (user) {
      setLoginError("");
      toast.success(`Login successful! Welcome ${user.role}`);
      resetForm();
      // Navigate to dashboard based on role
      setTimeout(() => {
        if (user.role === "admin") navigate("/admin/dashboard");
        else if (user.role === "tenant") navigate("/tenant/dashboard");
        else if (user.role === "laundry") navigate("/laundries/dashboard");
      }, 500);
    } else {
      toast.error("Invalid email or password");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      loginMethod: "email",
    },
    validationSchema: validationSchema,
    onSubmit: handleLogin,
  });

  return (
    <>
      <div className="flex flex-col items-center text-center w-full">
        <h2 className="mb-3 font-medium! text-center">{heading}</h2>
        <form
          className="w-full space-y-4 text-left"
          onSubmit={formik.handleSubmit}
        >
          {loginError && (
            <div style={{ color: "red", marginBottom: 8 }}>{loginError}</div>
          )}
          <div>
            <subtitle
              className={`text-label1 mb-2 ${document.dir === "rtl" ? "text-right" : "text-left"}`}
            >
              {t("emailAddress")}
            </subtitle>
            <GlobalInput
              placeholder="name@example.com"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={(val) => formik.setFieldValue("email", val)}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  formik.handleSubmit();
                }
              }}
            />
          </div>

          <div>
            <subtitle 
            className={`text-label1 mb-2 ${document.dir === "rtl" ? "text-right" : "text-left"}`}
            >{t("password")}</subtitle>
            <div className="relative">
              <GlobalInput
                placeholder="********"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={(val) => formik.setFieldValue("password", val)}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    formik.handleSubmit();
                  }
                }}
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <Checkbox
              label={t("rememberMe")}
              checked={rememberMe}
              onChange={setRememberMe}
            />
            {forgotPasswordUrl && (
              <subtitle
                className="cursor-pointer"
                onClick={() => {
                  let role = "";
                  if (heading.toLowerCase().includes("admin")) role = "admin";
                  else if (heading.toLowerCase().includes("tenant"))
                    role = "tenant";
                  else if (heading.toLowerCase().includes("laundry"))
                    role = "laundry";
                  navigate(`${forgotPasswordUrl}?role=${role}`);
                }}
              >
                {t("forgotPassword")}
              </subtitle>
            )}
          </div>

          <div className="pt-4 flex justify-center">
            <Button
              label={t("login")}
              variant="primary"
              fullWidth
              className="py-3! px-6! text-white md:w-57.5!"
              onClick={formik.handleSubmit}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default GlobalLogin;
