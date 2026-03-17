import React, { useState } from "react";
import Button from "../../../../components/UI/button";
import RichTextEditor from "../../../../components/UI/Form/RichTextEditor";
import CardOutline from "../../../../components/UI/card/CardOutline";

const TermsConditionSettings = () => {
    // State for Tenant Terms
    const [tenantTerms, setTenantTerms] = useState("");

    // State for Laundry Terms
    const [laundryTerms, setLaundryTerms] = useState("");

    const handleSaveTenantTerms = () => {
        console.log("Saving Tenant Terms:", tenantTerms);
    };

    const handleSaveLaundryTerms = () => {
        console.log("Saving Laundry Terms:", laundryTerms);
    };

    return (
        <div className="space-y-6">
            <h5 className="font-medium text-lg">Terms & Conditions</h5>

            {/* Tenant Terms Section */}
            <CardOutline border="border-gray-200" shadow="shadow-inner-full" bg="bg-gray-50" className="p-6 space-y-6">
                <h6 className="font-medium text-gray-700">Tenant Terms & Conditions</h6>
                <div className="rounded-xl overflow-hidden">
                    <RichTextEditor
                        value={tenantTerms}
                        onChange={setTenantTerms}
                        placeholder="I am your rich text editor."
                    />
                </div>
                <div className="flex justify-end">
                    <Button
                        label="Save Changes"
                        variant="primary"
                        className="px-6!"
                        onClick={handleSaveTenantTerms}
                    />
                </div>
            </CardOutline>

            {/* Laundry Terms Section */}
            <CardOutline border="border-gray-200" shadow="shadow-inner-full" bg="bg-gray-50" className="p-6 space-y-6">
                <h6 className="font-medium text-gray-700">Laundry Terms & Conditions</h6>
                <div className="rounded-xl overflow-hidden">
                    <RichTextEditor
                        value={laundryTerms}
                        onChange={setLaundryTerms}
                        placeholder="I am your rich text editor."
                    />
                </div>
                <div className="flex justify-end">
                    <Button
                        label="Save Changes"
                        variant="primary"
                        className="px-6!"
                        onClick={handleSaveLaundryTerms}
                    />
                </div>
            </CardOutline>
        </div>
    );
};

export default TermsConditionSettings;
