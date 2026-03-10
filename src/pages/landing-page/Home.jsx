import React from "react";
import Hero from "../../section/landing-page/home/Hero";
import CategorySlider from "../../section/landing-page/home/CategorySlider";
import HowItWorks from "../../section/landing-page/home/HowItWorks";
import TopTutors from "../../section/landing-page/home/TopTutors";
import ReadyToGrow from "../../section/landing-page/home/ready-to-grow";

import { Helmet } from "@dr.pogodin/react-helmet";

const LandingPage = () => {
    return (
        <div className="flex flex-col">
            <Helmet>
                <title>Home | Tuition Farm</title>
                <meta name="description" content="Welcome to Tuition Farm" />
            </Helmet>
            <Hero />
            <CategorySlider />
            <HowItWorks />
            <TopTutors />
            <ReadyToGrow />
            {/* <FAQ /> */}
        </div>
    );
};

export default LandingPage;
