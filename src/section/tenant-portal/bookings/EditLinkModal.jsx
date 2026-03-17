import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import Modal from "../../../components/UI/modal";
import Button from "../../../components/UI/button";
import GlobalInput from "../../../components/UI/Form/Input";

const EditLinkModal = ({ isOpen, onClose, initialData = [] }) => {
    const [links, setLinks] = useState(
        initialData.length > 0
            ? initialData
            : [{ link: "", password: "", meetingId: "" }]
    );

    const handleAddLink = () => {
        setLinks([...links, { link: "", password: "", meetingId: "" }]);
    };

    const handleRemoveLink = (index) => {
        if (links.length === 1) return;
        setLinks(links.filter((_, i) => i !== index));
    };

    const handleChange = (index, field, value) => {
        const newLinks = [...links];
        newLinks[index][field] = value;
        setLinks(newLinks);
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={<h5 className="text-primary font-medium">Edit Online Lesson Link</h5>}
            size="xl"
            footer={
                <div className="flex justify-between items-center flex-wrap gap-3 w-full">

                    <button
                        onClick={handleAddLink}
                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-all active:scale-95 border border-[#E5E7EB]"
                    >
                        <Plus size={20} />
                    </button>
                    <div className="flex gap-3 w-full sm:w-auto">
                        <Button
                            label="Cancel"
                            variant="white"
                            className="flex-1 sm:flex-none border-[#A3A3A3] !text-[#555555]"
                            onClick={onClose}
                        />
                        <Button
                            label="Save Changed"
                            variant="primary"
                            className="flex-1 sm:flex-none"
                            onClick={() => {
                                console.log("Saving links:", links);
                                onClose();
                            }}
                        />
                    </div>

                </div>
            }
        >
            <div className="space-y-3">
                <div>
                    <p className="text-left mb-6">
                        Copy & Paste the URL link for this students lessons (e.g. Zoom, Google Meet, Teams)
                    </p>
                </div>

                <div className="space-y-8">
                    {links.map((item, index) => (
                        <div key={index} className="space-y-4 relative group">
                            {links.length > 1 && (
                                <button
                                    onClick={() => handleRemoveLink(index)}
                                    className="absolute -right-2 -top-2 p-1 bg-rose-50 text-rose-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-rose-100"
                                >
                                    <X size={14} />
                                </button>
                            )}

                            <div className="space-y-1.5">
                                <h6 className="text-left text-label ml-1">Paste Link</h6>
                                <GlobalInput
                                    placeholder="Paste link here"
                                    value={item.link}
                                    onChange={(val) => handleChange(index, "link", val)}
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <h6 className="text-left text-label ml-1">Meeting Password</h6>
                                    <GlobalInput
                                        type="password"
                                        placeholder="Enter password"
                                        value={item.password}
                                        onChange={(val) => handleChange(index, "password", val)}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <h6 className="text-left text-label ml-1">Meeting ID</h6>
                                    <GlobalInput
                                        placeholder="Enter ID"
                                        value={item.meetingId}
                                        onChange={(val) => handleChange(index, "meetingId", val)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </Modal>
    );
};

export default EditLinkModal;
