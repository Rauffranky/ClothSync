import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../../../components/UI/button";
import PersonalInfoCard from "./PersonalInfoCard";
import AddressCard from "./AddressCard";
import StudentLoginCard from "./StudentLoginCard";
import { useFormik } from "formik";
import * as Yup from "yup";

const GeneralProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const formik = useFormik({
    initialValues: {
      title: "",
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      address: "",
      avatar:
        "https://tse4.mm.bing.net/th/id/OIP.TebsFTpqgM_Wm6uOIt9pEwHaFj?pid=Api&h=220&P=0",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      dob: Yup.string().required("Date of birth is required"),
      gender: Yup.string().required("Gender is required"),
      address: Yup.string().required("Address is required"),
    }),
    onSubmit: (values) => {
      console.log("Saving profile changes...", values);
      navigate("/tutor/profile/introduction");
    },
  });

  return (
    <div className="p-4 space-y-8">
      <h5 className="font-semibold">Profile</h5>
      {/* Grid for Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <PersonalInfoCard formik={formik} />
        {location.pathname !== "/parents/general-profile" && (
          <AddressCard formik={formik} />
        )}
      </div>

      {location.pathname === "/parents/general-profile" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <StudentLoginCard />
        </div>
      )}

      {location.pathname !== "/parents/general-profile" && (
        <div className="flex justify-end">
          <Button
            label="Save"
            variant="primary"
            size="md"
            className="w-[120px] !rounded-[10px]"
            onClick={formik.handleSubmit}
          />
        </div>
      )}

      {/* Save Button */}
    </div>
  );
};

export default GeneralProfile;
