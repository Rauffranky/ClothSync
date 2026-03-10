import React, { useState } from "react";
import { Link2, Copy, Play, CheckCircle2, Check } from "lucide-react";
import CardOutline from "../../../../components/UI/card/CardOutline";
import GlobalInput from "../../../../components/UI/Form/Input";
import Toast from "../../../../components/UI/Toast";

const VideoCard = () => {
    const [videoLink, setVideoLink] = useState("https://www.youtube.com/shorts/KuT7v_oBHHc");
    const [isPlaying, setIsPlaying] = useState(false);
    const [showToast, setShowToast] = useState(false);

    // Helper to extract YouTube ID from diversas URLs (including Shorts)
    const getYouTubeId = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|shorts\/|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : "KuT7v_oBHHc";
    };

    const currentVideoId = getYouTubeId(videoLink);

    const handleLinkChange = (newVal) => {
        setVideoLink(newVal);
        setIsPlaying(false);
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(videoLink).then(() => {
            setShowToast(true);
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    };

    return (
        <>
            <CardOutline padding="p-6" border="border-[#DCDCDC]" shadow="shadow-inner-full" className="bg-[#E5E5E533]! h-full">
                <h5 className="font-semibold mb-6 ">Video</h5>

                <div className="space-y-6">
                    <p className="text-[14px] text-[#1E1E1E] leading-relaxed">
                        Share a 30 second clip introducing yourself and explain what and how you teach. (You will get more work by having this video).
                    </p>

                    <ol className="space-y-3 text-[14px] text-[#1E1E1E] list-decimal pl-4">
                        <li>Go to your video post on YouTube, Vimeo, LinkedIn or Facebook</li>
                        <li>Click the "Share" button, and copy the link.</li>
                        <li>Paste the link in the field below.</li>
                    </ol>

                    <div className="space-y-2">
                        <h6 className="text-[14px] text-label font-medium">Link</h6>
                        <GlobalInput
                            placeholder="Paste link here"
                            value={videoLink}
                            onChange={handleLinkChange}
                            rightIcon={<Copy size={18} className="text-[#555555]" />}
                            onRightIconClick={handleCopyLink}
                            className="!bg-[#EDEDED] !border-[#DCDCDC] rounded-[12px]!"
                        />
                    </div>

                    {/* Status */}
                    <div className="flex items-center gap-2 text-[14px]">
                        <div className="flex items-center gap-1.5 text-[#1E1E1E]">
                            <div className="w-5 h-5 bg-red-600 rounded-sm flex items-center justify-center">
                                <Play size={12} fill="white" className="text-white" />
                            </div>
                            <span className="font-medium text-[#555555]">Youtube Video Found</span>
                        </div>
                        <Check size={18} className="text-[#2E7D32]" />
                    </div>

                    {/* Video Preview / Player */}
                    <div className="relative rounded-[16px] overflow-hidden aspect-video shadow-sm border border-[#DCDCDC] bg-black">
                        {!isPlaying ? (
                            <div
                                className="relative w-full h-full group cursor-pointer"
                                onClick={() => setIsPlaying(true)}
                            >
                                <img
                                    src={`https://img.youtube.com/vi/${currentVideoId}/maxresdefault.jpg`}
                                    alt="Video Preview"
                                    className="w-full h-full object-cover grayscale-[0.2]"
                                />
                                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                                        <Play size={24} fill="#1E1E1E" className="text-[#1E1E1E] ml-1" />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                </div>
            </CardOutline>

            {showToast && (
                <Toast
                    message="Link copied to clipboard!"
                    type="success"
                    onClose={() => setShowToast(false)}
                />
            )}
        </>
    );
};

export default VideoCard;
