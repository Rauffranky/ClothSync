import React from "react";

const SocialIcons = () => {
    return (
        <>
            <div className="cursor-pointer hover:scale-110 transition-transform">
                <img src="/student/logos_facebook.svg" alt="Facebook" />
            </div>
            <div className="cursor-pointer hover:scale-110 transition-transform">
                <img src="/student/insta-logo.svg" alt="Instagram" />
            </div>
            <div className="cursor-pointer hover:scale-110 transition-transform">
                <img src="/student/linkedin-logo.svg" alt="LinkedIn" />
            </div>
            <div className="cursor-pointer hover:scale-110 transition-transform">
                <img src="/student/x-logo.svg" alt="X" />
            </div>
        </>
    );
};

export default SocialIcons;
