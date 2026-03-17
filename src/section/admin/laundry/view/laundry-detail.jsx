import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import Button from '../../../../components/UI/button';
import CardOutline from '../../../../components/UI/card/CardOutline';
import StatusChipNew from '../../../../components/UI/StatusChipNew';

// Modals
import ApproveModal from '../../../landing-page/tenant-detail/modals/ApproveModal';
import SuspendModal from '../../../landing-page/tenant-detail/modals/SuspendModal';
import BlockModal from '../../../landing-page/tenant-detail/modals/BlockModal';

// Mock data for fallback
const mockData = {
    name: "Mrs. james",
    email: "james@gmail.com",
    phone: "+44 123 456 4567",
    address: "TW1 1AA",
    status: "Pending",
    image: null
};

const LaundryDetail = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    // specific user ka data comes from state (passed from table)
    const data = state || mockData;

    // Modal State
    const [isApproveOpen, setIsApproveOpen] = useState(false);
    const [isRejectOpen, setIsRejectOpen] = useState(false);
    const [isBlockOpen, setIsBlockOpen] = useState(false);

    return (
        <div className="mt-8">
            <div className="mb-6">
                <h3 className="text-xl font-bold">Laundry</h3>
            </div>

            <div className=" p-8 min-h-[500px] flex flex-col justify-between relative">

                {/* Top Content */}
                <CardOutline className="px-6 py-9!" border="border-none" shadow="shadow-md" rounded="rounded-[12px]">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-md">
                                <img
                                    src={data.image || "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"}
                                    alt={data.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.target.src = "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" }}
                                />
                            </div>
                        </div>

                        {/* Details */}
                        <div className="flex-grow pt-2">
                            <div className="flex justify-between items-start">
                                <div className="space-y-3">
                                    <h2 className="text-2xl font-bold text-gray-900">{data.name}</h2>

                                    <div className="flex flex-wrap gap-x-12 gap-y-3">
                                        <div className="flex items-center gap-2 text-gray-500">
                                            <Mail size={20} className="text-[#419E44]" />
                                            <span className="text-[15px] font-medium">{data.email}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-500">
                                            <Phone size={20} className="text-[#419E44]" />
                                            <span className="text-[15px] font-medium">{data.phone}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500 mt-1">
                                        <MapPin size={20} className="text-[#419E44]" />
                                        <span className="text-[15px] font-medium">{data.address || "TW1 1AA"}</span>
                                    </div>
                                </div>

                                {/* Status Badge */}
                                <div className="absolute top-0 right-0 md:static">
                                    <StatusChipNew status={data.status} />
                                </div>
                            </div>
                        </div>
                    </div>

                </CardOutline>
                {/* Buttons at Bottom Right */}
                <div className="flex justify-end gap-4 mt-12 pb-2 flex-wrap">
                    <Button
                        variant="white"
                        label="Block"
                        className="!border-red-500 !text-red-500 hover:!bg-red-50 !rounded-[8px] min-w-[120px]"
                        onClick={() => setIsBlockOpen(true)}
                    />
                    <Button
                        variant="white"
                        label="Message"
                        className="!border-[#419E44] !text-[#419E44] hover:!bg-green-50 !rounded-[8px] min-w-[120px]"
                    />
                    <Button
                        variant="white"
                        label="Reject"
                        className="bg-[#B81919]! hover:!bg-red-700 !rounded-[8px] !text-white border-none min-w-[120px] !shadow-none before:!hidden"
                        onClick={() => setIsRejectOpen(true)}
                    />
                    <Button
                        label="Approve"
                        className="!rounded-[8px] px-6!"
                        onClick={() => setIsApproveOpen(true)}
                    />
                </div>
            </div>

            {/* Modals */}
            <ApproveModal
                isOpen={isApproveOpen}
                onClose={() => setIsApproveOpen(false)}
                onApprove={() => console.log("Approved", data?.name)}
                name={data?.name}
            />

            <SuspendModal
                isOpen={isRejectOpen}
                onClose={() => setIsRejectOpen(false)}
                onSuspend={(reason) => console.log("Rejected", data?.name, reason)}
                action="Reject"
            />

            <BlockModal
                isOpen={isBlockOpen}
                onClose={() => setIsBlockOpen(false)}
                onBlock={(reason) => console.log("Blocked", data?.name, reason)}
            />
        </div >
    );
};

export default LaundryDetail;
