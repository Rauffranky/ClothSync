import React from "react";
import {
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Star,
  Info,
  XCircle,
  GraduationCap,
} from "lucide-react";
import Badges from "../../../components/UI/badges";
import TenantGallery from "./TenantGallery";
import CardOutline from "../../../components/UI/card/CardOutline";
import { useLocation } from "react-router-dom";
const ProfileHeader = ({ tenant }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const isProfilePreview = pathname.includes("/profile-preview");

  return (
    <CardOutline
      bg={isProfilePreview ? "bg-[#F9F9F9]" : "bg-white"}
      padding="p-8"
      border="border-none"
      shadow="shadow-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Column: Basic Info & Introduction */}
        <div className="space-y-8 w-full">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="w-24 h-24 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <img
                  src={tenant.image}
                  alt={tenant.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {tenant.isVerified && (
                <div className="absolute top-2 left-2 bg-white rounded-full p-1.5 shadow-md border border-green-50">
                  <ShieldCheck
                    className="text-[#2E7D32]"
                    size={24}
                    fill="#E8F5E9"
                  />
                </div>
              )}
            </div>

            {/* Info */}
            <div className="space-y-4 pt-2 flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-[#1E1E1E]">
                    {tenant.name || "Mrs. james"}
                  </h2>
                  <div className="flex items-center justify-center md:justify-start gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < (tenant.rating || 5)
                            ? "fill-[#FFD700] text-[#FFD700]"
                            : "text-[#D1D5DB]"
                        }
                      />
                    ))}
                    <span className="text-[14px] text-[#57606A] ml-1">
                      ({tenant.reviews || 0} Reviews)
                    </span>
                  </div>
                </div>

                {/* {tenant.isTopTenant && (
                                    <div className="flex justify-center md:justify-start">
                                        <Badges
                                            label="Top Tenant"
                                            bgColor="bg-[#E8F5E9]"
                                            textColor="text-[#2E7D32]"
                                            borderColor="border-[#C8DCC4]"
                                            padding="px-4 py-1.5"
                                            fontWeight="font-medium"
                                            fontSize="text-[14px]"
                                        />
                                    </div>
                                )} */}
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-y-2 gap-x-6 text-[#1E1E1E] text-[15px] font-medium">
                  <div className="flex items-center gap-2">
                    <span>{tenant.subject || "Not Specified"}</span>
                    <Info size={16} className="text-[#57606A]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#57606A] font-normal">
                      Students Tenanted:
                    </span>
                    <span>{tenant.studentsTenanted || 0}</span>
                  </div>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-2 text-[#555555]">
                  <MapPin size={20} className="text-[#2E7D32]" />
                  <h6 className="font-medium">
                    {tenant.location || "London, England"}
                  </h6>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-6 font-medium text-[#1E1E1E]">
                  {tenant.methods?.online && (
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-[#2E7D32]" />
                      <h6 className="text-[#57606A]">Online</h6>
                    </div>
                  )}
                  {tenant.methods?.inPerson && (
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-[#2E7D32]" />
                      <h6 className="text-[#57606A]">In Person</h6>
                    </div>
                  )}
                </div>
                <div className="flex justify-center md:justify-start pt-2">
                  <Badges
                    label="Qualified Teacher"
                    bgColor="bg-[#E8F5E9]"
                    className="rounded-[12px]!"
                    textColor="text-primary"
                    borderColor="border-[#C8DCC4]"
                    icon={
                      <ShieldCheck
                        size={20}
                        className="fill-[#D4AF37] text-white"
                      />
                    }
                    padding="px-5 py-2"
                    fontSize="text-[16px]"
                    fontWeight="font-medium"
                  />
                </div>
              </div>
            </div>
          </div>
          <CardOutline shadow="shadow-inner-full  " border="border-border ">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GraduationCap size={24} className="text-primary " />
                <h5 className="font-medium">Education Level</h5>
              </div>
              <p>Bachelor's Degree in Physics</p>
            </div>
          </CardOutline>

          {/* Introduction */}
          <div className="space-y-4 text-left ">
            <h5 className="font-bold text-[#1E1E1E]">Introduction</h5>
            <h6 className="leading-[1.7] text-[#57606A]">
              {tenant.intro || "No introduction available."}
            </h6>
          </div>
          <div className="space-y-4 text-left">
            <h5 className="font-bold text-[#1E1E1E]">Experience</h5>
            <h6 className="leading-[1.7] text-[#57606A]">
              {tenant.intro || "No introduction available."}
            </h6>
          </div>
        </div>

        {/* Right Column: Status, Price & Gallery */}
        <div className="flex flex-col items-end gap-8 h-full w-full">
          {/* Status and Price */}
          <div className="flex flex-col items-end gap-6 w-full">
            {tenant.status && (
              <div className="flex justify-end pt-2">
                <Badges
                  label={tenant.status || "Pending"}
                  bgColor={
                    tenant.status === "Active"
                      ? "bg-[#2E7D32]"
                      : tenant.status === "Blocked"
                        ? "bg-red-500"
                        : tenant.status === "Suspended"
                          ? "bg-red-500"
                          : "bg-[#E0A05A]"
                  }
                  textColor="text-white"
                  padding="px-10 py-2"
                  fontSize="text-[16px]"
                  rounded="rounded-[10px]"
                  className="border-none rounded-[12px]!"
                />
              </div>
            )}
            <div className="flex items-center gap-3 pr-2">
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                <span className="text-white text-[18px] font-bold leading-none">
                  £
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-[32px] font-bold text-[#1E1E1E]">
                  {tenant.price || 0}
                </span>
                <span className="text-[18px] font-medium text-[#57606A]">
                  / Lesson
                </span>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="w-full">
            <TenantGallery />
            <CardOutline
              bg="bg-[rgba(229,229,229,0.2)]"
              border="border-none"
              shadow="shadow-inner-full"
              padding="p-6"
              className="rounded-[12px] mt-3"
            >
              <div className="space-y-4">
                {/* Certifications */}
                <div className="flex bg-[#fff] shadow-md items-center justify-between p-4 border border-[#EDEDED] rounded-xl hover:bg-[#F9F9F9] transition">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#F0F0F0] rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h6 className="font-semibold text-[#1E1E1E]">
                        Certifications
                      </h6>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="p-2 hover:bg-[#E8F5E9] rounded-lg transition">
                      <svg
                        className="w-5 h-5 text-[#57606A]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-[#E8F5E9] rounded-lg transition">
                      <svg
                        className="w-5 h-5 text-[#57606A]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Notes */}
                <div className="flex bg-[#fff] shadow-md items-center justify-between p-4 border border-[#EDEDED] rounded-xl hover:bg-[#F9F9F9] transition">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#F0F0F0] rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h6 className="font-semibold text-[#1E1E1E]">Notes</h6>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="p-2 hover:bg-[#E8F5E9] rounded-lg transition">
                      <svg
                        className="w-5 h-5 text-[#57606A]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-[#E8F5E9] rounded-lg transition">
                      <svg
                        className="w-5 h-5 text-[#57606A]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </CardOutline>
          </div>
        </div>
      </div>
    </CardOutline>
  );
};

export default ProfileHeader;
