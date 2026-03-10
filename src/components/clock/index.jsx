import React, { useEffect, useMemo, useState } from "react";
import { Clock } from "lucide-react";

function formatTime(date, opts = {}) {
  try {
    return new Intl.DateTimeFormat(undefined, {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      ...(opts.timeZone ? { timeZone: opts.timeZone } : {}),
    }).format(date);
  } catch {
    return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  }
}

export default function LiveClockPill({
  timeZone,
  bg = "white",
  className = "",
}) {
  const systemTZ = useMemo(() => {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch {
      return undefined;
    }
  }, []);

  const tz = timeZone || systemTZ;

  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const timeLabel = formatTime(now, { timeZone: tz });

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-[15px] px-[10px] py-[5px]   bg-white  ${className}`}
      style={{ background: bg }}
      role="group"
      aria-label={`Current time ${timeLabel}${tz ? ` in ${tz}` : ""}`}
    >
      {/* Static Clock icon */}
      <div className="flex items-center justify-center ">
        <Clock className="w-6 h-6 text-primary" />
      </div>

      {/* Time text */}
      <div className="select-none">
        <p className="text-lg font-semibold tabular-nums text-primary uppercase">
          {timeLabel}
        </p>
      </div>
    </div>
  );
}
