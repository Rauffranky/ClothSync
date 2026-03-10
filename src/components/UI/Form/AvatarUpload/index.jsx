import React, { useState, useRef, useEffect } from "react";
import { Camera } from "lucide-react";

/**
 * AvatarUpload - Reusable global avatar upload component with preview
 * 
 * Props:
 * - value: string (URL or base64 of the initial image)
 * - onChange: function (callback when a new file is selected, returns { file, preview })
 * - className: string (extra container classes)
 * - size: string (Tailwind size classes for width/height, default: w-[120px] h-[120px])
 */
const AvatarUpload = ({
    value,
    onChange,
    className = "",
    size = "w-[120px] h-[120px]"
}) => {
    const [preview, setPreview] = useState(value);
    const fileInputRef = useRef(null);

    // Sync preview with value prop if it changes externally
    useEffect(() => {
        setPreview(value);
    }, [value]);

    const handleContainerClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const previewUrl = reader.result;
                setPreview(previewUrl);
                if (onChange) {
                    onChange({ file, preview: previewUrl });
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={`relative ${className}`}>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
            />

            {/* Avatar Image Container */}
            <div
                onClick={handleContainerClick}
                className={`rounded-full overflow-hidden border-2 border-white shadow-sm bg-gray-100 ${size} cursor-pointer`}
            >
                {preview ? (
                    <img
                        src={preview}
                        alt="Avatar Preview"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <Camera size={32} opacity={0.5} />
                    </div>
                )}
            </div>

            {/* Camera Icon Overlay */}
            <button
                type="button"
                onClick={handleContainerClick}
                className="absolute bottom-2 right-1 bg-[#2E7D32] p-1.5 rounded-full text-white hover:bg-[#256629] transition-colors shadow-sm cursor-pointer z-10"
                aria-label="Upload Avatar"
            >
                <Camera size={16} />
            </button>
        </div>
    );
};

export default AvatarUpload;
