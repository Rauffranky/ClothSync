import React from "react";
import { useNavigate } from "react-router-dom";
import CardOutline from "../../../components/UI/card/CardOutline";

// Dummy avatars
const AVATARS = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
];

const AvatarStack = ({ count = "11+" }) => (
    <div className="flex items-center justify-center gap-1 lg:gap-2">
        {AVATARS.map((src, i) => (
            <div
                key={i}
                className="relative w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full overflow-hidden z-10 hover:scale-110 transition-all shadow-sm"
                style={{ zIndex: 10 - i }}
            >
                <img src={src} alt="user" className="w-full h-full object-cover" />
            </div>
        ))}
        <div
            className="relative w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full overflow-hidden flex items-center justify-center text-[10px] lg:text-[12px] font-medium shadow-sm z-0"
        >
            <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
                alt="more"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
            <span className="relative text-white z-10">{count}</span>
        </div>
    </div>
);

const AdminDashboardStats = () => {
    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tenants Card */}
            <div
                onClick={() => navigate("/admin/tenants")}
                className="bg-white rounded-[16px] shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-between gap-6 min-h-[180px] cursor-pointer hover:shadow-md transition-shadow"
            >
                <h3 className="text-[#333] font-medium text-[16px]">Tenants</h3>

                <AvatarStack count="11+" />

                <button className="text-[#4CAF50] text-[14px] underline underline-offset-4 hover:text-[#388E3C] transition-colors">
                    View All Tenants
                </button>
            </div>

            {/* Laundries Card */}
            <div
                onClick={() => navigate("/admin/laundries")}
                className="bg-white rounded-[16px] shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-between gap-6 min-h-[180px] cursor-pointer hover:shadow-md transition-shadow"
            >
                <h3 className="text-[#333] font-medium text-[16px]">Laundries</h3>

                <AvatarStack count="11+" />

                <button className="text-[#4CAF50] text-[14px] underline underline-offset-4 hover:text-[#388E3C] transition-colors">
                    View All Laundries
                </button>
            </div>

            {/* Disputes Card */}
            <div
                onClick={() => navigate("/admin/disputes")}
                className="bg-white rounded-[16px] shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-between gap-6 min-h-[180px] cursor-pointer hover:shadow-md transition-shadow"
            >
                <h3 className="text-[#333] font-medium text-[16px]">Disputes</h3>

                <div className="flex items-center gap-2">
                    <span className="text-[32px] font-normal text-gray-900">2</span>
                    <span className="text-gray-600 font-normal text-[16px]">Disputes</span>
                </div>

                <span className="text-gray-400 text-[14px]">
                    2 closed
                </span>
            </div>
        </div>
    );
};

export default AdminDashboardStats;
