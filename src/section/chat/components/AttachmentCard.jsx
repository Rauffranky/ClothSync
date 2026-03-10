import React from "react";
import { Icon } from "./Icon";
import { Download } from "lucide-react";

function cn(...xs) {
    return xs.filter(Boolean).join(" ");
}

export function AttachmentCard({ att }) {
    if (!att) return null;

    const isMedia = att.type === "image" || att.type === "video";

    if (att.type === "image") {
        return (
            <div className="overflow-hidden max-w-sm">
                <img
                    src={att.url}
                    alt={att.name || "attachment"}
                    className="max-h-64 w-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
                    onClick={() => window.open(att.url, "_blank")}
                />
            </div>
        );
    }

    if (att.type === "video") {
        return (
            <div className="overflow-hidden max-w-sm">
                <video
                    src={att.url}
                    controls
                    className="max-h-64 w-full bg-black/5"
                />
            </div>
        );
    }

    if (att.type === "audio") {
        return (
            <div className="min-w-[200px] sm:min-w-[240px]">
                <div className="flex items-center gap-2 mb-1">
                    <Icon name="microphone" className="h-3 w-3 text-emerald-600" />
                    <span className="text-[10px] font-medium text-gray-500 uppercase">Voice Note</span>
                </div>
                <audio
                    src={att.url}
                    controls
                    className="w-full h-8 h-10"
                />
            </div>
        );
    }

    // Documents and other files
    const icons = {
        pdf: { name: "pdf", color: "text-rose-600", bg: "bg-rose-50", label: "PDF Document" },
        word: { name: "word", color: "text-blue-600", bg: "bg-blue-50", label: "Word Document" },
        zip: { name: "zip", color: "text-amber-600", bg: "bg-amber-50", label: "Archived Files" },
        file: { name: "file", color: "text-gray-600", bg: "bg-gray-50", label: "File" },
    };

    const config = icons[att.type] || icons.file;

    return (
        <div className="flex items-center gap-3 max-w-xs sm:max-w-sm">
            <div className={cn("flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg", config.bg, config.color)}>
                <Icon name={config.name} className="h-6 w-6" />
            </div>
            <div className="min-w-0 flex-1">
                <p className="text-sm font-medium truncate">
                    {att.name || "Attachment"}
                </p>
                <p className="text-[11px] opacity-80">{config.label}</p>
            </div>
            {att.url && (
                <a
                    href={att.url}
                    download={att.name}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Download className="h-4 w-4" />
                </a>
            )}
        </div>
    );
}
