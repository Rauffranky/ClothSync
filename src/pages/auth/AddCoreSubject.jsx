import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import AddCoreSubjectSection from "../../section/auth/add-core-subject";

const AddCoreSubject = () => {
  return (
    <>
      <Helmet>
        <title>Add Core Subject | TuitionFarm</title>
        <meta
          name="description"
          content="Select your core teaching subjects, exam boards and set your pricing."
        />
      </Helmet>
      <AddCoreSubjectSection />
    </>
  );
};

export default AddCoreSubject;
