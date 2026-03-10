import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/UI/button";
import GlobalInput from "../../../components/UI/Form/Input";
import PhoneNumberField from "../../../components/UI/PhoneNumberField";
import Checkbox from "../../../components/UI/check-box";
import GlobalTabs2 from "../../../components/UI/tabs/GlobalTabs2";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

const TutorLoginSection = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const role = searchParams.get("role") || "tutor"; // Default to tutor

  // For Student and Admin, force 'email' method. For others, allow switching.
  const [loginMethod, setLoginMethod] = useState("email");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    // Reset login method when role changes
    if (role === "student" || role === "admin") {
      setLoginMethod("email");
      formik.setFieldValue("loginMethod", "email");
    }
  }, [role]);

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
    onSubmit: (values) => {
      console.log(`${role} Login Submitted`, values);

      // Mock Authentication Logic
      const mockPassword = "pass123";
      let isValid = false;
      let redirectPath = "/";

      if (loginMethod === "phone") {
        // Phone login logic (Mock: accept any phone for now if tabs are visible)
        // In real app, verify phone
        navigate("/auth/verify-otp?mode=login");
        return;
      }

      // Email Login Logic
      switch (role) {
        case "tutor":
          if (
            values.email === "tutor@tuitionfarm.com" &&
            values.password === mockPassword
          ) {
            isValid = true;
            redirectPath = "/tutor/dashboard";
          }
          break;
        case "parent":
          if (
            values.email === "parent@tuitionfarm.com" &&
            values.password === mockPassword
          ) {
            isValid = true;
            redirectPath = "/parents/dashboard";
          }
          break;
        case "student":
          if (
            values.email === "student@tuitionfarm.com" &&
            values.password === mockPassword
          ) {
            isValid = true;
            redirectPath = "/student/dashboard";
          }
          break;
        case "admin":
          if (
            values.email === "admin@tuitionfarm.com" &&
            values.password === mockPassword
          ) {
            isValid = true;
            redirectPath = "/admin/dashboard";
          }
          break;
        default:
          break;
      }

      if (isValid) {
        navigate(redirectPath);
      } else {
        alert(
          `Invalid credentials for ${role}. \nTry: ${role}@tuitionfarm.com / pass123`,
        );
      }
    },
  });

  // Handle tab change and update formik state
  const handleTabChange = (method) => {
    setLoginMethod(method);
    formik.setFieldValue("loginMethod", method);
    formik.setErrors({}); // Clear errors when switching tabs
    formik.setTouched({});
  };

  const loginTabs = [
    { label: "Log In with Email", value: "email" },
    { label: "Log In with Phone Number", value: "phone" },
  ];

  const getTitle = () => {
    switch (role) {
      case "student":
        return "Student Login";
      case "parent":
        return "Parent Login";
      case "admin":
        return "Admin Login";
      default:
        return "Tutor Login";
    }
  };

  const isTabsVisible = role === "tutor" || role === "parent";

  return (
    <>
      <div className="flex flex-col items-center text-center w-full">

        <h2 className="mb-3 font-medium! text-center">{getTitle()}</h2>

        {isTabsVisible && (
          <GlobalTabs2
            tabs={loginTabs}
            activeTab={loginMethod}
            onTabChange={handleTabChange}
            className="mb-8"
          />
        )}

        <form
          className="w-full space-y-4 text-left"
          onSubmit={formik.handleSubmit}
        >
          {loginMethod === "email" ? (
            <>
              <div>
                <subtitle className=" text-label1 mb-2">Email address</subtitle>
                <GlobalInput
                  placeholder="name@example.com"
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={(val) => formik.setFieldValue("email", val)}
                  onBlur={formik.handleBlur}
                  className="bg-[#EDEDED]! border-[#DCDCDC]"
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
                    className="bg-[#EDEDED]! border-[#DCDCDC]"
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        formik.handleSubmit();
                      }
                    }}
                  />
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <Checkbox
                  label="Remember Me"
                  checked={rememberMe}
                  onChange={setRememberMe}
                  className="text-[16px]! font-medium text-label2"
                  size="w-4 h-4"
                />
                <Link
                  to="/auth/forgot-password"
                  className=""
                >
                  <h6 className="text-label2 font-medium">Forgot Password?</h6>
                </Link>
              </div>

              <div className="pt-6 flex justify-center">
                <Button
                  label="Log In"
                  variant="primary"
                  fullWidth
                  className="py-3! px-6! text-white md:w-[230px]!"
                  onClick={formik.handleSubmit}
                />
              </div>
            </>
          ) : (
            <div className="w-full space-y-4 text-left">
              <div>
                <PhoneNumberField
                  label=""
                  value={formik.values.phoneNumber}
                  onChange={(val) => formik.setFieldValue("phoneNumber", val)}
                  placeholder="+44"
                  className="bg-[#EDEDED] border-[#DCDCDC]"
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                  <div className="text-red-500 text-xs mt-1 ml-1">
                    {formik.errors.phoneNumber}
                  </div>
                )}
              </div>
              <div className="pt-6 flex justify-center">
                <Button
                  label="Send Text Code"
                  variant="primary"
                  fullWidth
                  className="py-3! px-6! md:w-[230px]!"
                  onClick={formik.handleSubmit}
                />
              </div>
            </div>
          )}
        </form>

        {/* Role Switcher for Testing/Navigation */}
        <div className="mt-8 pt-6 border-t border-gray-200 w-full">
          <p className="text-sm text-gray-500 mb-3">Login as:</p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            <button
              onClick={() => setSearchParams({ role: "tutor" })}
              className={`hover:text-primary ${role === "tutor" ? "font-bold text-primary" : "text-gray-600"}`}
            >
              Tutor
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => setSearchParams({ role: "student" })}
              className={`hover:text-primary ${role === "student" ? "font-bold text-primary" : "text-gray-600"}`}
            >
              Student
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => setSearchParams({ role: "parent" })}
              className={`hover:text-primary ${role === "parent" ? "font-bold text-primary" : "text-gray-600"}`}
            >
              Parent
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => setSearchParams({ role: "admin" })}
              className={`hover:text-primary ${role === "admin" ? "font-bold text-primary" : "text-gray-600"}`}
            >
              Admin
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorLoginSection;
