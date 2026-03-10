import React from "react";

const AboutUS = () => {
    return (
        <div
            className="min-h-screen"
            style={{
                background: "linear-gradient(180deg, #F8FAF8 0%, #E8F5E9 100%)"
            }}
        >
            {/* Header / Intro Section */}
            <section className="pt-24 pb-16 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h1 className="">About Us</h1>

                    <div className="text-label">
                        <h6>
                            At TuitionFarm, lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse in mauris vel odio ultricies faucibus non ac augue.
                            Integer sit amet lacus luctus, tincidunt felis nec, blandit justo.
                        </h6>
                        <h6 className="mt-4">
                            Sed vel erat ac augue bibendum interdum at vel leo. Curabitur aliquam,
                            ipsum vel efficitur pretium, neque mi placerat nisl, vel suscipit est
                            turpis eget lacus. Nunc sodales, justo sed convallis.
                        </h6>
                    </div>

                    {/* Decorative Leaf */}
                    <div className="flex justify-center py-3">
                        <img
                            src="/landing-images/leaf-image.svg"
                            alt="decoration"
                        // className="max-w-[150px]"
                        />
                    </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Left Content */}
                    <div className="flex-1 space-y-8">
                        <h1 className="">Our Mission</h1>

                        <div className="text-label">
                            <h6>
                                Our mission is to empower learners everywhere through accessible,
                                personalized education. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Integer vitae ex nec sapien commodo interdum.
                            </h6>
                            <h6 className="mt-4">
                                Donec accumsan, justo in malesuada feugiat, nulla ipsum interdum
                                velit, vel volutpat metus lectus vel augue. Praesent suscipit,
                                lorem nec porttitor pretium, risus velit blandit enim, vel ultrices
                                libero nislorci. Vestibulum ante ipsum primis in faucibus orci.
                            </h6>
                        </div>
                    </div>

                    {/* Right Illustration */}
                    <div className="flex-1 relative">
                        <div className=" flex items-center justify-center">
                            <img
                                src="/landing-images/our-mission.svg"
                                alt="Our Mission"

                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUS;
