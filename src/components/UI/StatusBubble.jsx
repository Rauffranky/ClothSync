import React from "react";

const SIZE_MAP = { sm: 36, md: 44, lg: 56 };
const ICON_SIZE_MAP = { sm: "h-4 w-4", md: "h-6 w-6", lg: "h-8 w-8" };

export default function StatusBubble({
  // content
  src,                        // SVG/PNG/JPG path
  alt = "item",

  // outer bubble sizing
  size,                       // "sm" | "md" | "lg" | number
  height, width,
  className = "",

  // inner icon sizing
  iconSize,                  
  iconClass = "",          

  bg = "bg-rose-100",

  // dot
  showDot = true,
  dotColor = "bg-emerald-400",
  dotRing = true,

  // avatar vs icon mode
  variant = "icon",           // "icon" | "avatar"

  // behavior
  as = "button",
  onClick,
  ...rest
}) {
  const resolvedOuter =
    typeof size === "number" ? size : SIZE_MAP[size] ?? undefined;

  const style = {
    height: height ?? resolvedOuter,
    width: width ?? resolvedOuter,
  };

  const Tag = as;

  // inner content sizing
  let imgClasses = "";
  if (variant === "avatar") {
    imgClasses = "h-full w-full rounded-full object-cover";
  } else {
    if (typeof iconSize === "number") {
      // use inline style for pixel size
      imgClasses = "object-contain";
    } else {
      imgClasses = ICON_SIZE_MAP[iconSize] || "h-1/2 w-1/2 object-contain";
    }
  }

  return (
    <Tag
      type={as === "button" ? "button" : undefined}
      onClick={onClick}
      className={[
        "relative inline-flex items-center justify-center rounded-full",
        "cursor-pointer select-none",
        bg,
        className,
      ].join(" ")}
      style={style}
      aria-label={alt}
      {...rest}
    >
      {/* Content */}
      {src && (
        <img
          src={src}
          alt={alt}
          className={`${imgClasses} ${iconClass}`}
          style={typeof iconSize === "number" ? { height: iconSize, width: iconSize } : {}}
          loading="lazy"
          draggable={false}
        />
      )}

      {/* Status dot */}
      {showDot && (
        <span
          className={[
            "absolute -top-0.5 -right-0.5",
            "h-3 w-3 rounded-full",
            dotColor,
            dotRing ? "ring-4 ring-white " : "",
          ].join(" ")}
        />
      )}
    </Tag>
  );
}
