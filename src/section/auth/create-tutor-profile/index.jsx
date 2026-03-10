import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/UI/button";
import GlobalInput from "../../../components/UI/Form/Input";
import { SmartSelect } from "../../../components/UI/Form/Dropdown";
import AvatarUpload from "../../../components/UI/Form/AvatarUpload";
import Modal from "../../../components/UI/modal";
import { Calendar, MapPin, Sparkles, Info, X } from "lucide-react";

const CreateTutorProfileSection = () => {
  const navigate = useNavigate();
  const [isAiModalOpen, setIsAiModalOpen] = React.useState(false);
  const [currentField, setCurrentField] = React.useState("");
  const [aiGeneratedText, setAiGeneratedText] = React.useState("");

  const handleOpenAiModal = (field) => {
    setCurrentField(field);
    setAiGeneratedText(
      "I am a dedicated and professional tutor with a strong passion for helping students learn and grow. I focus on clear explanations, practical examples, and personalized guidance to ensure every student understands the subject with confidence",
    ); // Mock AI text
    setIsAiModalOpen(true);
  };

  const handleApproveChange = () => {
    formik.setFieldValue(currentField, aiGeneratedText);
    setIsAiModalOpen(false);
  };

  const genderOptions = [
    { label: "Man", value: "man" },
    { label: "Woman", value: "woman" },
    { label: "Other", value: "other" },
  ];

  const validationSchema = Yup.object({
    dob: Yup.string().required("Date of Birth is required"),
    gender: Yup.string().required("Gender is required"),
    address: Yup.string().required("Full Address is required"),
    introduction: Yup.string()
      .max(250, "Maximum 250 characters")
      .required("Introduction is required"),
    experience: Yup.string()
      .max(250, "Maximum 250 characters")
      .required("Experience is required"),
  });

  const formik = useFormik({
    initialValues: {
      avatar: "",
      dob: "",
      gender: "",
      address: "",
      introduction: "",
      experience: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Profile Data:", values);
      // Navigate to next step
      navigate("/auth/introduction-video");
    },
  });

  const handleAvatarChange = ({ file }) => {
    formik.setFieldValue("avatar", file);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="mb-6 font-medium text-center">Create Tutor Profile</h2>

      <div className="mb-8">
        <AvatarUpload value={null} onChange={handleAvatarChange} />
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className="w-full space-y-5 text-left"
      >
        {/* Date of Birth */}
        <div>
          <subtitle className="text-label1 mb-2 block">
            Date of Birth<span className="text-red-500">*</span>
          </subtitle>
          <GlobalInput
            type="date"
            name="dob"
            placeholder="20/10/2025"
            value={formik.values.dob}
            onChange={(val) => formik.setFieldValue("dob", val)}
            onBlur={formik.handleBlur}
            className="bg-[#EDEDED]! border-[#DCDCDC]"
            error={formik.touched.dob && Boolean(formik.errors.dob)}
            helperText={formik.touched.dob && formik.errors.dob}
          />
        </div>

        {/* Gender */}
        <div>
          <subtitle className="text-label1 mb-2 block">
            Gender<span className="text-red-500">*</span>
          </subtitle>
          <SmartSelect
            options={genderOptions}
            value={formik.values.gender}
            onChange={(val) => formik.setFieldValue("gender", val)}
            placeholder="Select Gender"
            backgroundColor="bg-[#EDEDED]"
            rounded="rounded-[12px]"
            triggerClassName={`!border-[#DCDCDC] !py-3 !rounded-[12px] ${formik.touched.gender && formik.errors.gender ? "!border-red-500" : ""}`}
            className="w-full"
          />
          {formik.touched.gender && formik.errors.gender && (
            <p className="mt-1 text-xs text-red-500 ml-1">
              {formik.errors.gender}
            </p>
          )}
        </div>

        {/* Full Address */}
        <div>
          <subtitle className="text-label1 mb-2 block">
            Enter Full Address<span className="text-red-500">*</span>
          </subtitle>
          <GlobalInput
            name="address"
            placeholder="Bradford, Richmond UK"
            value={formik.values.address}
            onChange={(val) => formik.setFieldValue("address", val)}
            onBlur={formik.handleBlur}
            rightIcon={<MapPin className="w-4 h-4 text-[#555555]" />}
            className="bg-[#EDEDED]! border-[#DCDCDC]"
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />
          <div className="flex items-center gap-1.5 mt-2 text-[#555555]">
            <Info size={16} />
            <span className="text-xs">
              We will only show your town and region in search results
            </span>
          </div>
        </div>

        {/* Introduction */}
        <div className="relative">
          <div className="flex justify-between items-center mb-2">
            <subtitle className="text-label1 block">Introduction</subtitle>
            {formik.values.introduction && (
              <button
                type="button"
                onClick={() => handleOpenAiModal("introduction")}
                className="flex items-center gap-1.5 text-xs font-medium bg-[#EDEDED] px-3 py-1.5 rounded-lg text-[#555555] hover:bg-gray-200 transition-colors"
              >
                <Sparkles size={14} className="text-[#555555]" />
                Rewrite with AI
              </button>
            )}
          </div>
          <GlobalInput
            multiline
            rows={4}
            name="introduction"
            placeholder="Brief Introduction"
            value={formik.values.introduction}
            onChange={(val) => formik.setFieldValue("introduction", val)}
            onBlur={formik.handleBlur}
            className="bg-[#EDEDED]! border-[#DCDCDC]"
            error={
              formik.touched.introduction && Boolean(formik.errors.introduction)
            }
          />
          <div className="text-right text-[10px] text-[#555555] mt-1">
            {formik.values.introduction.length}/250
          </div>
        </div>

        {/* Experience */}
        <div className="relative">
          <div className="flex justify-between items-center mb-2">
            <subtitle className="text-label1 block">Experience</subtitle>
            {formik.values.experience && (
              <button
                type="button"
                onClick={() => handleOpenAiModal("experience")}
                className="flex items-center gap-1.5 text-xs font-medium bg-[#EDEDED] px-3 py-1.5 rounded-lg text-[#555555] hover:bg-gray-200 transition-colors"
              >
                <Sparkles size={14} className="text-[#555555]" />
                Rewrite with AI
              </button>
            )}
          </div>
          <GlobalInput
            multiline
            rows={4}
            name="experience"
            placeholder="Experience"
            value={formik.values.experience}
            onChange={(val) => formik.setFieldValue("experience", val)}
            onBlur={formik.handleBlur}
            className="bg-[#EDEDED]! border-[#DCDCDC]"
            error={
              formik.touched.experience && Boolean(formik.errors.experience)
            }
          />
          <div className="text-right text-[10px] text-[#555555] mt-1">
            {formik.values.experience.length}/250
          </div>
        </div>

        <div className="pt-6 flex justify-center">
          <Button
            label="Continue"
            variant="primary"
            fullWidth
            className="py-3! text-white"
            onClick={formik.handleSubmit}
          />
        </div>
      </form>

      {/* AI Rewrite Modal */}
      <Modal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        hideHeader
        size="xl"
        primaryButton={true}
        className="!rounded-[20px]"
      >
        <div className="relative p-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[#2E7D32] font-semibold capitalize">
              {currentField}
            </h3>
          </div>

          <div className="space-y-4">
            {/* You Wrote */}
            <div>
              <h6 className=" font-medium mb-1.5 text-black flex flex-start ">
                You Wrote
              </h6>
              <GlobalInput
                multiline
                rows={4}
                value={formik.values[currentField] || ""}
                disabled
                className="bg-white! border-[#DCDCDC] !rounded-[12px]"
              />
              <div className="text-right text-[10px] text-[#555555] mt-1">
                {(formik.values[currentField] || "").length}/250
              </div>
            </div>

            {/* AI Generated */}
            <div>
              <h6 className=" font-medium mb-1.5 text-black flex flex-start ">
                Ai Generated
              </h6>
              <GlobalInput
                multiline
                rows={4}
                value={aiGeneratedText}
                onChange={(val) => setAiGeneratedText(val)}
                className="bg-white! border-[#DCDCDC] !rounded-[12px]"
              />
              <div className="text-right text-[10px] text-[#555555] mt-1">
                {aiGeneratedText.length}/250
              </div>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-end gap-3 mt-4">
            <Button
              label="Re-generate"
              variant="white"
              onClick={() => {
                // Mock re-generation
                setAiGeneratedText(
                  "Updated AI text... " +
                    Math.random().toString(36).substring(7),
                );
              }}
              className="!border-[#DCDCDC] !text-[#555555] !rounded-[12px] px-8!"
            />
            <Button
              label="Approve Change"
              variant="primary"
              onClick={handleApproveChange}
              className="!rounded-[12px] px-8!"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CreateTutorProfileSection;
