import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/UI/button";
import GlobalInput from "../../../components/UI/Form/Input";
import PhoneNumberField from "../../../components/UI/PhoneNumberField";
import Checkbox from "../../../components/UI/check-box";
import { useNavigate } from "react-router-dom";

const TenantLoginSection = ({ heading = "Tenant Login", forgotPasswordUrl = "/auth/forgot-password" }) => {
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
    phoneNumber: Yup.string().when("loginMethod", {
      is: "phone",
      then: () => Yup.string().required("Phone number is required"),
      otherwise: () => Yup.string().notRequired(),
    }),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      phoneNumber: "",
      loginMethod: "email",
    },
    validationSchema: validationSchema,
  });

  return (
    <>
      <div className="flex flex-col items-center text-center w-full">
        <h2 className="mb-3 font-medium! text-center">{heading}</h2>
        <form
          className="w-full space-y-4 text-left"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <subtitle className=" text-label1 mb-2">Email address</subtitle>
            <GlobalInput
              placeholder="name@example.com"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={(val) => formik.setFieldValue("email", val)}
              onBlur={formik.handleBlur}
              // className="bg-[#EDEDED]! border-border-2"
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
            <subtitle className=" text-label1 mb-2">Password</subtitle>
            <div className="relative">
              <GlobalInput
                placeholder="********"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={(val) => formik.setFieldValue("password", val)}
                onBlur={formik.handleBlur}
                // className="bg-[#EDEDED]! border-border-2"
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
              label="Remember Me"
              checked={rememberMe}
              onChange={setRememberMe}
            />
            {forgotPasswordUrl && (
              <subtitle onClick={() => navigate(forgotPasswordUrl)}>
                Forgot Password?
              </subtitle>
            )}
          </div>

          <div className="pt-4 flex justify-center">
            <Button
              label="Log In"
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

export default TenantLoginSection;
