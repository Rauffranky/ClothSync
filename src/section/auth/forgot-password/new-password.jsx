import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import Button from "../../../components/UI/button";
import GlobalInput from "../../../components/UI/Form/Input";
import PasswordStrengthBar from "../../../components/UI/PasswordStrengthBar";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

const NewPasswordSection = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    // In a real app, you might want these params to pass to the API
    // const email = searchParams.get("email"); 
    // const code = searchParams.get("code"); // if you had one

    const validationSchema = Yup.object({
        password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .matches(/[a-z]/, "Password must contain at least one lowercase letter")
            .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
            .matches(/[0-9]/, "Password must contain at least one number")
            .matches(/[^a-zA-Z0-9]/, "Password must contain at least one special character")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Passwords must match")
            .required("Confirm Password is required"),
    });

    const formik = useFormik({
        initialValues: {
            password: "",
            confirmPassword: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log("New Password Submitted", values);
            // Navigate to success page
            navigate('/auth/email-confirmed?mode=forgot-password');
        },
    });

    return (
        <>
            <div className="flex flex-col items-center text-center w-full">

                <h2 className="mb-2 font-medium! text-center">Forgot Password</h2>
                <h6 className="mb-6">Create & Confirm New Password</h6>

                <form className="w-full space-y-4 text-left" onSubmit={formik.handleSubmit}>
                    <div>
                        <subtitle className=" text-label1 mb-2">New Password</subtitle>
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
                    <div>
                        <subtitle className=" text-label1 mb-2">Confirm New Password</subtitle>
                        <GlobalInput
                            placeholder="********"
                            type="password"
                            name="confirmPassword"
                            value={formik.values.confirmPassword}
                            onChange={(val) => formik.setFieldValue("confirmPassword", val)}
                            onBlur={formik.handleBlur}
                            className="bg-[#EDEDED]! border-[#DCDCDC]"
                            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                        />
                    </div>

                    <div className="pt-6 flex justify-center">
                        <Button
                            label="Continue"
                            variant="primary"
                            fullWidth
                            className="py-3! px-6! w-[230px]!"
                            onClick={formik.handleSubmit}
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default NewPasswordSection;
