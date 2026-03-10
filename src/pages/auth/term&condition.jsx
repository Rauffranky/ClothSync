import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import TermConditionSection from "../../section/auth/term&condition/index.jsx";

const TermCondition = () => {
  return (
    <>
      <Helmet>
        <title>Term & Condition | TuitionFarm</title>
        <meta name="description" content="Term & Condition" />
      </Helmet>
      <TermConditionSection />
    </>
  );
};

export default TermCondition;
