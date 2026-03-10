import React from "react";
import { Calendar } from "lucide-react";
import CardOutline from "../../../../components/UI/card/CardOutline";
import GlobalInput from "../../../../components/UI/Form/Input";
import { SmartSelect } from "../../../../components/UI/Form/Dropdown";
import AvatarUpload from "../../../../components/UI/Form/AvatarUpload";
import Button from "../../../../components/UI/button";

const PersonalInfoCard = ({ formik }) => {
  const titleOptions = [
    { label: "Mr", value: "mr" },
    { label: "Ms", value: "ms" },
    { label: "Mrs", value: "mrs" },
    { label: "Mx", value: "mx" },
    { label: "Dr", value: "dr" },
  ];

  const GenderOptions = [
    { label: "Male", value: "male" },
    { label: "Woman", value: "Woman" },
    { label: "Prefer Not To Say", value: "Prefer Not To Say" },
  ];

  return (
    <CardOutline
      padding="p-6"
      border="border-[#DCDCDC]"
      shadow="shadow-inner-full"
      className="bg-[#E5E5E533]! h-full"
    >
      <h5 className="font-semibold mb-6">Personal Info</h5>

      <div className="flex flex-col items-center ">
        {/* Avatar upload section - Using Global Component */}
        <AvatarUpload
          value={formik.values.avatar}
          onChange={({ file }) => {
            console.log("New avatar selected:", file);
            formik.setFieldValue("avatar", file);
          }}
          className="mb-6"
        />

        {/* Form Section */}
        <div className="w-full space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Title */}
            <div className="md:col-span-3">
              <h6 className="block text-label mb-2">Title</h6>
              <SmartSelect
                options={titleOptions}
                value={formik.values.title}
                onChange={(val) => formik.setFieldValue("title", val)}
                placeholder="Mr"
                backgroundColor="bg-[#EDEDED]"
                rounded="rounded-lg"
                triggerClassName={`!border-[#DCDCDC] !py-3 !rounded-[12px] ${formik.touched.title && formik.errors.title ? "!border-red-500" : ""}`}
                className="w-full"
              />
              {formik.touched.title && formik.errors.title && (
                <p className="mt-1 text-xs text-red-500">
                  {formik.errors.title}
                </p>
              )}
            </div>
            {/* First Name */}
            <div className="md:col-span-4">
              <h6 className="block text-label mb-2">First Name</h6>
              <GlobalInput
                name="firstName"
                placeholder="First name"
                value={formik.values.firstName}
                onChange={(val) => formik.setFieldValue("firstName", val)}
                // onBlur={formik.handleBlur}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                className="!bg-[#EDEDED] !border-[#DCDCDC] rounded-[12px]!"
              />
            </div>
            {/* Last Name */}
            <div className="md:col-span-5">
              <h6 className="block text-label mb-2">Last name</h6>
              <GlobalInput
                name="lastName"
                placeholder="Last name"
                value={formik.values.lastName}
                onChange={(val) => formik.setFieldValue("lastName", val)}
                // onBlur={formik.handleBlur}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                className="!bg-[#EDEDED] !border-[#DCDCDC] rounded-[12px]!"
              />
            </div>
          </div>

          {/* Date of Birth */}
          <div className="w-full">
            <h6 className="block text-label mb-2">
              Date of Birth<span className="text-red-500">*</span>
            </h6>
            <GlobalInput
              name="dob"
              placeholder="DD/MM/YYYY"
              value={formik.values.dob}
              onChange={(val) => formik.setFieldValue("dob", val)}
              // onBlur={formik.handleBlur}
              error={formik.touched.dob && Boolean(formik.errors.dob)}
              helperText={formik.touched.dob && formik.errors.dob}
              rightIcon={<Calendar size={18} className="text-[#555555]" />}
              className="!bg-[#EDEDED] !border-[#DCDCDC] rounded-[12px]!"
            />
          </div>
          <div>
            <h6 className="block text-label mb-2">
              Gender <span className="text-red-500">*</span>
            </h6>
            <SmartSelect
              options={GenderOptions}
              value={formik.values.gender}
              onChange={(val) => formik.setFieldValue("gender", val)}
              placeholder="Select Gender"
              backgroundColor="bg-[#EDEDED]"
              rounded="rounded-lg"
              triggerClassName={`!border-[#DCDCDC] !py-3 !rounded-[12px] ${formik.touched.gender && formik.errors.gender ? "!border-red-500" : ""}`}
              className="w-full"
            />
            {formik.touched.gender && formik.errors.gender && (
              <p className="mt-1 text-xs text-red-500">
                {formik.errors.gender}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <Button
          label="Save"
          variant="primary"
          size="md"
          className="w-[120px] !rounded-[10px]"
          onClick={formik.handleSubmit}
        />
      </div>
    </CardOutline>
  );
};

export default PersonalInfoCard;
