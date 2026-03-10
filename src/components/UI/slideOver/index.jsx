import React, { useEffect, useId, useRef, useState } from "react";
import { X } from "lucide-react";
import Button from "../button";

const sizeMap = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
};

const ANIM_MS = 400; // keep in sync with CSS durations (ms)

const SlideOver = ({
  isOpen,
  onClose,
  title = "Modal Heading",
  size = "md",
  customWidth,
  showCloseIcon = true,
  closeOnOverlay = true,
  primaryButton,
  secondaryButton,
  children,
  footer,
  className = "",
  contentClassName = "",
}) => {
  const labelId = useId();
  const [render, setRender] = useState(isOpen);     // controls mount/unmount
  const [exiting, setExiting] = useState(false);    // exit animation flag
  const exitTimer = useRef(null);

  // Mount on open
  useEffect(() => {
    if (isOpen) {
      if (exitTimer.current) {
        clearTimeout(exitTimer.current);
        exitTimer.current = null;
      }
      setRender(true);
      setExiting(false);
    } else if (render) {
      // play exit animation then unmount
      setExiting(true);
      exitTimer.current = setTimeout(() => {
        setRender(false);
        setExiting(false);
      }, ANIM_MS);
    }
    return () => {
      if (exitTimer.current) clearTimeout(exitTimer.current);
    };
  }, [isOpen, render]);

  // ESC to close
  useEffect(() => {
    if (!render) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [render, onClose]);

  if (!render) return null;

  const widthClass = sizeMap[size] || sizeMap.md;
  const styleOverride =
    customWidth !== undefined
      ? {
          width: typeof customWidth === "number" ? `${customWidth}px` : customWidth,
          maxWidth: "100%",
        }
      : undefined;

  const handleOverlayClick = (e) => {
    if (!closeOnOverlay) return;
    if (e.target === e.currentTarget) onClose?.();
  };

  // Choose animation classes by state
  const overlayAnim = exiting ? "animate-fadeOut" : "animate-fadeIn";
  const panelAnim = exiting ? "animate-slideOutRight" : "animate-slideInRight";

  return (
    <div
      className={`fixed inset-0 z-[9999] flex justify-end bg-black/50 backdrop-blur-sm ${overlayAnim}`}
      onMouseDown={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelId}
    >
      <div
        className={[
          "bg-white h-full shadow-2xl w-full", // base
          panelAnim,                            // enter/exit anim
          widthClass,
          className,
        ].join(" ")}
        style={styleOverride}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <p id={labelId} className="text-lg font-semibold">
            {title}
          </p>
          {showCloseIcon && (
            <X onClick={onClose} size={20} className="cursor-pointer" />
          )}
        </div>

        {/* Body */}
        <div
          className={[
            "p-4 text-gray-700 overflow-y-auto flex-1",
            contentClassName,
          ].join(" ")}
          style={{ height: "calc(100dvh - 120px)" }}
        >
          {children}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 px-4 py-3 border-t border-gray-200">
          {footer ? (
            footer
          ) : (
            <>
              {secondaryButton?.label && (
                <Button
                  label={secondaryButton.label}
                  variant={secondaryButton.variant || "secondary"}
                  onClick={secondaryButton.onClick || onClose}
                  disabled={secondaryButton.disabled}
                />
              )}
              {primaryButton?.label && (
                <Button
                  label={primaryButton.label}
                  variant={primaryButton.variant || "primary"}
                  onClick={primaryButton.onClick}
                  disabled={primaryButton.disabled}
                />
              )}
              {!primaryButton && !secondaryButton && (
                <Button label="Close" variant="primary" onClick={onClose} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SlideOver;
