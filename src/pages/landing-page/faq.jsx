import React from "react";
import FAQ from "../../section/landing-page/home/FAQ";

import { Helmet } from "@dr.pogodin/react-helmet";

const FaqPage = () => {
    return (
        <div className="py-16">
            <Helmet>
                <title>FAQ | Tuition Farm</title>
                <meta name="description" content="Frequently Asked Questions" />
            </Helmet>
            <FAQ />
        </div>
    );
};

export default FaqPage;
