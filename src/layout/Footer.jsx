import React from "react";
import Logo from "../components/Logo";
import { Icon } from "@iconify/react";
import GlobalInput from "../components/UI/Form/Input";
import Button from "../components/UI/button";
import * as Yup from "yup";
import { Formik } from "formik";

const subjects = [
  "Mathematics|GCSE",
  "Physics|GCSE",
  "English|GCSE",
  "Biology|GCSE",
  "Mathematics|A-Level",
  "Chemistry|A-Level",
  "Physics|A-Level",
  "English|A-Level",
];

const ContactSchema = Yup.object().shape({
  name: Yup.string().trim().required("Name is required"),
  email: Yup.string()
    .trim()
    .email("Invalid email")
    .required("Email is required"),
  message: Yup.string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="bg-tertiary rounded-t-[28px] px-6 sm:px-10 py-10 overflow-hidden border-b border-[#C8E6C9]">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-16">
          {/* LEFT */}
          <div className="space-y-6">
            <div>
              <h4 className=" font-semibold text-secondary mb-4">Contact Us</h4>

              <ul className="space-y-3 text-[14px] text-secondary">
                <li className="flex items-start gap-3">
                  <Icon icon="ic:baseline-phone" fontSize="18px" color="#000" />
                  <span>+44 7700 000 000</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="ic:baseline-email" fontSize="18px" color="#000" />
                  <span>info@tuitionfarm.example</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon
                    icon="ic:baseline-location-on"
                    fontSize="18px"
                    color="#000"
                  />
                  <span>
                    1 Learning Lane, Knowledge Park,
                    <br />
                    London, LN1 2EX.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <Logo height={56} className="mb-2" />

              <p className="text-[14px] text-secondary leading-relaxed max-w-full sm:max-w-[280px] mb-2 ">
                Privacy Policy
              </p>
              <p className="text-[14px] text-secondary leading-relaxed max-w-full sm:max-w-[280px]">
                Terms & Conditions
              </p>

              <div className="flex items-center gap-4 mt-5">
                <a href="#" aria-label="Facebook">
                  <Icon
                    icon="ic:baseline-facebook"
                    fontSize="25px"
                    className="text-primary"
                  />
                </a>
                <a href="#" aria-label="X">
                  <Icon
                    icon="streamline-logos:x-twitter-logo-block"
                    fontSize="24px"
                    className="text-primary"
                  />
                </a>
                <a href="#" aria-label="Instagram">
                  <Icon
                    icon="ri:instagram-fill"
                    fontSize="27px"
                    className="text-primary"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* MIDDLE */}
          <div className="w-full">
            <h4 className=" font-semibold text-secondary mb-4">Core Subjects</h4>

            <ul className="space-y-3 text-[14px] text-secondary">
              {subjects.map((s) => (
                <li key={s} className="leading-relaxed">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="w-full">
            <h4 className=" font-semibold text-secondary mb-4">Message Us</h4>

            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={ContactSchema}
              onSubmit={(values, { resetForm }) => {
                console.log("Footer Contact Form:", values);
                // TODO: API call here
                resetForm();
              }}
            >
              {({
                values,
                errors,
                touched,
                setFieldValue,
                handleSubmit,
                isSubmitting,
              }) => (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 w-full max-w-full"
                >
                  <GlobalInput
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={values.name}
                    onChange={(val) => setFieldValue("name", val)}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name ? errors.name : ""}
                  />

                  <GlobalInput
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={(val) => setFieldValue("email", val)}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email ? errors.email : ""}
                  />

                  <GlobalInput
                    multiline
                    rows={5}
                    name="message"
                    placeholder="Message"
                    value={values.message}
                    onChange={(val) => setFieldValue("message", val)}
                    error={touched.message && Boolean(errors.message)}
                    helperText={touched.message ? errors.message : ""}
                  />

                  <div className="flex justify-start md:justify-end">
                    <Button
                      type="submit"
                      label={isSubmitting ? "Submitting..." : "Submit"}
                      variant="primary"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    />
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
