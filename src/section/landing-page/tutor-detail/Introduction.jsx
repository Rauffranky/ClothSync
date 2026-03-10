import React from "react";

const Introduction = ({ text }) => {
    return (
        <div className="space-y-4">
            <h5 className="font-semibold">Introduction</h5>
            <p className="text-[#555555] text-[16px] leading-[1.6]">
                {text || "Lorem ipsum dolor sit amet consectetur. Pharetra fames et id semper. Egestas nibh feugiat erat ipsum nulla imperdiet. Enim mattis morbi arcu consequat netus odio massa quisque lorem. Sit imperdiet elit viverra mattis venenatis augue vivamus eros cras. Nec id ultrices cras libero."}
            </p>
        </div>
    );
};

export default Introduction;
