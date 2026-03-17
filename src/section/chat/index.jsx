import React, { useMemo, useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ChatSidebar } from "./components/ChatSidebar";
import { ChatWindow } from "./components/ChatWindow";
import { Icon } from "./components/Icon";

const sampleThreads = [
  {
    id: "t1",
    tenant: "Amelia kerr",
    preview: "Can we discuss the invoice...",
    avatarUrl:
      "https://tse4.mm.bing.net/th/id/OIP._mxdULHBhsD0qeex5Py1DAAAAA?pid=Api&h=220&P=0",
    unread: 5,
    online: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
    ticket: {
      title: "Broken window",
      location: "Ocean View Condos, Unit 12",
      submitted: "Oct 7, 2023",
      priority: "High",
    },
    messages: [
      {
        id: "m1",
        author: "Josh Buttler",
        role: "vendor",
        text: "Services Completed",
        timestamp: Date.now() - 1000 * 60 * 60 * 48, // 2 days ago
      },
      {
        id: "m2",
        author: "Admin name",
        role: "admin",
        text: "Thanks",
        timestamp: Date.now() - 1000 * 60 * 60 * 24, // Yesterday
      },
      {
        id: "m_lesson",
        author: "Tuition Farm",
        role: "system",
        type: "lesson",
        lessonDetails: {
          date: "29/09/2025",
          time: "04:00 PM",
          recurring: "weekly for 8 weeks until 17/11/2025",
          student: "Brett Dowsett",
          level: "GCSE",
          subject: "Physics",
        },
        timestamp: Date.now() - 1000 * 60 * 30, // 30 mins ago
      },
      {
        id: "m3",
        author: "Vendor name",
        role: "vendor",
        attachment: { type: "pdf", name: "Invoice.pdf", url: "#" },
        timestamp: Date.now() - 1000 * 60 * 10,
      },
      {
        id: "m4",
        author: "Vendor name",
        role: "vendor",
        text: "How are you today?",
        timestamp: Date.now(),
      },
    ],
  },
  ...Array.from({ length: 4 }).map((_, i) => ({
    id: `t${i + 2}`,
    tenant: "Vendor name",
    preview: "Can we discuss the invoice",
    avatarUrl: `https://i.pravatar.cc/48?img=${10 + i}`,
    unread: 0,
    online: i % 2 === 0,
    createdAt: Date.now() - 1000 * 60 * (i + 3),
    ticket: {
      title: "Broken window",
      location: "Ocean View Condos, Unit 12",
      submitted: "Oct 7, 2023",
      priority: "High",
    },
    messages: [
      {
        id: `x${i}1`,
        author: "Vendor name",
        role: "vendor",
        text: "Hello, any update?",
        timestamp: Date.now() - 1000 * 60 * 5,
      },
    ],
  })),
];

export default function Chat({ filterType = null }) {
  const [threads, setThreads] = useState(sampleThreads);
  const [activeId, setActiveId] = useState(sampleThreads[0].id);
  const [input, setInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const fileRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/laundries/support-chat")) {
      const rescheduleMessage = {
        id: "reschedule-msg-1",
        author: "System",
        role: "system",
        type: "reschedule",
        rescheduleDetails: {
          tenant: "Mrs.James",
          subject: "GCSE Maths",
          dates: [
            "Wednesday 30 September 2024",
            "Thursday 01 October 2024",
            "Wednesday 07 October 2024",
          ],
          cost: "70.00",
        },
        timestamp: Date.now(),
      };

      setThreads((prevThreads) => {
        const updatedThreads = [...prevThreads];
        const firstThread = { ...updatedThreads[0] };

        // Replace messages entirely to show only the reschedule message
        firstThread.messages = [rescheduleMessage];
        updatedThreads[0] = firstThread;

        return updatedThreads;
      });
    }
  }, [location.pathname]);

  // Filter threads and messages based on isolation rules
  const displayThreads = useMemo(() => {
    return threads
      .map((t) => {
        // Filter messages within the thread based on filterType
        const filteredMessages = t.messages.filter((m) => {
          if (filterType === "lesson") return m.type === "lesson";
          return m.type !== "lesson"; // Hide lessons from All Messages
        });

        return {
          ...t,
          messages: filteredMessages,
          preview:
            filteredMessages.length > 0
              ? filteredMessages[filteredMessages.length - 1].text ||
              "Attachment"
              : "No messages",
          unread: filterType === "lesson" ? 0 : t.unread, // Optional: reset unread for lesson view
        };
      })
      .filter((t) => t.messages.length > 0);
  }, [threads, filterType]);

  const active = useMemo(
    () => displayThreads.find((t) => t.id === activeId) || displayThreads[0],
    [displayThreads, activeId]
  );

  function formatTimeAgo(ts) {
    const diff = Date.now() - ts;
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `${mins}m`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h`;
    const days = Math.floor(hours / 24);
    return `${days}d`;
  }

  function handleSend(textValue = null, attachments = []) {
    // Determine if we're sending a direct attachment (from Voice Note) or multiple via the new flow
    const isDirectAttachment =
      textValue && textValue.type && !textValue.nativeEvent;

    let finalAttachments = attachments;
    let finalText = textValue;

    if (isDirectAttachment) {
      finalAttachments = [textValue];
      finalText = "";
    } else {
      finalText = textValue === null ? input : textValue;
    }

    if (!finalText && (!finalAttachments || finalAttachments.length === 0))
      return;

    const newMsg = {
      id: `m-${Date.now()}`,
      author: "Admin",
      role: "admin",
      text: finalText,
      timestamp: Date.now(),
      attachments: finalAttachments,
    };

    setThreads((prev) =>
      prev.map((t) =>
        t.id === activeId
          ? {
            ...t,
            messages: [...t.messages, newMsg],
            preview:
              newMsg.text ||
              (newMsg.attachments.length > 0 ? "Attachment" : "File"),
          }
          : t
      )
    );

    setInput("");
    if (fileRef.current) fileRef.current.value = "";
  }

  return (
    <div className="w-full bg-table p-2 h-[calc(100dvh-330px)] md:h-[calc(100vh-145px)] rounded-[20px]">
      <div className=" flex items-center justify-between md:hidden bg-white/80 backdrop-blur-md p-3 rounded-2xl border border-gray-100 shadow-sm sticky top-0 z-20">
        <button
          onClick={() => setSidebarOpen((s) => !s)}
          className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-1.5 shadow-sm active:scale-95 transition-all"
        >
          <Icon name="menu" className="h-5 w-5 text-gray-700" />
          <span className="text-sm font-medium">Chats</span>
        </button>
        <div className="text-right min-w-0">
          <p className="text-sm font-bold text-gray-900 truncate">
            {active.tenant}
          </p>
          <p className="text-[10px] text-gray-500 truncate leading-tight">
            {active.online ? "Online" : "Away"}
          </p>
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4 h-full">
        <ChatSidebar
          threads={displayThreads}
          activeId={activeId}
          setActiveId={setActiveId}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          formatTimeAgo={formatTimeAgo}
        />

        <ChatWindow
          active={active}
          messages={active?.messages || []}
          input={input}
          setInput={setInput}
          handleSend={handleSend}
          fileRef={fileRef}
          filterType={filterType}
        />
      </div>
    </div>
  );
}
