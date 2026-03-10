import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CardOutline from "../../../components/UI/card/CardOutline";
import Button from "../../../components/UI/button";
import { GraduationCap, Users, CircleChevronLeft, CircleChevronRight } from "lucide-react";

const AccountTypeSelectionSection = () => {
    const [selectedType, setSelectedType] = useState(sessionStorage.getItem('selectedType') || 'tutor');

    useEffect(() => {
        sessionStorage.setItem('selectedType', selectedType);
    }, [selectedType]);
    const navigate = useNavigate();

    const handleContinue = () => {
        if (selectedType === 'tutor') {
            navigate('/auth/register/tutor');
        } else {
            navigate('/auth/register/parent');
        }
    };

    return (
        <>
            <h2 className=" font-medium! mb-4">Select Account Type</h2>

            <CardOutline border="border border-border-2" shadow="shadow-inner-full" bg="bg-bg-light" rounded="rounded-[30px]" className=" w-full flex flex-wrap gap-3 md:gap-6 mb-2">
                <CardOutline
                    onClick={() => setSelectedType('tutor')}
                    border={`border-2 ${selectedType === 'tutor' ? 'border-border-3' : 'border-transparent hover:border-border-2'}`}
                    shadow={selectedType === 'tutor' ? 'shadow-sm' : 'shadow-none'}
                    rounded="rounded-[15px]"
                    padding="p-6"
                    className="flex-1 cursor-pointer transition-all duration-200 flex flex-col items-center justify-center gap-3"
                >
                    <div
                        style={
                            {
                                background: "linear-gradient(94deg, rgba(46, 125, 50, 0.30) 0.25%, rgba(102, 187, 106, 0.30) 88.23%)"
                            }
                        }
                        className={`w-12 h-12 border-2 border-border-3 rounded-full flex items-center justify-center`}>
                        <GraduationCap className="text-border-3" />
                    </div>
                    <h5>Continue As Tutor</h5>
                </CardOutline>

                <CardOutline
                    onClick={() => setSelectedType('parent')}
                    border={`border-2 ${selectedType === 'parent' ? 'border-border-3' : 'border-transparent hover:border-border-2'}`}
                    shadow={selectedType === 'parent' ? 'shadow-sm' : 'shadow-none'}
                    rounded="rounded-xl"
                    padding="p-6"
                    className="flex-1 cursor-pointer transition-all duration-200 flex flex-col items-center justify-center gap-3"
                >
                    <div
                        style={
                            {
                                background: "linear-gradient(94deg, rgba(46, 125, 50, 0.30) 0.25%, rgba(102, 187, 106, 0.30) 88.23%)"
                            }
                        }
                        className={`w-12 h-12 border-2 border-border-3 rounded-full flex items-center justify-center`}>
                        <Users className="text-border-3" />
                    </div>
                    <h5>Continue As Parent</h5>
                </CardOutline>
            </CardOutline>

            <h5 className="mb-4 mt-2">
                Already Registered? <Link to="/auth/login" className="text-border-3 font-medium hover:underline">Sign In</Link>
            </h5>

            <Button
                label="Continue"
                variant="primary"
                className="mt-8 px-22! py-3! text-[16px]!"
                onClick={handleContinue}
            />
        </>
    );
};

export default AccountTypeSelectionSection;
