import React, { useEffect, useState } from "react";
import Logo from "./Logo";

const SplashScreen = ({ onFinish }) => {
    const text = "ClothSync";
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, 100); // Typing speed
            return () => clearTimeout(timeout);
        } else {
            // After typing finishes, wait 2 seconds then call onFinish
            const timeout = setTimeout(() => {
                onFinish();
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, onFinish]);

    return (
        <div className="fixed inset-0 bg-white z-9999 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center animate-fadeIn">
                {/* <img
                    src={logo}
                    alt="Tuition Farm Logo"
                    className="w-32 h-32 mb-6 animate-bounce-subtle"
                /> */}
                <Logo />
                <h1 className="text-3xl font-bold text-primary tracking-wide min-h-10">
                    {displayedText}
                    <span className="animate-pulse">|</span>
                </h1>
            </div>
        </div>
    );
};

export default SplashScreen;
