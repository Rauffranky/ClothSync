import React, { useState } from "react";
import { MapPin } from "lucide-react";
import GlobalInput from "../../../../components/UI/Form/Input";
import Button from "../../../../components/UI/button";
import CardOutline from "../../../../components/UI/card/CardOutline";

const ContactUsSettings = () => {
    // Contact Info State
    const [phone, setPhone] = useState("+44 77000006077");
    const [email, setEmail] = useState("tuitionfarm@gmail.com");
    const [address, setAddress] = useState("1 Learning Lane, Knowledge Park");

    // Social Links State
    const [instagram, setInstagram] = useState("tuitionfarminstaprofile");
    const [xHandle, setXHandle] = useState("tuitionfarminstaprofile");
    const [facebook, setFacebook] = useState("tuitionfarminstaprofile");

    const handleSaveContact = () => {
        console.log("Saving Contact Info:", { phone, email, address });
    };

    const handleSaveSocials = () => {
        console.log("Saving Socials:", { instagram, xHandle, facebook });
    };

    const inputClass = "bg-[#EDEDED]! border-gray-200";

    return (
        <div className="space-y-8">
            {/* Contact Us Section */}
            <div>
                <h5 className="font-medium text-lg mb-6">Contact Us</h5>
                <CardOutline border="border-gray-200" shadow="shadow-inner-full" bg="bg-gray-50" className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm text-gray-600">Phone Number</label>
                            <GlobalInput
                                value={phone}
                                onChange={setPhone}
                                className={inputClass}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-gray-600">Email</label>
                            <GlobalInput
                                value={email}
                                onChange={setEmail}
                                className={inputClass}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-600">Address</label>
                        <GlobalInput
                            value={address}
                            onChange={setAddress}
                            className={inputClass}
                            rightIcon={<MapPin size={18} className="text-gray-500" />}
                        />
                    </div>
                </CardOutline>

                <div className="flex justify-end mt-4">
                    <Button
                        label="Save Changes"
                        variant="primary"
                        className="px-6!"
                        onClick={handleSaveContact}
                    />
                </div>
            </div>

            {/* Social Link Section */}
            <div>
                <h5 className="font-medium text-lg mb-6">Social link</h5>
                <CardOutline border="border-gray-200" shadow="shadow-inner-full" bg="bg-gray-50" className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm text-gray-600">Instagram</label>
                            <GlobalInput
                                value={instagram}
                                onChange={setInstagram}
                                className={inputClass}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-gray-600">X</label>
                            <GlobalInput
                                value={xHandle}
                                onChange={setXHandle}
                                className={inputClass}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm text-gray-600">Facebook</label>
                            <GlobalInput
                                value={facebook}
                                onChange={setFacebook}
                                className={inputClass}
                            />
                        </div>
                        {/* Empty div for grid alignment if needed, or just let it wrap naturally */}
                    </div>
                </CardOutline>

                <div className="flex justify-end mt-4">
                    <Button
                        label="Save Changes"
                        variant="primary"
                        className="px-6!"
                        onClick={handleSaveSocials}
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactUsSettings;
