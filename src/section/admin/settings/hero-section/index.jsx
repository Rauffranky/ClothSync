import React, { useState } from "react";
import { Upload, X } from "lucide-react";
import CardOutline from "../../../../components/UI/card/CardOutline";
import GlobalInput from "../../../../components/UI/Form/Input";
import Button from "../../../../components/UI/button";
import { DragDropUpload } from "../../../../components/UI/fileUpload";

const HeroSectionSettings = () => {
    const [header, setHeader] = useState("Find");
    const [description, setDescription] = useState("Hire the best tenants for private tuition and help secure your child's future.");
    const [files, setFiles] = useState([]);

    const handleFilesAdded = (newFiles) => {
        setFiles((prev) => [...prev, ...newFiles]);
    };

    const removeFile = (index) => {
        setFiles((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="space-y-6">
            <h5 className="my-6 font-medium text-lg">Hero Section</h5>

            <CardOutline border="border-gray-200" shadow="shadow-inner-full" bg="bg-gray-50" className=" space-y-6">

                {/* Image Uploader Section */}
                <div className="flex flex-wrap items-center gap-4">
                    <div className="w-36 h-36">
                        <DragDropUpload
                            className="w-full h-full"
                            dropzoneClassName="!w-full !h-full !p-0 !border-2 !border-dashed !border-gray-300 !rounded-2xl flex items-center justify-center hover:bg-gray-50 transition-colors"
                            showList={false}
                            multiple={true}
                            value={files}
                            onChange={setFiles}
                        >
                            <Upload className="text-gray-400" size={24} />
                        </DragDropUpload>
                    </div>

                    {/* Image Thumbnails */}
                    {files.map((file, index) => (
                        <div key={index} className="relative w-36 h-36 border border-gray-200 rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center group">
                            <img
                                src={URL.createObjectURL(file)}
                                alt="preview"
                                className="w-full h-full object-cover"
                                onLoad={(e) => URL.revokeObjectURL(e.target.src)}
                            />
                            <button
                                onClick={() => removeFile(index)}
                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors shadow-md md:opacity-0 group-hover:opacity-100"
                            >
                                <X size={14} />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-600">Header</label>
                        <GlobalInput
                            placeholder="Enter header"
                            className="bg-[#EDEDED]! border-gray-200"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-600">Description</label>
                        <GlobalInput
                            multiline
                            rows={4}
                            placeholder="Enter description"
                            className="bg-[#EDEDED]! border-gray-200"
                        />
                    </div>
                </div>

            </CardOutline>

            <div className="flex justify-end">
                <Button
                    label="Save Changes"
                    variant="primary"
                    className="px-6!"
                />
            </div>
        </div>
    );
};

export default HeroSectionSettings;
