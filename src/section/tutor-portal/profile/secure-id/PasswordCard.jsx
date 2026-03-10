import React from "react";
import PasswordStrengthBar from "../../../../components/UI/PasswordStrengthBar";
import { useFormik } from "formik";
import * as Yup from "yup";
import CardOutline from "../../../../components/UI/card/CardOutline";
import GlobalInput from "../../../../components/UI/Form/Input";
import Button from "../../../../components/UI/button";
import AvatarUpload from "../../../../components/UI/Form/AvatarUpload";

const PasswordCard = () => {
    const formik = useFormik({
        initialValues: {
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            currentPassword: Yup.string().required("Current password is required"),
            newPassword: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .matches(/[a-z]/, "Password must contain at least one lowercase letter")
                .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
                .matches(/[0-9]/, "Password must contain at least one number")
                .matches(/[^a-zA-Z0-9]/, "Password must contain at least one special character")
                .required("New password is required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
                .required("Please confirm your new password"),
        }),
        onSubmit: (values) => {
            console.log("Password changes requested:", values);
            // Handle password change logic here
        },
    });

    return (
        <CardOutline padding="p-6" border="border-[#DCDCDC]" shadow="shadow-inner-full" className="bg-[#E5E5E533]! h-full">
            <h5 className="font-semibold mb-6 text-[18px]">Password</h5>

            <div className="flex flex-col items-center mb-6">
                <AvatarUpload
                    value="https://tse4.mm.bing.net/th/id/OIP.TebsFTpqgM_Wm6uOIt9pEwHaFj?pid=Api&h=220&P=0"
                    onChange={({ file, preview }) => console.log("Profile image changed", file)}
                />
            </div>

            <form onSubmit={formik.handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <h6 className="text-[14px] text-label font-medium">Current Password</h6>
                    <GlobalInput
                        type="password"
                        placeholder="********"
                        name="currentPassword"
                        value={formik.values.currentPassword}
                        onChange={(val) => formik.setFieldValue("currentPassword", val)}
                        error={formik.errors.currentPassword}
                        touched={formik.touched.currentPassword}
                        className="!bg-[#EDEDED] !border-[#DCDCDC] !rounded-[12px] !py-[10px]"
                    />
                </div>

                <div className="space-y-2">
                    <h6 className="text-[14px] text-label font-medium">New Password</h6>
                    <GlobalInput
                        type="password"
                        placeholder="********"
                        name="newPassword"
                        value={formik.values.newPassword}
                        onChange={(val) => formik.setFieldValue("newPassword", val)}
                        error={formik.errors.newPassword}
                        touched={formik.touched.newPassword}
                        className="!bg-[#EDEDED] !border-[#DCDCDC] !rounded-[12px] !py-[10px]"
                    />
                </div>

                <div className="space-y-2">
                    <h6 className="text-[14px] text-label font-medium">Confirm New Password</h6>
                    <GlobalInput
                        type="password"
                        placeholder="********"
                        name="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={(val) => formik.setFieldValue("confirmPassword", val)}
                        error={formik.errors.confirmPassword}
                        touched={formik.touched.confirmPassword}
                        className="!bg-[#EDEDED] !border-[#DCDCDC] !rounded-[12px] !py-[10px]"
                    />
                </div>

                <div className="flex justify-end pt-2">
                    <Button
                        label="Save Changes"
                        variant="primary"
                        type="submit"
                        className="!bg-[#4CAF50] !rounded-[12px] px-8 py-3 text-[16px] font-semibold"
                    />
                </div>
            </form>
        </CardOutline>
    );
};

export default PasswordCard;
