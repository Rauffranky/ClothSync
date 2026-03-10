import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/UI/button";
import GlobalInput from "../../../components/UI/Form/Input";
import { SmartSelect } from "../../../components/UI/Form/Dropdown";
import Radio from "../../../components/UI/Form/Radio";
import { GraduationCap, Globe } from "lucide-react";

const YourQualificationsSection = () => {
  const navigate = useNavigate();

  const educationLevels = [
    { label: "Bachelors", value: "bachelors" },
    { label: "Masters", value: "masters" },
    { label: "PhD", value: "phd" },
    { label: "Diploma", value: "diploma" },
  ];

  const validationSchema = Yup.object({
    educationLevel: Yup.string().required("Education level is required"),
    senExperience: Yup.string().required("Please select an option"),
    qualifiedTeacher: Yup.string().required("Please select an option"),
    registrationNumber: Yup.string().required(
      "Registration number is required",
    ),
  });

  const formik = useFormik({
    initialValues: {
      educationLevel: "",
      senExperience: "yes",
      qualifiedTeacher: "yes",
      registrationNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Qualifications Submitted", values);
      // Navigation for next step
      navigate("/auth/add-core-subject");
    },
  });

  return (
    <div className="w-full flex flex-col items-center">
      {/* Central Icon Area */}

      <h2 className="mb-8 font-medium text-center">Your Qualifications</h2>

      <form
        onSubmit={formik.handleSubmit}
        className="w-full space-y-6 text-left max-w-[450px]"
      >
        {/* Education Level */}
        <div>
          <subtitle className="text-label1 mb-2 block">
            Level Of Education
          </subtitle>
          <SmartSelect
            options={educationLevels}
            value={formik.values.educationLevel}
            onChange={(val) => formik.setFieldValue("educationLevel", val)}
            placeholder="level of education"
            backgroundColor="bg-[#EDEDED]"
            rounded="rounded-[15px]"
            triggerClassName={`!border-[#DCDCDC] !py-3 !rounded-[15px] ${formik.touched.educationLevel && formik.errors.educationLevel ? "!border-red-500" : ""}`}
            className="w-full"
          />
          {formik.touched.educationLevel && formik.errors.educationLevel && (
            <p className="mt-1 text-xs text-red-500 ml-1">
              {formik.errors.educationLevel}
            </p>
          )}
        </div>

        {/* SEN Experience */}
        <div>
          <subtitle className="text-label1 mb-4 block">
            Do you have Special Education Needs (SEN) experience?
          </subtitle>
          <div className="flex gap-8">
            <Radio
              name="senExperience"
              label="Yes"
              value="yes"
              checked={formik.values.senExperience === "yes"}
              onChange={(val) => formik.setFieldValue("senExperience", val)}
            />
            <Radio
              name="senExperience"
              label="No"
              value="no"
              checked={formik.values.senExperience === "no"}
              onChange={(val) => formik.setFieldValue("senExperience", val)}
            />
          </div>
        </div>

        {/* Qualified Teacher */}
        <div>
          <subtitle className="text-label1 mb-4 block">
            Are you a qualified teacher?
          </subtitle>
          <div className="flex gap-8">
            <Radio
              name="qualifiedTeacher"
              label="Yes"
              value="yes"
              checked={formik.values.qualifiedTeacher === "yes"}
              onChange={(val) => formik.setFieldValue("qualifiedTeacher", val)}
            />
            <Radio
              name="qualifiedTeacher"
              label="No"
              value="no"
              checked={formik.values.qualifiedTeacher === "no"}
              onChange={(val) => formik.setFieldValue("qualifiedTeacher", val)}
            />
          </div>
        </div>

        {/* Registration Number */}
        <div>
          <subtitle className="text-label1 mb-2 block font-medium">
            Teaching Registration Number<span className="text-red-500">*</span>
          </subtitle>
          <GlobalInput
            placeholder="ABC12345"
            name="registrationNumber"
            value={formik.values.registrationNumber}
            onChange={(val) => formik.setFieldValue("registrationNumber", val)}
            onBlur={formik.handleBlur}
            className="bg-[#EDEDED]! border-[#DCDCDC] !rounded-[15px] !py-3"
            error={
              formik.touched.registrationNumber &&
              Boolean(formik.errors.registrationNumber)
            }
          />
          <p className="mt-2 text-xs text-[#555555]">
            *We check this number before approving your application.
          </p>
          {formik.touched.registrationNumber &&
            formik.errors.registrationNumber && (
              <p className="mt-1 text-xs text-red-500 ml-1">
                {formik.errors.registrationNumber}
              </p>
            )}
        </div>

        <div className="pt-4">
          <Button
            label="Continue"
            variant="primary"
            fullWidth
            type="submit"
            className="!rounded-[15px] py-4! font-bold text-lg"
          />
        </div>
      </form>
    </div>
  );
};

export default YourQualificationsSection;
