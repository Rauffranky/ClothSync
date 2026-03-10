import React from "react";
import "./WaveAnimation.css";

const WaveAnimation = ({ color = "#2E7D32", height = 80, speed = 3 }) => {
    // EKG heartbeat path - starting immediately from left edge
    const ekgPath1 = "M0,50 L5,30 L10,70 L15,50 L30,50 L35,45 L40,55 L45,50 L60,50 L65,20 L70,80 L75,50 L90,50 L95,40 L100,60 L105,50 L120,50 L125,35 L130,65 L135,50 L150,50 L155,45 L160,55 L165,50 L180,50 L185,25 L190,75 L195,50 L210,50 L215,40 L220,60 L225,50 L240,50 L245,30 L250,70 L255,50 L270,50 L275,45 L280,55 L285,50 L300,50 L305,35 L310,65 L315,50 L320,50";

    const ekgPath2 = "M0,50 L5,35 L10,65 L15,50 L30,50 L35,40 L40,60 L45,50 L60,50 L65,25 L70,75 L75,50 L90,50 L95,45 L100,55 L105,50 L120,50 L125,30 L130,70 L135,50 L150,50 L155,42 L160,58 L165,50 L180,50 L185,28 L190,72 L195,50 L210,50 L215,38 L220,62 L225,50 L240,50 L245,35 L250,65 L255,50 L270,50 L275,43 L280,57 L285,50 L300,50 L305,32 L310,68 L315,50 L320,50";

    return (
        <div className="wave-container" style={{ height: `${height}px` }}>
            {/* First EKG Line */}
            <svg
                className="ekg-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 100"
                preserveAspectRatio="none"
                style={{
                    animationDuration: `${speed}s`,
                }}
            >
                <path
                    className="ekg-path"
                    d={ekgPath1}
                    stroke={color}
                    strokeWidth="2"
                    fill="none"
                    opacity="0.8"
                />
            </svg>

            {/* Second EKG Line (offset) */}
            <svg
                className="ekg-svg ekg-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 100"
                preserveAspectRatio="none"
                style={{
                    animationDuration: `${speed * 1.2}s`,
                }}
            >
                <path
                    className="ekg-path"
                    d={ekgPath2}
                    stroke={color}
                    strokeWidth="2"
                    fill="none"
                    opacity="0.5"
                />
            </svg>
        </div>
    );
};

export default WaveAnimation;
