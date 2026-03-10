import React from "react";
import PasswordStrengthBar from "../../../components/UI/PasswordStrengthBar";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/UI/button";
import GlobalInput from "../../../components/UI/Form/Input";
import { SmartSelect } from "../../../components/UI/Form/Dropdown";
import PhoneNumberField from "../../../components/UI/PhoneNumberField";
import Checkbox from "../../../components/UI/check-box";
import {
  ArrowRight,
  CircleChevronLeft,
  CircleChevronRight,
  Repeat,
} from "lucide-react";

const TutorRegisterSection = ({ role = "tutor" }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    sessionStorage.removeItem("terms_accepted");
  }, []);

  const titleOptions = [
    { label: "Mr", value: "mr" },
    { label: "Mrs", value: "mrs" },
  ];

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    confirmEmail: Yup.string()
      .oneOf([Yup.ref("email"), null], "Emails must match")
      .required("Confirm email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character",
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
    termsAccepted: Yup.boolean()
      .oneOf([true], "You must accept the terms and conditions")
      .required("You must accept the terms and conditions"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      firstName: "",
      lastName: "",
      email: "",
      confirmEmail: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      termsAccepted: sessionStorage.getItem("terms_accepted") === "true",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted", values);
      // Navigate or API call here
      navigate("/auth/verify-otp");
    },
  });

  return (
    <>
      <div className="w-full px-0 md:px-12">
        <h2 className="mb-3 font-medium! text-center">
          {role === "parent" ? "Create Parent Account" : "Create Tutor Account"}
        </h2>

        <form
          className="w-full space-y-4 text-left"
          onSubmit={formik.handleSubmit}
        >
          {/* Name Row */}
          <div className="flex flex-wrap gap-2">
            <div className="md:w-[18%] w-full">
              <subtitle className=" text-label1 mb-2">Title</subtitle>
              <SmartSelect
                checkbox={false}
                options={titleOptions}
                value={formik.values.title}
                onChange={(val) => formik.setFieldValue("title", val)}
                placeholder="Mr"
                backgroundColor="bg-[#EDEDED]"
                rounded="rounded-[12px]"
                triggerClassName={`!border-[#DCDCDC] !py-3 !rounded-[12px] ${formik.touched.title && formik.errors.title ? "!border-red-500" : ""}`}
                className="w-full"
              />
              {formik.touched.title && formik.errors.title && (
                <p className="mt-1 text-xs text-red-500 ml-1">
                  {formik.errors.title}
                </p>
              )}
            </div>
            <div className="w-full md:w-[39%]">
              <subtitle className=" text-label1 mb-2">First Name</subtitle>
              <GlobalInput
                placeholder="John"
                name="firstName"
                value={formik.values.firstName}
                onChange={(val) => formik.setFieldValue("firstName", val)}
                onBlur={formik.handleBlur}
                className="bg-[#EDEDED]! border-[#DCDCDC]"
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </div>
            <div className="w-full md:w-[39%]">
              <subtitle className=" text-label1 mb-2">Last name</subtitle>
              <GlobalInput
                placeholder="Doe"
                name="lastName"
                value={formik.values.lastName}
                onChange={(val) => formik.setFieldValue("lastName", val)}
                onBlur={formik.handleBlur}
                className="bg-[#EDEDED]! border-[#DCDCDC]"
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <subtitle className=" text-label1 mb-2">Email address</subtitle>
            <GlobalInput
              placeholder="johndoe@gmail.com"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={(val) => formik.setFieldValue("email", val)}
              onBlur={formik.handleBlur}
              className="bg-[#EDEDED]! border-[#DCDCDC]"
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>

          {/* Confirm Email */}
          <div>
            <subtitle className=" text-label1 mb-2">
              Confirm Email address
            </subtitle>
            <GlobalInput
              placeholder="johndoe@gmail.com"
              type="email"
              name="confirmEmail"
              value={formik.values.confirmEmail}
              onChange={(val) => formik.setFieldValue("confirmEmail", val)}
              onBlur={formik.handleBlur}
              className="bg-[#EDEDED]! border-[#DCDCDC]"
              error={
                formik.touched.confirmEmail &&
                Boolean(formik.errors.confirmEmail)
              }
              helperText={
                formik.touched.confirmEmail && formik.errors.confirmEmail
              }
            />
          </div>

          {/* Phone Number */}
          <div>
            <subtitle className=" text-label1 mb-2">Phone Number</subtitle>
            <PhoneNumberField
              // label="Phone Number"
              value={formik.values.phoneNumber}
              onChange={(val) => formik.setFieldValue("phoneNumber", val)}
              placeholder="+44"
              className="bg-[#EDEDED] border-[#DCDCDC]"
              error={formik.errors.phoneNumber}
              touched={formik.touched.phoneNumber}
            />
          </div>

          {/* Password */}
          <div>
            <subtitle className=" text-label1 mb-2">Password</subtitle>
            <GlobalInput
              placeholder="********"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={(val) => formik.setFieldValue("password", val)}
              onBlur={formik.handleBlur}
              className="bg-[#EDEDED]! border-[#DCDCDC]"
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <PasswordStrengthBar password={formik.values.password} />
          </div>

          {/* Confirm Password */}
          <div>
            <subtitle className=" text-label1 mb-2">Confirm Password</subtitle>
            <GlobalInput
              placeholder="********"
              type="password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={(val) => formik.setFieldValue("confirmPassword", val)}
              onBlur={formik.handleBlur}
              className="bg-[#EDEDED]! border-[#DCDCDC]"
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-start gap-2 pt-2">
            <label className="flex items-start gap-2 cursor-pointer">
              <Checkbox
                checked={formik.values.termsAccepted}
                onChange={(checked) =>
                  formik.setFieldValue("termsAccepted", checked)
                }
              />
              <h6 className="text-left text-label1">
                I have read and accepted the{" "}
                <Link to="/auth/term-condition" className="text-primary">
                  terms
                </Link>{" "}
                and{" "}
                <Link to="/auth/term-condition" className="text-primary">
                  conditions
                </Link>
              </h6>
            </label>
          </div>
          {formik.touched.termsAccepted && formik.errors.termsAccepted && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.termsAccepted}
            </p>
          )}

          <div className="pt-4 flex justify-center">
            <Button
              label="Sign Up"
              variant="primary"
              fullWidth
              className="py-3! px-6!"
              onClick={formik.handleSubmit}
            />
          </div>

          <div className="text-center mt-4">
            <button
              type="button"
              onClick={() =>
                navigate(
                  role === "parent"
                    ? "/auth/register/tutor"
                    : "/auth/register/parent",
                )
              }
              className="text-md font-medium cursor-pointer hover:text-green-600 flex items-center justify-center gap-2 mx-auto"
            >
              <Repeat size={20} className="text-[#2E7D32]" />
              {role === "parent"
                ? "Change to Tutor Registration"
                : "Change to Parent Registration"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TutorRegisterSection;
