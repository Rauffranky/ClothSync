import React, { useState } from "react";
import CardOutline from "../../../../components/UI/card/CardOutline";
import { SmartSelect } from "../../../../components/UI/Form/Dropdown";
import AvatarUpload from "../../../../components/UI/Form/AvatarUpload";
import GlobalInput from "../../../../components/UI/Form/Input";
import Radio from "../../../../components/UI/Form/Radio";

const QualificationCard = () => {
    const [levelOfEducation, setLevelOfEducation] = useState("graduation");
    const [senExperience, setSenExperience] = useState("yes");
    const [isQualifiedTeacher, setIsQualifiedTeacher] = useState("yes");
    const [trnNo, setTrnNo] = useState("21343QT");

    const educationOptions = [
        { label: "Graduation", value: "graduation" },
        { label: "Post Graduation", value: "post-graduation" },
        { label: "Doctorate", value: "doctorate" },
    ];

    const handleAvatarChange = ({ file, preview }) => {
        console.log("New qualification avatar selected:", file);
    };

    return (
        <CardOutline padding="p-6 md:p-8" border="border border-[#E5E7EB]" shadow="shadow-sm" className="bg-white h-full rounded-[24px]">
            <h5 className="font-semibold mb-6 text-xl text-gray-900">Qualification</h5>

            <div className="flex flex-col items-center mb-8">
                <AvatarUpload
                    value="https://tse4.mm.bing.net/th/id/OIP.TebsFTpqgM_Wm6uOIt9pEwHaFj?pid=Api&h=220&P=0"
                    onChange={handleAvatarChange}
                    className="mb-2"
                    size="w-32 h-32"
                />
            </div>

            <div className="space-y-6">
                {/* Level of Education */}
                <div className="space-y-2">
                    <label className="text-gray-500 text-[15px] font-medium">Level Of Education</label>
                    <SmartSelect
                        options={educationOptions}
                        value={levelOfEducation}
                        onChange={setLevelOfEducation}
                        placeholder="Select education level"
                        triggerClassName="!bg-[#EDEDED] border-none rounded-xl py-3 px-4 text-gray-700 h-12"
                        className="w-full"
                    />
                </div>

                {/* SEN Experience */}
                <div className="space-y-3">
                    <label className="text-black text-[16px] font-medium leading-tight">Do you have Special Education Needs (SEN) experience?</label>
                    <div className="flex items-center gap-6">
                        <Radio
                            name="senExperience"
                            value="yes"
                            checked={senExperience === "yes"}
                            onChange={() => setSenExperience("yes")}
                            label="Yes"
                        />
                        <Radio
                            name="senExperience"
                            value="no"
                            checked={senExperience === "no"}
                            onChange={() => setSenExperience("no")}
                            label="No"
                        />
                    </div>
                </div>

                {/* Qualified Teacher */}
                <div className="space-y-3">
                    <label className="text-black text-[16px] font-medium leading-tight">Are you a qualified teacher?</label>
                    <div className="flex items-center gap-6">
                        <Radio
                            name="qualifiedTeacher"
                            value="yes"
                            checked={isQualifiedTeacher === "yes"}
                            onChange={() => setIsQualifiedTeacher("yes")}
                            label="Yes"
                        />
                        <Radio
                            name="qualifiedTeacher"
                            value="no"
                            checked={isQualifiedTeacher === "no"}
                            onChange={() => setIsQualifiedTeacher("no")}
                            label="No"
                        />
                    </div>
                </div>


                {/* TRN No. */}
                <div className="space-y-2">
                    <label className="text-gray-500 text-[15px] font-medium">TRN No.</label>
                    <GlobalInput
                        value={trnNo}
                        onChange={setTrnNo}
                        className="!bg-[#EDEDED] !border-none !rounded-xl !py-3 !px-4 !text-gray-700 !h-12"
                    />
                </div>
            </div>
        </CardOutline>
    );
};

export default QualificationCard;
