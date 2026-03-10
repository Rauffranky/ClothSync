import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NavigationButton = ({
    direction = "left",
    onClick,
    disabled = false,
    className = "",
    size = "md",
    variant = "default",
    iconSize,
    position = "relative",
    bgColorDisabled = "bg-gray-100",
    textColor = "text-primary",
    textColorDisabled = "text-gray-300",
    hoverColor = "text-primary",
    bgColor = "bg-tertiary",
    ...props
}) => {
    // Size configurations
    const sizeClasses = {
        sm: "w-8 h-8",
        md: "w-8 h-8",
        lg: "w-8 h-8"
    };

    const iconSizes = {
        sm: 16,
        md: 24,
        lg: 32
    };

    // Variant configurations
    const variantClasses = {
        default: disabled
            ? `${bgColorDisabled} ${textColorDisabled} cursor-not-allowed shadow-none`
            : `${bgColor} ${textColor} hover:${hoverColor} cursor-pointer`,
        outline: disabled
            ? `bg-transparent border-2 border-gray-200 ${textColorDisabled} cursor-not-allowed`
            : `bg-transparent border-2 border-gray-300 ${textColor} hover:border-[#4CAF50] hover:${hoverColor} cursor-pointer`,
        minimal: disabled
            ? `bg-transparent ${textColorDisabled} cursor-not-allowed`
            : `bg-transparent ${textColor} hover:${hoverColor} cursor-pointer`
    };

    // Position classes
    const positionClasses = position === "absolute"
        ? direction === "left"
            ? "absolute left-[-20px] top-1/2 -translate-y-1/2"
            : "absolute right-[-20px] top-1/2 -translate-y-1/2"
        : "";

    const finalIconSize = iconSize || iconSizes[size];

    // Concentric circle glow effect for default variant
    const glowStyle = variant === "default" && !disabled ? {
        boxShadow: `
            0 0 0 8px rgba(200, 220, 196, 0.3)  
        `
    } : {};

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                ${sizeClasses[size]}
                rounded-full
                flex items-center justify-center
                transition-all
                z-10
                ${variantClasses[variant]}
                ${positionClasses}
                ${className}
            `}
            style={{
                ...glowStyle,
                ...(variant === "default" && !disabled ? {} : {})
            }}
            aria-label={`Navigate ${direction}`}
            {...props}
        >
            {direction === "left" ? (
                <ChevronLeft size={finalIconSize} />
            ) : (
                <ChevronRight size={finalIconSize} />
            )}
        </button>
    );
};

const NavigationButtons = ({
    onLeftClick,
    onRightClick,
    canScrollLeft = true,
    canScrollRight = true,
    className = "",
    size = "md",
    variant = "default",
    showOnMobile = false,
    position = "absolute",
    ...buttonProps
}) => {
    const mobileClass = showOnMobile ? "" : "hidden md:flex";

    if (position === "relative") {
        return (
            <div className={`flex gap-4 justify-center ${mobileClass} ${className}`}>
                <NavigationButton
                    direction="left"
                    onClick={onLeftClick}
                    disabled={!canScrollLeft}
                    size={size}
                    variant={variant}
                    position="relative"
                    {...buttonProps}
                />
                <NavigationButton
                    direction="right"
                    onClick={onRightClick}
                    disabled={!canScrollRight}
                    size={size}
                    variant={variant}
                    position="relative"
                    {...buttonProps}
                />
            </div>
        );
    }

    return (
        <>
            <NavigationButton
                direction="left"
                onClick={onLeftClick}
                disabled={!canScrollLeft}
                size={size}
                variant={variant}
                position="absolute"
                className={mobileClass}
                {...buttonProps}
            />
            <NavigationButton
                direction="right"
                onClick={onRightClick}
                disabled={!canScrollRight}
                size={size}
                variant={variant}
                position="absolute"
                className={mobileClass}
                {...buttonProps}
            />
        </>
    );
};

export { NavigationButton, NavigationButtons };
export default NavigationButton;
