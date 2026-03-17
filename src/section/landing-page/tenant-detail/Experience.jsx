import React from "react";

const Experience = ({ text }) => {
    return (
        <div className="space-y-4">
            <h5 className="font-semibold">Experience</h5>
            <h6 className="">
                {text || "Lorem ipsum dolor sit amet consectetur. Pharetra fames et id semper. Egestas nibh feugiat erat ipsum nulla imperdiet. Enim mattis morbi arcu consequat netus odio massa quisque lorem. Sit imperdiet elit viverra mattis venenatis augue vivamus eros cras. Nec id ultrices cras libero."}
            </h6>
        </div>
    );
};

export default Experience;
