import React, { useState } from "react";
import { ChevronRight, Plus, Minus, Mail, Phone, Clock } from "lucide-react";
import clsx from "clsx";
import CardOutline from "../../../components/UI/card/CardOutline";
import Button from "../../../components/UI/button";

const faqData = [
  {
    category: "General Questions",
    questions: [
      {
        id: "g1",
        question: "How do I get started with TuitionFarm?",
        answer:
          "Getting started is easy! Simply sign up for an account, browse our list of expert tenants, and book your first lesson. Our platform is designed to make the process seamless and efficient.",
      },
      {
        id: "g2",
        question: "Is there a free trial available?",
        answer:
          "Many of our tenants offer a free introductory session. You can check the tenant's profile to see if they provide a trial period or a discounted first lesson.",
      },
      {
        id: "g3",
        question: "What subjects do you offer?",
        answer:
          "We offer a wide range of subjects including Mathematics, Science, English, Languages, Coding, and more. Use our search filters to find the exact subject you need help with.",
      },
      {
        id: "g4",
        question: "How are tenants vetted?",
        answer:
          "Every tenant on our platform undergoes a rigorous vetting process, including background checks and verification of their qualifications and experience.",
      },
      {
        id: "g5",
        question: "Can I change my tenant later?",
        answer:
          "Yes, you are free to change your tenant at any time if you feel the current match is not the best fit for your learning style.",
      },
    ],
  },
  {
    category: "Payment & Booking",
    questions: [
      {
        id: "p1",
        question: "How do I pay for lessons?",
        answer:
          "Payments are handled securely through our platform. You can use your credit/debit card or other supported payment methods to book lessons.",
      },
      {
        id: "p2",
        question: "What is your cancellation policy?",
        answer:
          "Cancellations made more than 24 hours before the scheduled lesson are eligible for a full refund. Please check our terms of service for more details.",
      },
    ],
  },
  {
    category: "Finding Tenant",
    questions: [
      {
        id: "f1",
        question: "How do I find the right tenant for me?",
        answer:
          "You can use our advanced search filters to sort tenants by subject, price, rating, and availability to find the perfect match.",
      },
    ],
  },
  {
    category: "Security & Privacy",
    questions: [
      {
        id: "s1",
        question: "Is my personal data safe?",
        answer:
          "We take your privacy seriously. All personal data is encrypted and stored securely in accordance with data protection regulations.",
      },
    ],
  },
  {
    category: "Customer Support & Resources",
    questions: [
      {
        id: "c1",
        question: "How can I contact support?",
        answer:
          "Our support team is available 24/7 via live chat or email. Visit our contact page for more information.",
      },
    ],
  },
];

const FAQ = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [openQuestionId, setOpenQuestionId] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  const handleCategoryChange = (index) => {
    setActiveCategoryIndex(index);
    setOpenQuestionId(null); // Close any open accordion when switching categories
  };

  const activeCategory = faqData[activeCategoryIndex];

  return (
    <section className="pb-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center font-semibold mb-8">FAQ's</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Tabs */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {faqData.map((item, index) => (
              <button
                key={index}
                onClick={() => handleCategoryChange(index)}
                className={clsx(
                  "flex items-center justify-between p-4 rounded-2xl transition-all duration-300 text-left",
                  activeCategoryIndex === index
                    ? "bg-tertiary border border-[#C8DCC4] text-black"
                    : "bg-white border border-[#C7C7C7] text-black hover:bg-gray-50"
                )}
              >
                <h5 className="font-medium!">{item.category}</h5>
                <ChevronRight
                  size={20}
                  className={clsx(
                    "transition-transform",
                    activeCategoryIndex === index ? "text-text" : "text-text "
                  )}
                />
              </button>
            ))}
          </div>

          {/* Accordion Content */}
          <div className="w-full lg:w-2/3 flex flex-col gap-4">
            {activeCategory.questions.map((q) => (
              <div
                key={q.id}
                className="bg-[#F6F6F6] rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(q.id)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors"
                >
                  <h5 className="font-medium  text-black leading-relaxed pr-8">
                    {q.question}
                  </h5>
                  <div className="shrink-0">
                    {openQuestionId === q.id ? (
                      <Minus size={24} className="text-black" />
                    ) : (
                      <Plus size={24} className="text-black" />
                    )}
                  </div>
                </button>

                <div
                  className={clsx(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    openQuestionId === q.id
                      ? "max-h-125 opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  <div className="px-6 pb-6   leading-relaxed">
                    <subtitle className="text-text">{q.answer}</subtitle>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CardOutline
          bg="bg-white"
          border="border border-border"
          rounded="rounded-[16px]"
          shadow="shadow-sm"
          className="w-full p-6 md:p-5 mt-5 "
        >
          {/* Title */}
          <h6 className=" text-[#667085] font-medium mb-6">Get in Touch</h6>

          {/* Content */}
          {/* Left info row */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-15">
            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center">
                <Mail className="text-[#00A63E]" size={20} />
              </div>
              <div>
                <h6 className=" font-semibold text-[#101828]">Email</h6>
                <p className="text-[14px] text-primary ">
                  support@tuitionfarm.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center">
                <Phone className="text-green-600" size={20} />
              </div>
              <div>
                <h6 className="text-[14px] font-semibold text-[#101828]">
                  Phone
                </h6>
                <p className="text-[14px] text-[#475467]">+1 (234) 567-890</p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center">
                <Clock className="text-green-600" size={20} />
              </div>
              <div>
                <h6 className="text-[14px] font-semibold text-[#101828]">
                  Office Hours
                </h6>
                <p className="text-[14px] text-[#475467]">Monday - Friday</p>
                <p className="text-[14px] text-[#475467]">
                  9:00 AM - 6:00 PM EST
                </p>
              </div>
            </div>
          </div>

          {/* Right button */}
          <div className="md:self-end md:ml-auto flex justify-end ">
            <Button
              label="Live Chat"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-2.5 rounded-xl"
            />
          </div>
        </CardOutline>
      </div>
    </section>
  );
};

export default FAQ;
