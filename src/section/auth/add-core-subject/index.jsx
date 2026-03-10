import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/UI/button";
import GlobalInput from "../../../components/UI/Form/Input";
import { SmartSelect } from "../../../components/UI/Form/Dropdown";
import { GraduationCap, Globe, Minus, Plus } from "lucide-react";

const AddCoreSubjectSection = () => {
  const navigate = useNavigate();

  const educationLevels = [
    { label: "O Levels", value: "o-levels" },
    { label: "A Levels", value: "a-levels" },
    { label: "Undergraduate", value: "undergraduate" },
    { label: "Postgraduate", value: "postgraduate" },
  ];

  const subjects = [
    { label: "Mathematics", value: "mathematics" },
    { label: "Physics", value: "physics" },
    { label: "Chemistry", value: "chemistry" },
    { label: "Biology", value: "biology" },
  ];

  const examBoards = [
    { label: "Cambridge", value: "cambridge" },
    { label: "Edexcel", value: "edexcel" },
    { label: "AQA", value: "aqa" },
  ];

  const validationSchema = Yup.object({
    levelOfEducation: Yup.string().required("Required"),
    subject: Yup.string().required("Required"),
    examBoard: Yup.string().required("Required"),
    price: Yup.number()
      .min(1, "Required")
      .max(999, "Max price is 999")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      levelOfEducation: "",
      subject: "",
      examBoard: "",
      price: 40,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Core Subject Submitted", values);
      navigate("/auth/your-availability");
    },
  });

  const handlePriceChange = (val) => {
    // Remove non-numeric characters
    const numericValue = val.replace(/[^0-9]/g, "");
    const number = parseInt(numericValue, 10);

    if (!numericValue) {
      formik.setFieldValue("price", 0);
      return;
    }

    if (number <= 999) {
      formik.setFieldValue("price", number);
    }
  };

  const incrementPrice = () => {
    if (formik.values.price < 999) {
      formik.setFieldValue("price", formik.values.price + 1);
    }
  };

  const decrementPrice = () => {
    if (formik.values.price > 1) {
      formik.setFieldValue("price", formik.values.price - 1);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="mb-8 font-medium text-center">Add Core Subject</h2>

      <form
        onSubmit={formik.handleSubmit}
        className="w-full space-y-5 text-left max-w-[450px]"
      >
        {/* Level Of Education */}
        <div>
          <subtitle className="text-label1 mb-2 block">
            Level Of Education
          </subtitle>
          <SmartSelect
            options={educationLevels}
            value={formik.values.levelOfEducation}
            onChange={(val) => formik.setFieldValue("levelOfEducation", val)}
            placeholder="level"
            backgroundColor="bg-[#EDEDED]"
            rounded="rounded-[15px]"
            triggerClassName={`!border-[#DCDCDC] !py-3 !rounded-[15px] ${formik.touched.levelOfEducation && formik.errors.levelOfEducation ? "!border-red-500" : ""}`}
            className="w-full"
          />
        </div>

        {/* Subject */}
        <div>
          <subtitle className="text-label1 mb-2 block">Subject</subtitle>
          <SmartSelect
            options={subjects}
            value={formik.values.subject}
            onChange={(val) => formik.setFieldValue("subject", val)}
            placeholder="subject"
            backgroundColor="bg-[#EDEDED]"
            rounded="rounded-[15px]"
            triggerClassName={`!border-[#DCDCDC] !py-3 !rounded-[15px] ${formik.touched.subject && formik.errors.subject ? "!border-red-500" : ""}`}
            className="w-full"
          />
        </div>

        {/* Exam Board */}
        <div>
          <subtitle className="text-label1 mb-2 block">Exam Board</subtitle>
          <SmartSelect
            options={examBoards}
            value={formik.values.examBoard}
            onChange={(val) => formik.setFieldValue("examBoard", val)}
            placeholder="exam board"
            backgroundColor="bg-[#EDEDED]"
            rounded="rounded-[15px]"
            triggerClassName={`!border-[#DCDCDC] !py-3 !rounded-[15px] ${formik.touched.examBoard && formik.errors.examBoard ? "!border-red-500" : ""}`}
            className="w-full"
          />
        </div>

        {/* Price per lesson */}
        <div>
          <subtitle className="text-label1 mb-2 block">
            Price per lesson
          </subtitle>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={decrementPrice}
              className="cursor-pointer w-12 h-12 flex items-center justify-center bg-[#2E7D32] hover:bg-green-700 text-white rounded-[15px] transition-colors flex-shrink-0"
            >
              -1
            </button>
            <div className="flex-1">
              <GlobalInput
                name="price"
                value={`£ ${formik.values.price}`}
                onChange={(val) => handlePriceChange(val)}
                className="bg-[#EDEDED]! border-[#DCDCDC] !rounded-[15px] !py-3 !text-center"
              />
            </div>
            <button
              type="button"
              onClick={incrementPrice}
              className="cursor-pointer w-12 h-12 flex items-center justify-center bg-[#2E7D32] hover:bg-green-700 text-white rounded-[15px] transition-colors flex-shrink-0"
            >
              +1
            </button>
          </div>
          {formik.touched.price && formik.errors.price && (
            <p className="mt-1 text-xs text-red-500 ml-17">
              {formik.errors.price}
            </p>
          )}
        </div>

        <p className="text-center text-[#555555] font-medium py-2">
          You can add more subjects later via your dashboard
        </p>

        <div className="pt-2">
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

export default AddCoreSubjectSection;
