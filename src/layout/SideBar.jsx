/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Bell,
  CreditCard,
  X,
  LayoutDashboard,
  Settings,
  LogOut,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { NAV } from "./ConfigNav";
import { useTranslation } from 'react-i18next'; // Add this import

const SideBar = ({
  isOpen = false,
  onClose = () => {},
  portal = "client",
  onHoverChange,
}) => {
  const { i18n } = useTranslation(); // Add this hook
  const location = useLocation();
  const menu = useMemo(() => NAV[portal] ?? NAV.client, [portal]);
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});

  // Check if current language is RTL (Arabic)
  const isRTL = i18n.language === 'ar';
  
  // Set document direction
  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language, isRTL]);

  // Sync hover state to laundry
  useEffect(() => {
    onHoverChange?.(hovered);
  }, [hovered, onHoverChange]);

  const isAdminPortal =
    portal === "admin" || location.pathname.startsWith("/admin");

  const isLabelerPortal =
    portal === "labeler" || location.pathname.startsWith("/labeler");

  // 🔹 Logo click → conditional navigation
  const handleLogo = () => {
    if (isAdminPortal) {
      navigate("/admin/dashboard");
    } else if (isLabelerPortal) {
      navigate("/labeler/dashboard");
    } else {
      navigate("/app/dashboard");
    }
  };

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const coreItems = menu.filter(
    (item) => item.label !== "Settings" && item.label !== "Logout",
  );
  const bottomItems = menu.filter(
    (item) => item.label === "Settings" || item.label === "Logout",
  );

  const toggleSubmenu = (id) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  
  // ✅ Check if any submenu of a menu item is active by current route
  const isAnySubmenuActive = (submenus = []) =>
    submenus.some(
      (s) =>
        location.pathname === s.href ||
        location.pathname.startsWith(`${s.href}/`),
    );

  // ✅ Build a lookup: { [id]: true/false } based on current route
  const activeSubmenuMap = useMemo(() => {
    const map = {};
    menu.forEach((item) => {
      if (item.submenus?.length) {
        map[item.id] = isAnySubmenuActive(item.submenus);
      }
    });
    return map;
  }, [menu, location.pathname]);

  const renderLink = ({ id, label, href, Icon, submenus, badge }) => {
    const hasSubmenus = submenus && submenus.length > 0;

    const isSubmenuActive =
      hasSubmenus &&
      submenus.some(
        (submenu) =>
          location.pathname === submenu.href ||
          location.pathname.startsWith(`${submenu.href}/`),
      );

    const isActive =
      location.pathname === href ||
      location.pathname.startsWith(`${href}/`) ||
      isSubmenuActive;

    const isExpanded = !!expandedMenus[id];

    // ✅ Screenshot style: group open -> same bg for laundry + submenu
    const isGroupOpen =
      hasSubmenus && (isExpanded || isSubmenuActive) && (hovered || isOpen);

    return (
      <div
        key={id}
        className={[
          "mb-2",
          isGroupOpen ? "bg-[#E9F7E9] rounded-2xl p-2" : "",
        ].join(" ")}
      >
        {/* Laundry Row */}
        <div
          onClick={() => {
            if (hasSubmenus) {
              toggleSubmenu(id);
            } else {
              navigate(href);
              onClose();
            }
          }}
          className={[
            "relative flex items-center gap-3 cursor-pointer px-4 py-3 group transition-all duration-300",
            "rounded-2xl overflow-hidden",
            isGroupOpen ? "bg-[#E9F7E9] text-gray-800" : "",
            !isGroupOpen && isActive ? "text-white" : "",
            !isGroupOpen && !isActive ? "text-gray-600 hover:text-white" : "",
          ].join(" ")}
        >
          {/* Gradient only when laundry is ACTIVE and NOT in group-open mode */}
          {!isGroupOpen && (
            <div
              className={[
                "rounded-[22px] absolute inset-0 z-0 bg-[linear-gradient(96deg,#2E7D32_0.45%,#66BB6A_75.9%)] transition-transform duration-500 ease-in-out",
                isActive
                  ? "translate-x-0"
                  : isRTL 
                    ? "translate-x-full group-hover:translate-x-0" // RTL animation
                    : "-translate-x-full group-hover:translate-x-0", // LTR animation
              ].join(" ")}
            />
          )}

          <div className="relative flex items-center justify-center">
            <Icon
              size={22}
              className={[
                "relative z-10 shrink-0",
                isGroupOpen ? "text-primary" : "",
              ].join(" ")}
            />
            {badge && (
              <span className={[
                "absolute -top-1 z-20 flex items-center justify-center h-4.5 w-4.5 text-[10px] font-bold rounded-full bg-orange-500 text-white border-2 border-white",
                isRTL ? "-left-1.5" : "-right-1.5" // RTL badge position
              ].join(" ")}>
                {badge}
              </span>
            )}
          </div>

          {(hovered || isOpen) && (
            <span className="relative z-10 font-medium whitespace-nowrap flex-1">
              {label}
            </span>
          )}

          {hasSubmenus && (hovered || isOpen) && (
            <div className="relative z-10">
              {isExpanded ? (
                <ChevronDown size={18} />
              ) : (
                // Rotate chevron based on RTL/LTR
                <ChevronRight 
                  size={18} 
                  className={isRTL ? "rotate-180" : ""} 
                />
              )}
            </div>
          )}
        </div>

        {/* Submenus */}
        {hasSubmenus && isExpanded && (hovered || isOpen) && (
          <div className="mt-2 space-y-1 px-2 pb-2">
            {submenus.map((submenu) => {
              const isSubActive =
                location.pathname === submenu.href ||
                location.pathname.startsWith(`${submenu.href}/`);

              return (
                <NavLink
                  key={submenu.id}
                  to={submenu.href}
                  onClick={onClose}
                  className={[
                    "flex items-center justify-between px-4 py-2 rounded-xl text-sm transition-all duration-200",
                    isSubActive
                      ? "text-white bg-[linear-gradient(96deg,#2E7D32_0.45%,#66BB6A_75.9%)]"
                      : "hover:text-white hover:bg-primary",
                  ].join(" ")}
                >
                  <span>{submenu.label}</span>

                  {submenu.badge && (
                    <span className="bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {submenu.badge}
                    </span>
                  )}
                </NavLink>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-9998 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Mobile Sidebar - Direction based on RTL */}
      <aside
        className={[
          "fixed z-9999 top-0 h-screen w-64 lg:hidden",
          "transform transition-transform duration-300 ease-out",
          isRTL ? "right-0" : "left-0", // RTL positioning
          isOpen 
            ? isRTL ? "translate-x-0" : "translate-x-0"
            : isRTL ? "translate-x-full" : "-translate-x-full", // RTL animation
        ].join(" ")}
        style={{
          background: "white",
          boxShadow: "0 0 23.179px 0 rgba(0,0,0,0.45)",
        }}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b">
          <div onClick={handleLogo} className="cursor-pointer">
            <img
              src="/new-logo-innovatiana-small.svg"
              alt="Logo"
              className="h-8"
            />
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <X size={22} className="text-gray-600" />
          </button>
        </div>

        <nav className="p-3 flex flex-col justify-between h-[calc(100dvh-64px)] overflow-auto hide-scrollbar">
          <div className="space-y-2">{coreItems.map(renderLink)}</div>
          <div className="space-y-2 border-t pt-4">
            {bottomItems.map(renderLink)}
          </div>
        </nav>
      </aside>

      {/* Desktop Sidebar - RTL positioning */}
      <aside
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setExpandedMenus((prev) => {
            const next = {};
            Object.keys(prev).forEach((key) => {
              if (activeSubmenuMap[key]) next[key] = true;
            });
            return next;
          });
        }}
        className={`
          hidden lg:flex flex-col
          fixed top-21 bottom-6
          ${isRTL ? "right-4" : "left-4"} // RTL positioning
          ${hovered ? "w-64" : "w-20"}
          bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]
          transition-all duration-300 ease-in-out
          z-100 overflow-hidden
        `}
      >
        {/* Scrollable Menu Area */}
        <div className="flex-1 overflow-y-auto overflow-x-visible px-3 py-3 hide-scrollbar">
          <div className="flex flex-col gap-2">{coreItems.map(renderLink)}</div>
        </div>

        {/* Sticky Bottom Items */}
        <div className="flex flex-col gap-2 pt-2 px-3 pb-1 bg-white">
          {bottomItems.map(renderLink)}
        </div>
      </aside>
    </>
  );
};

export default SideBar;