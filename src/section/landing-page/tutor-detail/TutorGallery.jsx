import React, { useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const TutorGallery = () => {
    const media = [
        { type: "video", url: "https://www.youtube.com/embed/yOqL80J9RnQ", thumb: "https://img.youtube.com/vi/yOqL80J9RnQ/0.jpg" },
        { type: "video", url: "https://www.youtube.com/embed/ziABaAUq5Ck", thumb: "https://img.youtube.com/vi/ziABaAUq5Ck/0.jpg" },
        { type: "video", url: "https://www.youtube.com/embed/5C8yvJUVB-0", thumb: "https://img.youtube.com/vi/5C8yvJUVB-0/0.jpg" },
        { type: "image", url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop" },
        { type: "image", url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=500&fit=crop" },
        { type: "image", url: "https://images.unsplash.com/photo-1524178232353-1bb296be6b0d?w=800&h=500&fit=crop" }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => setActiveIndex((prev) => (prev + 1) % media.length);
    const handlePrev = () => setActiveIndex((prev) => (prev - 1 + media.length) % media.length);

    const activeMedia = media[activeIndex];

    return (
        <div className="space-y-6">
            {/* Main View */}
            <div className="relative aspect-video bg-gray-100 rounded-[24px] overflow-hidden group shadow-inner">
                {activeMedia.type === "video" ? (
                    <iframe
                        src={activeMedia.url}
                        title="Tutor Video"
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <img
                        src={activeMedia.url}
                        alt="Tutor Gallery"
                        className="w-full h-full object-cover transition-opacity duration-500"
                    />
                )}
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex items-center justify-between gap-4">
                <button
                    onClick={handlePrev}
                    className="w-12 h-12 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white transition-all shrink-0 shadow-sm"
                >
                    <ChevronLeft size={24} strokeWidth={2.5} />
                </button>

                <div className="flex items-center gap-2 overflow-hidden flex-1 justify-center">
                    {media.map((item, i) => (
                        <div
                            key={i}
                            className={`w-14 h-16 rounded-xl border-2 overflow-hidden cursor-pointer transition-all shrink-0 relative ${activeIndex === i ? "border-[#2E7D32] scale-105 z-10" : "border-transparent opacity-60 hover:opacity-100"
                                }`}
                            onClick={() => setActiveIndex(i)}
                        >
                            <img src={item.type === "video" ? item.thumb : item.url} alt="" className="w-full h-full object-cover" />
                            {item.type === "video" && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                                    <Play size={14} className="text-white fill-white" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className="w-12 h-12 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white transition-all shrink-0 shadow-sm"
                >
                    <ChevronRight size={24} strokeWidth={2.5} />
                </button>
            </div>
        </div>
    );
};

export default TutorGallery;
