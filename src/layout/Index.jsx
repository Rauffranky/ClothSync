import React, { useState, useEffect } from "react";
import Header from "./Header";
import DashboardHeader from "./DashboardHeader";
import { Outlet, useLocation } from "react-router-dom";
import SideBar from "./SideBar";
import HeaderIcon from "../components/headerIcon";
import { useTranslation } from 'react-i18next';

const Layout = ({ portal }) => {
  const { i18n } = useTranslation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Check if current language is RTL (Arabic)
  const isRTL = i18n.language === 'ar';

  // Determine if we are in a portal based on prop or path
  const isPortal =
    portal ||
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/tenant") ||
    location.pathname.startsWith("/student") ||
    location.pathname.startsWith("/laundries") ||
    location.pathname.startsWith("/app") ||
    location.pathname.startsWith("/labeler");

  const effectivePortal =
    portal ??
    (location.pathname.startsWith("/admin")
      ? "admin"
      : location.pathname.startsWith("/tenant")
        ? "tenant"
        : location.pathname.startsWith("/student")
          ? "student"
          : location.pathname.startsWith("/laundries")
            ? "laundries"
            : location.pathname.startsWith("/labeler")
              ? "labeler"
              : location.pathname.startsWith("/app")
                ? "client"
                : "client");

  useEffect(() => {
    if (sidebarOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen app-theme-bg app-theme-text">
      {isPortal ? (
        <DashboardHeader onHamburger={() => setSidebarOpen(true)} />
      ) : (
        <Header onHamburger={() => setSidebarOpen(true)} />
      )}

      <div className="relative">
        <SideBar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          portal={effectivePortal}
        />

        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div
          className={[
            "transition-all duration-300",
            isPortal 
              ? (isRTL ? "pt-16 lg:mr-68" : "pt-16 lg:ml-68")
              : "mt-24 lg:ml-27",
            "px-3 lg:px-4 py-6",
          ].join(" ")}
        >
          <Outlet />
        </div>

        {!isPortal && (
          <div className="block md:hidden fixed bottom-0 bg-white py-3 w-full right-0 left-0 px-6 z-50">
            <div className="flex justify-between gap-4">
              <HeaderIcon />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;