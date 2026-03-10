import React from "react";
import { Outlet, useLocation, useSearchParams, Link } from "react-router-dom";
import CardOutline from "../components/UI/card/CardOutline";
import Logo from "../components/Logo";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import DashboardHeader from "./DashboardHeader";

const AuthLayout = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const pathname = location.pathname;

  // Determine navigation based on current route
  const getNavigation = () => {
    // Account Type Selection
    if (pathname === "/auth/account-type") {
      return {
        left: null,
        right: "Select Account Type",
      };
    }

    // Login
    if (pathname === "/auth/login") {
      return {
        left: { to: "/auth/account-type", label: "Select Account Type" },
        right: null,
      };
    }

    // Registration
    if (pathname.includes("/auth/register")) {
      return {
        left: { to: "/auth/account-type", label: "Select Account Type" },
        right: "Enter OTP",
      };
    }

    // OTP Verification
    if (pathname === "/auth/verify-otp") {
      if (mode === "login") {
        return {
          left: { to: "/auth/login", label: "Login" },
          right: "Enter OTP",
        };
      } else if (mode === "forgot-password") {
        return {
          left: { to: "/auth/forgot-password", label: "Forgot Password" },
          right: "Enter OTP",
        };
      } else if (mode === "2fa") {
        return {
          left: { to: "/auth/2fa", label: "2FA Setup" },
          right: "Enter OTP",
        };
      } else {
        return {
          left: { to: "/auth/register/tutor", label: "Create Account" },
          right: "Enter OTP",
        };
      }
    }

    // Forgot Password
    if (pathname === "/auth/forgot-password") {
      return {
        left: { to: "/auth/login", label: "Login" },
        right: "Forgot Password",
      };
    }

    // New Password
    if (pathname === "/auth/new-password") {
      return {
        left: {
          to: "/auth/verify-otp?mode=forgot-password",
          label: "Enter OTP",
        },
        right: "New Password",
      };
    }

    // Email Confirmed
    if (pathname === "/auth/email-confirmed") {
      if (mode === "2fa") {
        return {
          left: { to: "/auth/verify-otp?mode=2fa", label: "Enter OTP" },
          right: "2FA Confirmed",
        };
      } else if (mode === "forgot-password") {
        return {
          left: { to: "/auth/new-password", label: "New Password" },
          right: "Verified",
        };
      } else {
        return {
          left: { to: "/auth/verify-otp", label: "Enter OTP" },
          right: "Email Confirmed",
        };
      }
    }

    // 2FA Setup
    if (pathname === "/auth/2fa") {
      return {
        left: { to: "/auth/email-confirmed", label: "Email Confirmed" },
        right: "2FA Setup",
      };
    }

    // Create Tutor Profile
    if (pathname === "/auth/create-tutor-profile") {
      return {
        left: { to: "/auth/2fa", label: "Phone Number" },
        right: "Introduction",
      };
    }

    // Introduction Video
    if (pathname === "/auth/introduction-video") {
      return {
        left: {
          to: "/auth/create-tutor-profile",
          label: "General Information",
        },
        right: "Upload Documents",
      };
    }

    // Upload Documents
    if (pathname === "/auth/upload-documents") {
      return {
        left: {
          to: "/auth/introduction-video",
          label: "Introduction Video",
        },
        right: "Qualifications",
      };
    }

    // Your Qualifications
    if (pathname === "/auth/your-qualifications") {
      return {
        left: {
          to: "/auth/upload-documents",
          label: "Upload Documents & Images",
        },
        right: "Add Core Subject",
      };
    }

    // Add Core Subject
    if (pathname === "/auth/add-core-subject") {
      return {
        left: {
          to: "/auth/your-qualifications",
          label: "Enter Qualification",
        },
        right: "Your Availability",
      };
    }

    // Your Availability
    if (pathname === "/auth/your-availability") {
      return {
        left: {
          to: "/auth/add-core-subject",
          label: "Add Core Subjects",
        },
        right: "Profile Preview",
      };
    }
    return null;
  };

  const navigation = getNavigation();

  const isProfilePreview = pathname === "/auth/profile-preview";

  return (
    <div className="min-h-screen app-theme-bg app-theme-text">
      <DashboardHeader hideAvatar={true} />
      <div
        className={
          isProfilePreview
            ? "min-h-screen md:w-[1130px] w-full mx-auto px-4 py-8 pt-24"
            : "min-h-screen md:w-[630px] w-full mx-auto px-4 py-8 pt-24"
        }
      >
        <div className="">
          <CardOutline
            border="border border-border-2"
            shadow="shadow-inner-full"
            rounded="rounded-[40px]"
            padding="md:px-8 px-4 py-8"
            bg="bg-bg-light"
            className="flex flex-col items-center text-center w-full"
          >
            {/* Navigation Breadcrumb */}
            {navigation && (
              <div className="w-full flex justify-between items-center">
                {navigation.left ? (
                  <Link
                    to={navigation.left.to}
                    className="flex items-center gap-1"
                  >
                    <CircleChevronLeft size={18} />
                    <h6>{navigation.left.label}</h6>
                  </Link>
                ) : (
                  <span className="flex items-center gap-1 text-gray-400 cursor-not-allowed">
                    &nbsp;
                  </span>
                )}

                {navigation.right ? (
                  <span className="flex items-center gap-1 text-gray-400 cursor-not-allowed">
                    {navigation.right}
                    <CircleChevronRight size={18} />
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-gray-400 cursor-not-allowed">
                    &nbsp;
                  </span>
                )}
              </div>
            )}

            <div className="w-full">
              <div className="mb-2 flex justify-center">
                <Logo />
              </div>
              <Outlet />
            </div>
          </CardOutline>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
