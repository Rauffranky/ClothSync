import React, { useState, useEffect, useRef, useMemo } from "react";
import Badges from "../../../components/UI/badges";
import Button from "../../../components/UI/button";
import { Icon } from "./Icon";
import { MessageBubble } from "./MessageBubble";
import { EmojiPicker } from "./EmojiPicker";
import CardOutline from "../../../components/UI/card/CardOutline";

function cn(...xs) {
  return xs.filter(Boolean).join(" ");
}

export function ChatWindow({
  active,
  messages,
  input,
  setInput,
  handleSend,
  fileRef,
  filterType,
}) {
  const [showEmoji, setShowEmoji] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [pendingAttachments, setPendingAttachments] = useState([]);
  const [activePreviewType, setActivePreviewType] = useState(null); // 'image', 'pdf', 'audio', 'video', 'file' or null
  const [isRecording, setIsRecording] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const pickerRef = useRef(null);
  const scrollRef = useRef(null);
  const messagesEndRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerRef = useRef(null);
  const textareaRef = useRef(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [input]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Duration timer for recording
  useEffect(() => {
    if (isRecording) {
      timerRef.current = setInterval(() => {
        setRecordingDuration((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
      setRecordingDuration(0);
    }
    return () => clearInterval(timerRef.current);
  }, [isRecording]);

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });
        const audioUrl = URL.createObjectURL(audioBlob);
        const file = {
          type: "audio",
          name: `VoiceNote-${Date.now()}.webm`,
          url: audioUrl,
          file: audioBlob,
        };
        handleSend(file);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      alert("Microphone access is required for voice messages.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const cancelRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      audioChunksRef.current = [];
      setIsRecording(false);
      mediaRecorderRef.current.onstop = () => {
        mediaRecorderRef.current.stream
          .getTracks()
          .forEach((track) => track.stop());
      };
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setShowEmoji(false);
      }
    }
    if (showEmoji) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showEmoji]);

  const onEmojiSelect = (emoji) => {
    setInput((prev) => prev + emoji);
  };

  const processFiles = (files) => {
    const fileList = Array.from(files);
    const newAttachments = fileList.map((file) => {
      const ext = file.name.toLowerCase().split(".").pop();
      const url = URL.createObjectURL(file);
      let type = "file";
      if (["png", "jpg", "jpeg", "gif", "webp"].includes(ext)) type = "image";
      else if (["mp4", "mov", "webm", "avi"].includes(ext)) type = "video";
      else if (ext === "pdf") type = "pdf";
      return { type, name: file.name, url, file };
    });

    setPendingAttachments((prev) => [...prev, ...newAttachments]);
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      processFiles(e.target.files);
    }
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.types.includes("Files")) {
      setIsDragging(true);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (
      e.currentTarget === e.target ||
      !e.currentTarget.contains(e.relatedTarget)
    ) {
      setIsDragging(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      processFiles(e.dataTransfer.files);
    }
  };

  const removeAttachment = (index) => {
    const removed = pendingAttachments[index];
    const newAttachments = pendingAttachments.filter((_, i) => i !== index);
    setPendingAttachments(newAttachments);

    // If no more of this type, close the preview area
    if (!newAttachments.some((a) => a.type === removed.type)) {
      setActivePreviewType(null);
    }
  };

  const sendWithAttachments = () => {
    handleSend(input, pendingAttachments);
    setPendingAttachments([]);
    setActivePreviewType(null);
  };

  return (
    <CardOutline
      bg="bg-translaundry"
      border="border border-none"
      shadow="shadow-none"
      padding="0"
      className="flex min-w-0 flex-col rounded-2xl  overflow-hidden relative"
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
    >
      {isDragging && (
        <div
          className="absolute inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm animate-in fade-in duration-200"
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className="pointer-events-none flex flex-col items-center gap-4 p-8 rounded-3xl border-2 border-dashed border-emerald-500 bg-emerald-50/50 shadow-xl scale-110 transition-transform text-center">
            <div className="h-16 w-16 flex items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-200">
              <Icon name="plus" className="h-10 w-10" />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">
                Drop files to upload
              </p>
              <p className="text-sm text-gray-500">
                Images and PDF documents are supported
              </p>
            </div>
          </div>
        </div>
      )}


      <div
        className="overflow-y-auto pl-2 pr-4 h-full scroll-smooth hide-scrollbar"
        ref={scrollRef}
      >
        {(() => {
          const grouped = [];
          let lastDate = null;
          const formatDateHeader = (ts) => {
            const date = new Date(ts);
            const today = new Date();
            const yesterday = new Date();
            yesterday.setDate(today.getDate() - 1);
            if (date.toDateString() === today.toDateString()) return "Today";
            if (date.toDateString() === yesterday.toDateString())
              return "Yesterday";
            return date.toLocaleDateString("en-GB");
          };

          messages.forEach((m) => {
            const dateStr = formatDateHeader(m.timestamp);
            if (dateStr !== lastDate) {
              grouped.push({ type: "date", label: dateStr });
              lastDate = dateStr;
            }
            grouped.push({ type: "message", data: m });
          });

          return grouped.map((item, idx) => {
            if (item.type === "date") {
              return (
                <div key={`date-${idx}`} className="flex justify-center my-6">
                  <div className="bg-white text-label px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              );
            }
            return <MessageBubble key={item.data.id} msg={item.data} />;
          });
        })()}
        <div ref={messagesEndRef} />
      </div>

      <div className="mt-4">
        <div className="max-w-6xl mx-auto space-y-4">
          {/* Preview Area (Above counts) */}
          {activePreviewType && (
            <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-inner grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 animate-in slide-in-from-bottom-2 duration-200">
              {pendingAttachments
                .map((file, originalIdx) => ({ file, originalIdx }))
                .filter((item) => item.file.type === activePreviewType)
                .map(({ file, originalIdx }) => (
                  <div
                    key={originalIdx}
                    className="relative group aspect-square rounded-xl overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center shadow-sm"
                  >
                    {file.type === "image" ? (
                      <img
                        src={file.url}
                        alt={file.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-1 overflow-hidden px-1">
                        <Icon
                          name={file.type === "pdf" ? "pdf" : "file"}
                          className="h-6 w-6 text-emerald-600"
                        />
                        <span className="text-[8px] text-center truncate w-full font-medium">
                          {file.name}
                        </span>
                      </div>
                    )}
                    <button
                      onClick={() => removeAttachment(originalIdx)}
                      className="absolute top-1 right-1 h-5 w-5 flex items-center justify-center bg-rose-500 text-white rounded-full shadow-md z-10 transition-transform hover:scale-110"
                    >
                      <Icon name="close" className="h-2.5 w-2.5" />
                    </button>
                  </div>
                ))}
            </div>
          )}

          {/* File Counts Bar */}
          {pendingAttachments.length > 0 && (
            <div className="flex flex-wrap gap-2 px-1">
              {Object.entries(
                pendingAttachments.reduce((acc, curr) => {
                  acc[curr.type] = (acc[curr.type] || 0) + 1;
                  return acc;
                }, {})
              ).map(([type, count]) => (
                <button
                  key={type}
                  onClick={() =>
                    setActivePreviewType(
                      activePreviewType === type ? null : type
                    )
                  }
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all border shadow-sm",
                    activePreviewType === type
                      ? "bg-emerald-500 text-white border-emerald-500"
                      : "bg-white text-gray-600 border-gray-200 hover:border-emerald-300"
                  )}
                >
                  <Icon
                    name={
                      type === "image"
                        ? "plus"
                        : type === "pdf"
                          ? "pdf"
                          : "file"
                    }
                    className={cn(
                      "h-3.5 w-3.5",
                      activePreviewType === type
                        ? "text-white"
                        : "text-emerald-500"
                    )}
                  />
                  {count} {type}
                  {count > 1 ? "s" : ""}
                </button>
              ))}
              <button
                onClick={() => {
                  setPendingAttachments([]);
                  setActivePreviewType(null);
                }}
                className="ml-auto text-xs text-rose-500 font-bold hover:underline"
              >
                Clear All
              </button>
            </div>
          )}
          <div className="flex items-center gap-2 sm:gap-4">
            {!isRecording ? (
              <>
                <button
                  onClick={() => fileRef.current?.click()}
                  className="flex-shrink-0 cursor-pointer flex h-9 w-9 items-center justify-center rounded-xl bg-white text-gray-400 border border-gray-200 shadow-sm hover:bg-gray-50 transition-all active:scale-95"
                >
                  <Icon name="plus" className="h-5 w-5" />
                </button>

                <div className="flex-1 flex items-center min-w-0 bg-white rounded-xl border border-gray-200 shadow-sm px-3 py-2 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500 transition-all">
                  <textarea
                    ref={textareaRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Write your messages..."
                    rows={1}
                    className="flex-1 border-0 p-0 text-sm sm:text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-0 resize-none bg-translaundry max-h-32 overflow-y-auto"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        sendWithAttachments();
                      }
                    }}
                  />
                  <div className="flex items-center gap-3 ml-2 border-l border-gray-100 pl-3">
                    <div className="relative" ref={pickerRef}>
                      <button
                        onClick={() => setShowEmoji(!showEmoji)}
                        className={cn(
                          "hover:text-emerald-500 transition-colors text-gray-400",
                          showEmoji && "text-emerald-500"
                        )}
                      >
                        <Icon name="emoji" className="h-5 w-5" />
                      </button>
                      {showEmoji && (
                        <EmojiPicker
                          onSelect={onEmojiSelect}
                          onClose={() => setShowEmoji(false)}
                        />
                      )}
                    </div>
                    <button
                      onClick={startRecording}
                      className="hover:text-emerald-500 transition-colors text-gray-400"
                    >
                      <Icon name="microphone" className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-between gap-4 bg-emerald-50 px-4 py-2.5 rounded-xl border border-emerald-200 animate-in slide-in-from-bottom-2">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
                  <span className="text-sm font-medium text-emerald-800">
                    Recording: {formatDuration(recordingDuration)}
                  </span>
                </div>
                <button
                  onClick={cancelRecording}
                  className="text-xs font-bold text-rose-500 hover:text-rose-600 uppercase tracking-widest"
                >
                  Cancel
                </button>
              </div>
            )}

            <input
              ref={fileRef}
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,image/*,video/*,.doc,.docx,.zip,.rar"
              multiple
            />

            <Button
              onClick={isRecording ? stopRecording : sendWithAttachments}
              disabled={
                !isRecording && !input && pendingAttachments.length === 0
              }
              variant={
                !isRecording && !input && pendingAttachments.length === 0
                  ? "disabled"
                  : "primary"
              }
              className="flex-shrink-0 !h-9 !w-9 !p-0 !gap-0"
              label=""
              leftIcon={<Icon name="send" className="h-5 w-5" />}
            />
          </div>
        </div>
      </div>
    </CardOutline>
  );
}
