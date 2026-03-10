import React from "react";

const SIZES = {
  sm: { trackW: 44, trackH: 24, pad: 4 }, 
  md: { trackW: 64, trackH: 32, pad: 4 },
  lg: { trackW: 80, trackH: 40, pad: 5 },
};

export default function Toggle({
  checked,
  onChange,
  size = "md",
  onColor = "#FFB400",
  offColor = "#E5E7EB",
  disabled = false,
  className = "",
  id,
}) {
  const s = SIZES[size] || SIZES.md;
  const knob = s.trackH - s.pad * 2;
  const travel = s.trackW - knob - s.pad;

  return (
    <label
      htmlFor={id}
      className={`inline-flex items-center cursor-pointer select-none ${
        disabled ? "opacity-60 cursor-not-allowed" : ""
      } ${className}`}
      style={{ height: s.trackH }}
    >
      <input
        id={id}
        type="checkbox"
        className="sr-only"
        checked={!!checked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
      />

      <span
        aria-hidden
        className="relative rounded-full transition-colors duration-300 ease-out"
        style={{
          width: s.trackW,
          height: s.trackH,
          backgroundColor: checked ? onColor : offColor,
          boxShadow: checked
            ? "inset 0 0 0 0 rgba(0,0,0,0)"
            : "inset 0 0 0 0 rgba(0,0,0,0)",
        }}
      >
        {/* Knob */}
        <span
          className="absolute rounded-full bg-white transition-all duration-300 ease-out will-change-transform"
          style={{
            width: knob,
            height: knob,
            left: s.pad,
            right: s.pad,
            top: s.pad,
            transform: `translateX(${checked ? travel - s.pad : 0}px)`,
            boxShadow: checked
              ? "-6px 0 10px rgba(0,0,0,0.18)"
              : "0 2px 6px rgba(0,0,0,0.18)",
          }}
        />
      </span>
    </label>
  );
}
