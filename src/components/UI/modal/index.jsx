import React, { useId } from "react";
import { X } from "lucide-react";
import Button from "../button";

/**
 * Global Modal Component
 *
 * Props:
 * - isOpen: boolean
 * - onClose: () => void
 * - title?: React.ReactNode
 * - size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
 * - customWidth?: number | string  // e.g. 720 or '720px' or '42rem'
 * - showCloseIcon?: boolean
 * - closeOnOverlay?: boolean
 * - primaryButton?: { label: string; onClick?: () => void; variant?: string; disabled?: boolean }
 * - secondaryButton?: { label: string; onClick?: () => void; variant?: string; disabled?: boolean }
 * - children?: React.ReactNode // body content
 * - footer?: React.ReactNode   // custom footer (overrides default buttons)
 * - className?: string         // extra classes for wrapper box
 * - contentClassName?: string  // extra classes for inner content (padding/typography)
 */
const sizeMap = {
  xs: "max-w-sm",
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-xl",
  xl: "max-w-2xl",
};

const Modal = ({
  isOpen,
  onClose,
  title = "Modal Heading",
  size = "md",
  customWidth, // overrides size if provided
  showCloseIcon = true,
  closeOnOverlay = true,
  primaryButton,
  secondaryButton,
  children,
  footer,
  className = "",
  contentClassName = "",
  hideHeader = false,
}) => {
  const labelId = useId();

  if (!isOpen) return null;

  // Build container width classes / styles
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
    // Close only if user actually clicked the backdrop, not any child
    if (e.target === e.currentTarget) onClose?.();
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"
      onMouseDown={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelId}
    >
      <div
        className={[
          "bg-white rounded-lg shadow-lg w-full mx-4 animate-slideDown",
          widthClass,
          className,
        ].join(" ")}
        style={styleOverride}
        onMouseDown={(e) => e.stopPropagation()} // allow inner clicks
      >
        {/* Header */}
        {!hideHeader && (
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#e5e7eb]">
            <div id={labelId} className="text-lg font-semibold">
              {title}
            </div>

            {showCloseIcon && (
              <X onClick={onClose} size={20} className="cursor-pointer" />
            )}
          </div>
        )}

        {/* Body */}
        <div className={["p-4 text-gray-700 max-h-[70vh] overflow-auto", contentClassName].join(" ")}>
          {children}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 px-4 py-3">
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

export default Modal;
