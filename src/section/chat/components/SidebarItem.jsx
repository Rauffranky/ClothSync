import React from "react";

// Helper for conditional classes (could be moved to a shared utils file if needed)
function cn(...xs) {
    return xs.filter(Boolean).join(" ");
}

export function SidebarItem({
    active,
    avatarUrl,
    name,
    preview,
    unread,
    online,
    onClick,
    timeAgo,
}) {
    return (
        <button
            onClick={onClick}
            style={{
                background: active
                    ? "var(--Linear, linear-gradient(96deg, #2E7D32 0.45%, #66BB6A 75.9%))"
                    : undefined,
            }}
            className={cn(
                "relative w-full text-left px-3 py-2 rounded-xl cursor-pointer transition-colors"
                // active ? "" : ""
            )}
        >
            <div className="flex items-center gap-3">
                <div className="relative">
                    <img
                        src={avatarUrl}
                        alt="avatar"
                        className="h-8 w-8 rounded-full object-cover"
                    />
                    {/* <span
                        className={cn(
                            "absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full ring-2 ring-white",
                            online ? "bg-emerald-500" : "bg-gray-300"
                        )}
                    /> */}
                </div>

                <div className=" min-w-0 ">
                    <div className="flex items-center gap-2 ">
                        <p
                            className={cn(
                                "text-sm font-medium truncate ",
                                active ? "text-white" : "text-gray-900"
                            )}
                        >
                            {name}
                        </p>
                        {/* <span
                            className={cn(
                                "text-[11px]",
                                active ? "text-white/80" : "text-gray-500"
                            )}
                        >
                            {timeAgo}
                        </span> */}
                        {unread > 0 && (
                            <span className="ml-auto absolute right-2 inline-flex items-center justify-center h-5 w-5 text-[11px] rounded-full bg-primary text-white">
                                {unread}
                            </span>
                        )}
                    </div>
                    <p
                        className={cn(
                            "text-xs truncate",
                            active ? "text-white/70" : "text-gray-500"
                        )}
                    >
                        {preview}
                    </p>
                </div>
            </div>
        </button>
    );
}
