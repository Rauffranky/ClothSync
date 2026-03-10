import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import CardOutline from "../../../../components/UI/card/CardOutline";
import GlobalInput from "../../../../components/UI/Form/Input";
import Button from "../../../../components/UI/button";

const IntroExperienceCard = () => {
    const [introduction, setIntroduction] = useState("I am professional tutor");
    const [description, setDescription] = useState("I am professional tutor");

    return (
        <CardOutline padding="p-6" border="border-[#DCDCDC]" shadow="shadow-inner-full" className="bg-[#E5E5E533]! h-full">
            <h5 className="font-semibold mb-8">Intro & Experience</h5>

            <div className="space-y-8">
                {/* Introduction */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <h6 className="text-[14px] text-label font-medium">Introduction</h6>
                        <Button
                            label="Improve with AI"
                            variant="white"
                            size="sm"
                            leftIcon={<Sparkles size={16} className="text-[#666]" />}
                            className="!border-[#DCDCDC] !text-[#666] !rounded-[8px] !py-1.5 !px-3 text-[13px] !bg-[#EAEAEA]"
                        />
                    </div>
                    <div className="relative">
                        <GlobalInput
                            multiline
                            rows={5}
                            value={introduction}
                            onChange={setIntroduction}
                            className="!bg-[#EDEDED] !border-[#DCDCDC] rounded-[12px]!"
                        />
                        <div className="absolute -bottom-6 right-0 text-[12px] text-gray-400">
                            {introduction.length}/100
                        </div>
                    </div>
                </div>

                {/* Full Description */}
                <div className="space-y-2 pt-2">
                    <div className="flex justify-between items-center">
                        <h6 className="text-[14px] text-label font-medium">Full Description</h6>
                        <Button
                            label="Improve with AI"
                            variant="white"
                            size="sm"
                            leftIcon={<Sparkles size={16} className="text-[#666]" />}
                            className="!border-[#DCDCDC] !rounded-[8px] text-[#666] !py-1.5 !px-3 text-[13px] !bg-[#EAEAEA]"
                        />
                    </div>
                    <GlobalInput
                        multiline
                        rows={8}
                        value={description}
                        onChange={setDescription}
                        className="!bg-[#EDEDED] !border-[#DCDCDC] rounded-[12px]!"
                    />
                </div>
            </div>
        </CardOutline>
    );
};

export default IntroExperienceCard;
