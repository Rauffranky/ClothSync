import React, { useState } from "react";
import Modal from "../../../../components/UI/modal";
import Button from "../../../../components/UI/button";
import GlobalInput from "../../../../components/UI/Form/Input";
import { SmartSelect } from "../../../../components/UI/Form/Dropdown";
import { DragDropUpload } from "../../../../components/UI/fileUpload";
import { Search } from "lucide-react";

const RaiseDisputeModal = ({ isOpen, onClose, lessonId, tutorName = "Alex" }) => {
    const [formData, setFormData] = useState({
        lessonNo: lessonId || "#1231",
        tutor: tutorName,
        natureOfDispute: "",
        description: "",
        files: []
    });

    const lessonOptions = [
        { value: "#1231", label: "#1231" },
        { value: "#1232", label: "#1232" },
        { value: "#1233", label: "#1233" },
    ];

    const disputeOptions = [
        { value: "late", label: "Tutor was late" },
        { value: "absent", label: "Tutor was absent" },
        { value: "technical", label: "Technical issues" },
        { value: "behavior", label: "Inappropriate behavior" },
        { value: "other", label: "Other" },
    ];

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = () => {
        console.log("Dispute Submitted:", formData);
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={<h2 className="text-xl font-bold text-[#2E7D32]">Raise A Dispute</h2>}
            customWidth={800}
            className="rounded-[16px] overflow-hidden"
            footer={
                <div className="flex justify-end gap-3 w-full">
                    <Button
                        label="Cancel"
                        onClick={onClose}
                        variant="text"
                        className="!border !border-[#2E7D32] !text-[#2E7D32] hover:!bg-green-50 !font-medium !rounded-lg !px-6 !py-2"
                    />
                    <Button
                        label="Open Dispute"
                        onClick={handleSubmit}
                        variant="primary"
                        className="!bg-[#4CAF50] hover:!bg-[#43A047] !text-white !font-medium !rounded-lg !px-6 !py-2 !shadow-none before:!hidden"
                    />
                </div>
            }
        >
            <div className="flex flex-col gap-5 p-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-700">Lessons NO.</label>
                        <SmartSelect
                            options={lessonOptions}
                            value={formData.lessonNo}
                            onChange={(val) => handleChange("lessonNo", val)}
                            placeholder="Select Lesson"
                            className="w-full"
                            rounded="rounded-xl"
                            backgroundColor="bg-white"
                            triggerClassName="border border-gray-300 !py-3"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-700">Tutor</label>
                        <GlobalInput
                            value={formData.tutor}
                            onChange={(val) => handleChange("tutor", val)}
                            disabled
                            className="bg-white text-gray-700 !rounded-xl border !border-gray-300 !py-3"
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-700">Nature Of Dispute</label>
                    <SmartSelect
                        options={disputeOptions}
                        value={formData.natureOfDispute}
                        onChange={(val) => handleChange("natureOfDispute", val)}
                        placeholder="Place Holder"
                        className="w-full"
                        rounded="rounded-xl"
                        backgroundColor="bg-white"
                        triggerClassName="border border-gray-300 !py-3"
                    />
                </div>

                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-700">Description</label>
                    <GlobalInput
                        multiline
                        rows={4}
                        value={formData.description}
                        onChange={(val) => handleChange("description", val)}
                        placeholder="Place Holder"
                        className="w-full !rounded-xl border !border-gray-300"
                    />
                </div>

                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-700">Upload File</label>
                    <DragDropUpload
                        value={formData.files}
                        onChange={(files) => handleChange("files", files)}
                        className="!rounded-xl !py-8 bg-white"
                        multiple={true}
                    >
                        <div className="flex flex-col items-center justify-center gap-2">
                            <div className="flex items-center gap-2 text-gray-600">
                                <Search size={20} />
                                <span className="font-bold text-[#2E7D32]">Browse</span>
                                <span className="text-gray-500">or drag and drop your files here</span>
                            </div>
                        </div>
                    </DragDropUpload>
                </div>
            </div>
        </Modal>
    );
};

export default RaiseDisputeModal;
