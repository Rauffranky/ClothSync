import React from "react";
import Picker from "emoji-picker-react";

export function EmojiPicker({ onSelect, onClose }) {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/10 backdrop-blur-[2px]">
            <div
                className="fixed inset-0"
                onClick={onClose}
            />
            <div className="relative shadow-2xl rounded-2xl overflow-hidden border border-gray-100 bg-white animate-in fade-in zoom-in-95 duration-200">
                <Picker
                    onEmojiClick={(emojiData) => {
                        onSelect(emojiData.emoji);
                    }}
                    autoFocusSearch={false}
                    theme="light"
                    searchPlaceholder="Search emoji..."
                    width={window.innerWidth < 640 ? 300 : 350}
                    height={450}
                    previewConfig={{ showPreview: false }}
                    skinTonesDisabled
                    lazyLoadEmojis
                />
            </div>
        </div>
    );
}
