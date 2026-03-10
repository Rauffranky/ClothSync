import React, { useState } from "react";
import CardOutline from "../../../../components/UI/card/CardOutline";
import Button from "../../../../components/UI/button";
import { SmartSelect } from "../../../../components/UI/Form/Dropdown";
import GlobalInput from "../../../../components/UI/Form/Input";

const AddSubjectCard = () => {
    const [price, setPrice] = useState(40);

    const levelOptions = [
        { label: "GCSE", value: "gcse" },
        { label: "A-Level", value: "a-level" },
        { label: "Primary", value: "primary" },
    ];

    const subjectOptions = [
        { label: "Physics", value: "physics" },
        { label: "Mathematics", value: "math" },
        { label: "English", value: "english" },
    ];

    const examBoardOptions = [
        { label: "OCR", value: "ocr" },
        { label: "AQA", value: "aqa" },
        { label: "Edexcel", value: "edexcel" },
    ];

    const adjustPrice = (amount) => {
        setPrice(prev => Math.max(0, prev + amount));
    };

    return (
        <CardOutline padding="p-6" border="border-[#DCDCDC]" shadow="shadow-inner-full" className="bg-[#E5E5E533]! h-full">
            <h5 className="font-semibold mb-6 text-[18px]">Add Subjects & Fees:</h5>

            <div className="space-y-6">
                {/* Education Level */}
                <div className="space-y-2">
                    <h6 className="text-[14px] text-label font-medium">Education Level</h6>
                    <SmartSelect
                        options={levelOptions}
                        placeholder="level"
                        triggerClassName="!bg-[#EDEDED] !border-[#DCDCDC] !rounded-[12px] !py-3"
                        className="w-full"
                    />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                    <h6 className="text-[14px] text-label font-medium">Subject</h6>
                    <SmartSelect
                        options={subjectOptions}
                        placeholder="subject"
                        triggerClassName="!bg-[#EDEDED] !border-[#DCDCDC] !rounded-[12px] !py-3"
                        className="w-full"
                    />
                </div>

                {/* Exam Board */}
                <div className="space-y-2">
                    <h6 className="text-[14px] text-label font-medium">Exam Board</h6>
                    <SmartSelect
                        options={examBoardOptions}
                        placeholder="Place Holder"
                        triggerClassName="!bg-[#EDEDED] !border-[#DCDCDC] !rounded-[12px] !py-3"
                        className="w-full"
                    />
                </div>

                {/* Price Per Lesson */}
                <div className="space-y-2">
                    <h6 className="text-[14px] text-label font-medium">Price per lesson</h6>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <Button
                            label="-1"
                            onClick={() => adjustPrice(-1)}
                            className="w-10 h-10 sm:w-[50px] sm:h-[50px] flex-shrink-0 !rounded-[10px] flex items-center justify-center text-[16px] sm:text-[18px] font-semibold hover:!bg-[#2E7D32] transition-colors p-0"
                        />
                        <div className="flex-1 min-w-0">
                            <GlobalInput
                                value={`£${price}`}
                                onChange={(val) => setPrice(parseInt(val.replace(/\D/g, '')) || 0)}
                                className="!bg-[#EDEDED] !border-[#DCDCDC] !rounded-[12px] !text-center !py-2 sm:!py-3 font-medium text-[#555555]"
                            />
                        </div>

                        <Button
                            label="+1"
                            onClick={() => adjustPrice(1)}
                            className="w-10 h-10 sm:w-[50px] sm:h-[50px] flex-shrink-0 !rounded-[10px] flex items-center justify-center text-[16px] sm:text-[18px] font-semibold hover:!bg-[#43A047] transition-colors p-0"
                        />
                    </div>
                </div>

                {/* Save & Add Button */}
                <div className="flex justify-end pt-4">
                    <Button
                        label="Save & Add"
                        variant="primary"
                        className="!bg-[#4CAF50] !rounded-[12px] px-8 py-3 text-[16px] font-semibold"
                        onClick={() => console.log("Save & Add clicked")}
                    />
                </div>
            </div>
        </CardOutline>
    );
};

export default AddSubjectCard;
