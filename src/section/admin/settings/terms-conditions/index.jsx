import React, { useState } from "react";
import Button from "../../../../components/UI/button";
import RichTextEditor from "../../../../components/UI/Form/RichTextEditor";
import CardOutline from "../../../../components/UI/card/CardOutline";

const TermsConditionSettings = () => {
    // State for Tutor Terms
    const [tutorTerms, setTutorTerms] = useState("");

    // State for Parent Terms
    const [parentTerms, setParentTerms] = useState("");

    const handleSaveTutorTerms = () => {
        console.log("Saving Tutor Terms:", tutorTerms);
    };

    const handleSaveParentTerms = () => {
        console.log("Saving Parent Terms:", parentTerms);
    };

    return (
        <div className="space-y-6">
            <h5 className="font-medium text-lg">Terms & Conditions</h5>

            {/* Tutor Terms Section */}
            <CardOutline border="border-gray-200" shadow="shadow-inner-full" bg="bg-gray-50" className="p-6 space-y-6">
                <h6 className="font-medium text-gray-700">Tutor Terms & Conditions</h6>
                <div className="rounded-xl overflow-hidden">
                    <RichTextEditor
                        value={tutorTerms}
                        onChange={setTutorTerms}
                        placeholder="I am your rich text editor."
                    />
                </div>
                <div className="flex justify-end">
                    <Button
                        label="Save Changes"
                        variant="primary"
                        className="px-6!"
                        onClick={handleSaveTutorTerms}
                    />
                </div>
            </CardOutline>

            {/* Parent Terms Section */}
            <CardOutline border="border-gray-200" shadow="shadow-inner-full" bg="bg-gray-50" className="p-6 space-y-6">
                <h6 className="font-medium text-gray-700">Parent Terms & Conditions</h6>
                <div className="rounded-xl overflow-hidden">
                    <RichTextEditor
                        value={parentTerms}
                        onChange={setParentTerms}
                        placeholder="I am your rich text editor."
                    />
                </div>
                <div className="flex justify-end">
                    <Button
                        label="Save Changes"
                        variant="primary"
                        className="px-6!"
                        onClick={handleSaveParentTerms}
                    />
                </div>
            </CardOutline>
        </div>
    );
};

export default TermsConditionSettings;
