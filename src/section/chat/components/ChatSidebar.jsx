import React from "react";
import { Icon } from "./Icon";
import { SidebarItem } from "./SidebarItem";
import GlobalInput from "../../../components/UI/Form/Input";
import { Search } from "lucide-react";

function cn(...xs) {
    return xs.filter(Boolean).join(" ");
}

export function ChatSidebar({
    threads,
    activeId,
    setActiveId,
    sidebarOpen,
    setSidebarOpen,
    formatTimeAgo,
}) {
    return (
        <aside
            className={cn(
                "rounded-2xl bg-white p-3 shadow-xl md:block",
                sidebarOpen ? "block" : "hidden",
                "md:!block"
            )}
        >
            {/* <div className="mb-3 flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2">
                <Icon name="search" className="h-4 w-4 text-gray-500" />
                <input
                    placeholder="Search tenants"
                    className="w-full border-0 p-0 text-sm placeholder:text-gray-400 focus:ring-0"
                />
            </div> */}
            {/* <div className="text-sm font-medium text-gray-800 mb-2">Chats</div> */}
            <GlobalInput
                placeholder="Search..."
                leftIcon={<Search size={18} />}
                className="bg-table! h-10! mb-2 rounded-full!"
            />
            <div className="space-y-1 overflow-y-auto pr-1">
                {threads.map((t) => (
                    <SidebarItem
                        key={t.id}
                        active={t.id === activeId}
                        avatarUrl={t.avatarUrl}
                        name={t.tenant}
                        preview={t.preview}
                        unread={t.unread}
                        // online={t.online}
                        timeAgo={formatTimeAgo(t.createdAt)}
                        onClick={() => {
                            setActiveId(t.id);
                            setSidebarOpen(false);
                        }}
                    />
                ))}
            </div>
        </aside>
    );
}
