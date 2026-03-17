import React from "react";
import CardOutline from "../../../components/UI/card/CardOutline";

const steps = [
  {
    id: 1,
    title: "Browse Tenants",
    description:
      "Search for tenants based on your subject, level, and preferences.",
    image: "/landing-images/how-it work1.svg",
  },
  {
    id: 2,
    title: "Message Tenants",
    description:
      "Chat with potential tenants to ensure they are the right fit for your needs.",
    image: "/landing-images/how-it work2.svg",
  },
  {
    id: 3,
    title: "Book Lessons",
    description:
      "Schedule sessions and start your learning journey with confidence.",
    image: "/landing-images/how-it work3.svg",
  },
];

const HowItWorks = () => {
  return (
    <section className="pt-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="font-bold mb-4">How It Works</h1>
        <h4 className="t text-[#57606A]">
          Finding the perfect tenant is simple. Browse, connect, and book lessons
          in just a few steps.
        </h4>
      </div>

      <div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4"
        style={{
          boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.10)",
        }}
      >
        {steps.map((step) => (
          <CardOutline
            border="border-none"
            key={step.id}
            className="flex flex-col items-center p-8 text-center bg-white hover:shadow-xl transition-shadow group"
            shadow="shadow-sm"
            style={{
              boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.10)",
            }}
          >
            <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-primary text-[28px] !font-[800] mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              {step.id}
            </div>
            <h2 className=" font-bold text-gray-900 mb-6">{step.title}</h2>

            <div className="rounded-xl overflow-hidden">
              <img
                src={step.image}
                alt={step.title}
                className=" opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </CardOutline>
        ))}
      </div>
      <div className="flex justify-center">
        <img src="/landing-images/shadow.svg" alt="" />
      </div>
    </section>
  );
};

export default HowItWorks;
