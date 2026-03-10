import React from 'react';

const Avatar = ({ src, alt, size = 40 }) => {
    return (
        <div
            className="rounded-full overflow-hidden border-2 border-white/20"
            style={{ width: size, height: size }}
        >
            <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
    );
};

export default Avatar;
