import React from "react";
import { useNavigate } from "react-router-dom";
import { CreditCard, Users, Star, Banknote } from "lucide-react";
import CardOutline from "../../components/UI/card/CardOutline";

const TenantDashboardStats = () => {
  const navigate = useNavigate();

  const stats = [
    {
      id: 1,
      label: "Total Revenue",
      value: "£2,130",
      icon: <Banknote className="text-[#2E7D32]" size={24} />,
      iconColor: "text-[#2E7D32]",
      bgColor:
        "bg-[linear-gradient(94deg,rgba(46,125,50,0.30)_0.25%,rgba(102,187,106,0.30)_88.23%)]",
      bg2Color: "bg-[rgba(46,125,50,0.10)]",
      borderColor: "border-[#2E7D32]",
    },
    {
      id: 2,
      label: "Total Students",
      value: "2,130",
      linkText: "View All Students",
      path: "/tenant/private-lesson",
      icon: <Users className="text-[#3B82F6]" size={24} />,
      iconColor: "text-[#3B82F6]",
      bgColor:
        "bg-[linear-gradient(94deg,rgba(59,130,246,0.30)_0.25%,rgba(96,165,250,0.30)_88.23%)]",
      bg2Color: "bg-[rgba(59,130,246,0.10)]",
      borderColor: "border-[#3B82F6]",
    },
    {
      id: 3,
      label: "Total Reviews",
      value: "4.9",
      linkText: "View All Reviews",
      icon: <Star className="text-[#F59E0B]" size={24} />,
      iconColor: "text-[#F59E0B]",
      bgColor:
        "bg-[linear-gradient(94deg,rgba(245,158,11,0.30)_0.25%,rgba(251,191,36,0.30)_88.23%)]",
      bg2Color: "bg-[rgba(245,158,11,0.10)]",
      borderColor: "border-[#F59E0B]",
      showStars: true,
    },
  ];

  const renderStars = () => {
    return (
      <div className="flex items-center gap-0.5 mt-1">
        {[1, 2, 3, 4].map((i) => (
          <Star key={i} size={20} fill="currentColor" className="text-black" />
        ))}
        <Star size={20} className="text-black" /> {/* Simplified half star */}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {stats.map((stat) => (
        <CardOutline
          key={stat.id}
          className="flex flex-col items-center py-8 px-4 text-center"
          bg={stat.bg2Color}
          border="border-[1px] border-[#DCDCDC]"
          shadow="none"
        >
          <div
            className={`p-3 rounded-full border ${stat.borderColor} ${stat.bgColor} mb-4`}
          >
            {stat.icon}
          </div>
          <span className="text-gray-600 text-sm font-medium mb-1">
            {stat.label}
          </span>
          <div className="flex items-center gap-2">
            <h1 className=" font-normal! ">{stat.value}</h1>
            {stat.showStars && renderStars(stat.value)}
          </div>
          {stat.linkText && (
            <button
              className="text-gray-600 text-xs mt-2 cursor-pointer "
              onClick={() => stat.path && navigate(stat.path)}
            >
              {stat.linkText}
            </button>
          )}
        </CardOutline>
      ))}
    </div>
  );
};

export default TenantDashboardStats;
