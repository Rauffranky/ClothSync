import React from "react";
import { Star, Calendar } from "lucide-react";
import Button from "../../../components/UI/button";

// Dummy avatars
const AVATARS = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
];

const AvatarStack = () => (
    <div className="flex items-center justify-center -space-x-3">
        {AVATARS.map((src, i) => (
            <div
                key={i}
                className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden hover:scale-110 transition-transform duration-200 z-10"
                style={{ zIndex: 10 - i }}
            >
                <img src={src} alt="user" className="w-full h-full object-cover" />
            </div>
        ))}
    </div>
);

const ParentDashboardStats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tutors Card */}
            <div className="bg-white rounded-[16px] shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-between min-h-[180px] hover:shadow-md transition-shadow">
                <h3 className="text-[#333] font-medium text-[16px] mb-4">Tutors</h3>

                <div className="mb-6">
                    <AvatarStack />
                </div>

                <div className="mt-auto">
                    <Button
                        label="Raise A Dispute"
                        variant="primary"
                        size="sm"
                        className="!bg-[#4CAF50] hover:!bg-[#43A047] before:hidden shadow-none px-6 rounded-md font-medium text-white"
                    />
                </div>
            </div>

            {/* Tutor Reviews Card */}
            <div className="bg-white rounded-[16px] shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center min-h-[180px] gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#4CAF50]">
                    <Star size={24} />
                </div>

                <h3 className="text-[#333] font-medium text-[16px]">Tutor Reviews</h3>

                <div className="flex items-center gap-2">
                    <span className="text-[32px] font-normal text-gray-900">2</span>
                    <span className="text-gray-600 font-normal text-[16px]">Outstanding Reviews</span>
                </div>
            </div>

            {/* Total Bookings Card */}
            <div className="bg-white rounded-[16px] shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center min-h-[180px] gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#4CAF50]">
                    <Calendar size={24} />
                </div>

                <h3 className="text-[#333] font-medium text-[16px]">Total Bookings</h3>

                <span className="text-[32px] font-normal text-gray-900">2</span>
            </div>
        </div>
    );
};

export default ParentDashboardStats;

