import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProfileHeader from "../../section/landing-page/tenant-detail/ProfileHeader";
import SubjectsRates from "../../section/landing-page/tenant-detail/SubjectsRates";
import Reviews from "../../section/landing-page/tenant-detail/Reviews";
import Button from "../../components/UI/button";
import { ChevronLeft } from "lucide-react";

// Modals
import SuspendModal from "../../section/landing-page/tenant-detail/modals/SuspendModal";
import BlockModal from "../../section/landing-page/tenant-detail/modals/BlockModal";
import ApproveModal from "../../section/landing-page/tenant-detail/modals/ApproveModal";

// Mock data lookup for tenant details
const tenantDetails = {
  // Original Data (Restored for Browse Tenants)
  1: {
    id: 1,
    name: "Ms. Alice",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    location: "Warburton, UK",
    price: 547,
    lessonCount: 547,
    rating: 5,
    reviews: 12,
    subject: "GCSE Physics",
    studentsTenanted: 13,
    status: "Active",
    methods: { online: true, inPerson: true },
    isTopTenant: true,
    isVerified: true,
    intro:
      "Lorem ipsum dolor sit amet consectetur. Pharetra fames et id semper. Egestas nibh feugiat erat ipsum nulla imperdiet. Enim mattis morbi arcu consequat netus odio massa quisque lorem. Sit imperdiet elit viverra mattis venenatis augue vivamus eros cras. Nec id ultrices cras libero.",
    experience:
      "Lorem ipsum dolor sit amet consectetur. Pharetra fames et id semper. Egestas nibh feugiat erat ipsum nulla imperdiet. Enim mattis morbi arcu consequat netus odio massa quisque lorem. Sit imperdiet elit viverra mattis venenatis augue vivamus eros cras. Nec id ultrices cras libero.",
  },
  2: {
    id: 2,
    name: "Mr. John",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    location: "Manchester, UK",
    price: 547,
    lessonCount: 547,
    rating: 5,
    reviews: 12,
    subject: "GCSE Physics",
    studentsTenanted: 13,
    status: "Active",
    methods: { online: true, inPerson: false },
    isTopTenant: true,
    isVerified: true,
    intro:
      "Lorem ipsum dolor sit amet consectetur. Pharetra fames et id semper. Egestas nibh feugiat erat ipsum nulla imperdiet. Enim mattis morbi arcu consequat netus odio massa quisque lorem. Sit imperdiet elit viverra mattis venenatis augue vivamus eros cras. Nec id ultrices cras libero.",
    experience:
      "Lorem ipsum dolor sit amet consectetur. Pharetra fames et id semper. Egestas nibh feugiat erat ipsum nulla imperdiet. Enim mattis morbi arcu consequat netus odio massa quisque lorem. Sit imperdiet elit viverra mattis venenatis augue vivamus eros cras. Nec id ultrices cras libero.",
  },
  3: {
    id: 3,
    name: "Ms. Amelia",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    location: "Los Angeles, USA",
    price: 547,
    lessonCount: 547,
    rating: 5,
    reviews: 12,
    subject: "GCSE English",
    studentsTenanted: 13,
    methods: { online: false, inPerson: true },
    isTopTenant: true,
    isVerified: true,
    intro:
      "Lorem ipsum dolor sit amet consectetur. Pharetra fames et id semper. Egestas nibh feugiat erat ipsum nulla imperdiet. Enim mattis morbi arcu consequat netus odio massa quisque lorem. Sit imperdiet elit viverra mattis venenatis augue vivamus eros cras. Nec id ultrices cras libero.",
    experience:
      "Lorem ipsum dolor sit amet consectetur. Pharetra fames et id semper. Egestas nibh feugiat erat ipsum nulla imperdiet. Enim mattis morbi arcu consequat netus odio massa quisque lorem. Sit imperdiet elit viverra mattis venenatis augue vivamus eros cras. Nec id ultrices cras libero.",
  },

  // Admin Tenants Data (New IDs)
  101: {
    id: 101,
    name: "Amelia Kerr",
    image:
      "https://preview.redd.it/amelia-kerr-v0-sw82ln3bwxqb1.jpg?width=1080&crop=smart&auto=webp&s=5618897738ef47c0c5546656483fe2eb855eb6f1",
    location: "Warburton, UK",
    price: 547,
    lessonCount: 547,
    rating: 5,
    reviews: 12,
    subject: "GCSE Physics",
    studentsTenanted: 13,
    methods: { online: true, inPerson: true },
    isTopTenant: true,
    isVerified: true,
    status: "Active",
    intro:
      "Lorem ipsum dolor sit amet consectetur. Pharetra fames et id semper. Egestas nibh feugiat erat ipsum nulla imperdiet. Enim mattis morbi arcu consequat netus odio massa quisque lorem. Sit imperdiet elit viverra mattis venenatis augue vivamus eros cras. Nec id ultrices cras libero.",
    experience:
      "Lorem ipsum dolor sit amet consectetur. Pharetra fames et id semper. Egestas nibh feugiat erat ipsum nulla imperdiet. Enim mattis morbi arcu consequat netus odio massa quisque lorem. Sit imperdiet elit viverra mattis venenatis augue vivamus eros cras. Nec id ultrices cras libero.",
  },
  102: {
    id: 102,
    name: "Babar Azam",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.qQwYqaPBeldhc_2gOfp0ugHaFL?pid=Api&h=220&P=0",
    location: "Manchester, UK",
    price: 547,
    lessonCount: 547,
    rating: 5,
    reviews: 12,
    subject: "GCSE Physics",
    studentsTenanted: 13,
    methods: { online: true, inPerson: false },
    isTopTenant: true,
    isVerified: true,
    status: "Blocked",
    intro:
      "Lorem ipsum dolor sit amet consectetur. Pharetra fames et id semper. Egestas nibh feugiat erat ipsum nulla imperdiet. Enim mattis morbi arcu consequat netus odio massa quisque lorem. Sit imperdiet elit viverra mattis venenatis augue vivamus eros cras. Nec id ultrices cras libero.",
    experience:
      "Lorem ipsum dolor sit amet consectetur. Pharetra fames et id semper. Egestas nibh feugiat erat ipsum nulla imperdiet. Enim mattis morbi arcu consequat netus odio massa quisque lorem. Sit imperdiet elit viverra mattis venenatis augue vivamus eros cras. Nec id ultrices cras libero.",
  },
  103: {
    id: 103,
    name: "Mohammad Hafeez",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.2r49UYpVWyWwlm852wK7YAHaEO?pid=Api&h=220&P=0",
    location: "Los Angeles, USA",
    price: 547,
    lessonCount: 547,
    rating: 5,
    reviews: 12,
    subject: "GCSE English",
    studentsTenanted: 13,
    methods: { online: false, inPerson: true },
    isTopTenant: true,
    isVerified: true,
    status: "Pending",
    intro:
      "Lorem ipsum dolor sit amet consectetur. Pharetra fames et id semper. Egestas nibh feugiat erat ipsum nulla imperdiet. Enim mattis morbi arcu consequat netus odio massa quisque lorem. Sit imperdiet elit viverra mattis venenatis augue vivamus eros cras. Nec id ultrices cras libero.",
    experience:
      "Lorem ipsum dolor sit amet consectetur. Pharetra fames et id semper. Egestas nibh feugiat erat ipsum nulla imperdiet. Enim mattis morbi arcu consequat netus odio massa quisque lorem. Sit imperdiet elit viverra mattis venenatis augue vivamus eros cras. Nec id ultrices cras libero.",
  },
  // Fallback for ms-amelia slug if needed
  "ms-amelia": {
    id: 1,
    name: "Ms. Alice",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    location: "Warburton, UK",
    price: 547,
    lessonCount: 547,
    rating: 5,
    reviews: 12,
    subject: "GCSE Physics",
    studentsTenanted: 13,
    methods: { online: true, inPerson: true },
    isTopTenant: true,
    isVerified: true,
    intro:
      "Lorem ipsum dolor sit amet consectetur. Pharetra fames et id semper. Egestas nibh feugiat erat ipsum nulla imperdiet. Enim mattis morbi arcu consequat netus odio massa quisque lorem. Sit imperdiet elit viverra mattis venenatis augue vivamus eros cras. Nec id ultrices cras libero.",
    experience:
      "Lorem ipsum dolor sit amet consectetur. Pharetra fames et id semper. Egestas nibh feugiat erat ipsum nulla imperdiet. Enim mattis morbi arcu consequat netus odio massa quisque lorem. Sit imperdiet elit viverra mattis venenatis augue vivamus eros cras. Nec id ultrices cras libero.",
  },
};

import { Helmet } from "@dr.pogodin/react-helmet";

const TenantDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [isSuspendModalOpen, setIsSuspendModalOpen] = useState(false);
  const [isBlockModalOpen, setIsBlockModalOpen] = useState(false);
  const [isApproveModalOpen, setIsApproveModalOpen] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tenant = tenantDetails[slug] || tenantDetails["ms-amelia"]; // Fallback for demo

  return (
    <div className="min-h-screen pb-20 pt-10 px-6">
      <Helmet>
        <title>
          {tenant?.name
            ? `${tenant.name} | Tuition Farm`
            : "Tenant Details | Tuition Farm"}
        </title>
        <meta name="description" content={`View profile for ${tenant?.name}`} />
      </Helmet>
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Back Link */}
        <button
          onClick={() => navigate("/browse-tenants")}
          className="flex items-center gap-2 text-[#57606A] hover:text-primary transition-colors font-medium"
        >
          <ChevronLeft size={20} />
          Back to Browse
        </button>

        {/* Profile Information (Includes Intro & Gallery now) */}
        <ProfileHeader tenant={tenant} />

        {/* Lower Sections: Rates, Experience & Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-12 space-y-12">
            <SubjectsRates />
            {/* <Experience text={tenant.experience} /> */}
            <Reviews />
          </div>
        </div>
        {/* <div className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-sm space-y-6 sticky top-24">
                            <div className="flex justify-between items-center">
                                <span className="text-[#57606A] font-medium">Hourly Rate</span>
                                <span className="text-2xl font-bold text-primary">£{tenant.price}</span>
                            </div>
                            <Button label="Book a Lesson" className="w-full h-14 text-lg" />
                            <p className="text-center text-[13px] text-[#57606A]">
                                Free 15-minute consultation included
                            </p>
                        </div> */}
        <div className="flex items-center justify-end gap-2">
          <Button
            variant="white"
            label="Block"
            onClick={() => setIsBlockModalOpen(true)}
            className="border border-red-500! text-red-500!"
          />
          <Button
            variant="white"
            label="Suspend"
            onClick={() => setIsSuspendModalOpen(true)}
            className="border border-[#6352A2]! text-[#6352A2]!"
          />
          <Button
            variant="white"
            label={
              <span
                style={{
                  background:
                    "var(--Linear, linear-gradient(94deg, #2E7D32 0.25%, #66BB6A 88.23%))",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "translaundry",
                }}
              >
                Message
              </span>
            }
            className="text-lg !border-translaundry"
            style={{
              background:
                "linear-gradient(#fff, #fff) padding-box, var(--Linear, linear-gradient(94deg, #2E7D32 0.25%, #66BB6A 88.23%)) border-box",
              border: "1px solid translaundry",
            }}
          />
          <Button
            label="Approve"
            onClick={() => setIsApproveModalOpen(true)}
            className="text-lg w-[140px]"
          />
        </div>

        {/* Modals */}
        <SuspendModal
          isOpen={isSuspendModalOpen}
          onClose={() => setIsSuspendModalOpen(false)}
          onSuspend={(reason) => console.log("Suspended:", reason)}
        />

        <BlockModal
          isOpen={isBlockModalOpen}
          onClose={() => setIsBlockModalOpen(false)}
          onBlock={(reason) => console.log("Blocked:", reason)}
        />

        <ApproveModal
          isOpen={isApproveModalOpen}
          onClose={() => setIsApproveModalOpen(false)}
          onApprove={() => console.log("Approved")}
          name={tenant?.name}
        />
      </div>
    </div>
  );
};

export default TenantDetail;
