// DropdownMenuItem.jsx
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const GAP = 8; // space between trigger and menu

const DropdownMenuItem = ({
  title = "Menu",
  items = [],
  closeDropdown,
  anchorEl,
  className = "",
  itemClassName = "",
}) => {
  const menuRef = useRef(null);
  const [style, setStyle] = useState({ top: 0, left: 0 });

  useEffect(() => {
    function onDown(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        if (anchorEl && anchorEl.contains(e.target)) return;
        closeDropdown?.();
      }
    }
    function onKey(e) {
      if (e.key === "Escape") closeDropdown?.();
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [closeDropdown, anchorEl]);

  // Auto position (bottom-right by default, flip if needed)
  useLayoutEffect(() => {
    if (!anchorEl || !menuRef.current) return;

    const place = () => {
      const r = anchorEl.getBoundingClientRect();
      const mw = menuRef.current.offsetWidth || 224; // fallback to ~w-56
      const mh = menuRef.current.offsetHeight || 160;

      // prefer bottom-right
      let left = r.right - mw;
      let top = r.bottom + GAP;

      left = Math.max(GAP, Math.min(left, window.innerWidth - mw - GAP));

      if (top + mh > window.innerHeight - GAP) {
        top = r.top - mh - GAP;
      }
      top = Math.max(GAP, Math.min(top, window.innerHeight - mh - GAP));

      setStyle({ top, left, position: "fixed" });
    };

    place();
    const ro = new ResizeObserver(place);
    ro.observe(document.body);
    window.addEventListener("scroll", place, true);
    window.addEventListener("resize", place);
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", place, true);
      window.removeEventListener("resize", place);
    };
  }, [anchorEl]);

  // Render nothing if we don't have an anchor
  if (!anchorEl) return null;

  const menu = (
    <div
      ref={menuRef}
      role="menu"
      style={style}
      className={`w-56 bg-white rounded-2xl shadow-xl border border-black/10 px-2 py-2 z-[1000] ${className}`}
    >
      {title ? (
        <h3 className="text-gray-600 text-sm font-semibold mb-2 px-2 select-none">
          {title}
        </h3>
      ) : null}

      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id} role="menuitem">
            <button
              type="button"
              onClick={() => {
                item.onClick?.();
                closeDropdown?.();
              }}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-primary/20 cursor-pointer transition-colors text-left ${itemClassName}`}
            >
              <span className="flex items-center gap-2">
                <span className="text-gray-600">{item.icon}</span>
                <span className="text-gray-900 text-sm font-medium">
                  {item.label}
                </span>
              </span>
              {item.badge ? (
                <span className="text-xs font-bold bg-red-600 text-white px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              ) : null}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  // Portal to body so it isn't clipped by scrolling containers
  return createPortal(menu, document.body);
};

export default DropdownMenuItem;
