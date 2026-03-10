import React from "react";
import AboutUS from "../../section/landing-page/about-us/about-us";

import { Helmet } from "@dr.pogodin/react-helmet";

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About Us | Tuition Farm</title>
                <meta name="description" content="Learn more about Tuition Farm" />
            </Helmet>
            <AboutUS />
        </div>
    );
};

export default About;
