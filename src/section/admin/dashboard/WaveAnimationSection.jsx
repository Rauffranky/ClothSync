import React from "react";
import CardOutline from "../../../components/UI/card/CardOutline";
import WaveAnimation from "../../../components/UI/animations/WaveAnimation";

const WaveAnimationSection = () => {
    return (
        <div className="grid grid-cols-1 gap-4 mb-6">
            {/* First Wave */}
            <CardOutline border="border-none" shadow="shadow-lg" className="overflow-hidden relative">
                <div className="p-4">
                    <h5 className="mb-2">Wave Animation 1</h5>
                    <p className="text-sm text-gray-500 mb-4">Heartbeat pulse effect - Green</p>
                </div>
                <WaveAnimation color="#2E7D32" height={80} speed={3} />
            </CardOutline>

            {/* Second Wave */}
            <CardOutline border="border-none" shadow="shadow-lg" className="overflow-hidden relative">
                <div className="p-4">
                    <h5 className="mb-2">Wave Animation 2</h5>
                    <p className="text-sm text-gray-500 mb-4">Heartbeat pulse effect - Purple</p>
                </div>
                <WaveAnimation color="#673AB7" height={80} speed={2.5} />
            </CardOutline>
        </div>
    );
};

export default WaveAnimationSection;
