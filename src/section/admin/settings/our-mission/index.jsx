import React, { useState } from "react";
import { Upload, X } from "lucide-react";
import Button from "../../../../components/UI/button";
import RichTextEditor from "../../../../components/UI/Form/RichTextEditor";
import CardOutline from "../../../../components/UI/card/CardOutline";
import { DragDropUpload } from "../../../../components/UI/fileUpload";

const OurMissionSettings = () => {
    const [content, setContent] = useState("");
    const [files, setFiles] = useState([]);

    const handleSave = () => {
        console.log("Saving Our Mission:", { content, files });
    };

    const removeFile = (index) => {
        setFiles((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="space-y-6">
            <h5 className="font-medium text-lg">Our Mission</h5>

            {/* Upload Section */}
            <div className="flex flex-wrap items-center gap-4">
                <div className="w-24 h-24">
                    <DragDropUpload
                        className="w-full h-full"
                        dropzoneClassName="!w-full !h-full !p-0 !border-2 !border-dashed !border-gray-300 !rounded-xl flex items-center justify-center hover:bg-gray-50 transition-colors"
                        showList={false}
                        multiple={false}
                        value={files}
                        onChange={setFiles}
                    >
                        <Upload className="text-gray-400" size={24} />
                    </DragDropUpload>
                </div>

                {files.map((file, index) => (
                    <div key={index} className="relative w-24 h-24 border border-gray-200 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center group">
                        <img
                            src={URL.createObjectURL(file)}
                            alt="preview"
                            className="w-full h-full object-cover"
                            onLoad={(e) => URL.revokeObjectURL(e.target.src)}
                        />
                        <button
                            onClick={() => removeFile(index)}
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-0.5 hover:bg-red-600 transition-colors shadow-sm"
                        >
                            <X size={12} />
                        </button>
                    </div>
                ))}
            </div>

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

export default OurMissionSettings;
