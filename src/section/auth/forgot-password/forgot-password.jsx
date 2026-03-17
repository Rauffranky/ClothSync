import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/UI/button";
import GlobalInput from "../../../components/UI/Form/Input";

import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

const ForgotPasswordSection = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "tenant";
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Navigate to verification code page with mode, email, and role
      navigate(
        `/auth/verify-otp?mode=forgot-password&email=${encodeURIComponent(values.email)}&role=${role}`
      );
    },
  });

  return (
    <>
      <div className="flex flex-col items-center text-center w-full mt-6">
        <h2 className="mb-2 font-medium! text-center">Forgot Password</h2>
        <h6 className="mb-6 ">Enter Your Email to get the Verification Code</h6>

        <form
          className="w-full space-y-4 text-left"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <subtitle className=" text-label1 mb-2">Email address</subtitle>
            <GlobalInput
              placeholder="example@gmail.com"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={(val) => formik.setFieldValue("email", val)}
              onBlur={formik.handleBlur}
            //   className="bg-[#EDEDED]! border-border-2"
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>

          <div className="pt-6 flex justify-center">
            <Button
              label="Continue"
              variant="primary"
              fullWidth
              className="py-3! px-6! w-57.5!"
              onClick={formik.handleSubmit}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPasswordSection;
