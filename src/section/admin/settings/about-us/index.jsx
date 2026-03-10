import React, { useState } from "react";
import Button from "../../../../components/UI/button";
import RichTextEditor from "../../../../components/UI/Form/RichTextEditor";
import CardOutline from "../../../../components/UI/card/CardOutline";

const AboutUsSettings = () => {
    const [content, setContent] = useState("");

    const handleSave = () => {
        // Logic to save content
        console.log("Saving About Us content:", content);
    };

    return (
        <div className="space-y-6">
            <h5 className="my-6 font-medium text-lg">About Us</h5>

            <CardOutline border="border-gray-200" shadow="shadow-inner-full" bg="bg-gray-50" className="p-6 space-y-6">
                <div className="rounded-xl overflow-hidden">
                    <RichTextEditor
                        value={content}
                        onChange={setContent}
                        placeholder="I am your rich text editor."
                    />
                </div>
            </CardOutline>

            <div className="flex justify-end">
                <Button
                    label="Save Changes"
                    variant="primary"
                    className="px-6!"
                    onClick={handleSave}
                />
            </div>
        </div>
    );
};

export default AboutUsSettings;
