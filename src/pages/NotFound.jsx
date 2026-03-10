import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/button";
import { Home, AlertCircle } from "lucide-react";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-50 p-4 font-sans">
            <div className="text-center max-w-md">
                <div className="flex justify-center mb-6">
                    <div className="h-24 w-24 bg-green-50 rounded-full flex items-center justify-center">
                        <AlertCircle size={48} className="text-[#2E7D32]" />
                    </div>
                </div>

                <h1 className="text-6xl font-extrabold text-[#2E7D32] mb-2 tracking-tight">404</h1>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Page Not Found</h2>
                <p className="text-gray-600 mb-8 text-lg">
                    Oops! The page you are looking for does not exist or has been moved.
                </p>

                <div className="flex justify-center">
                    <Button
                        label="Go Back Home"
                        onClick={() => navigate("/")}
                        leftIcon={<Home size={18} />}
                        className="!rounded-xl px-8 py-3 shadow-lg shadow-green-900/10"
                    />
                </div>
            </div>

            <div className="mt-12 text-sm text-gray-400">
                TuitionFarm
            </div>
        </div>
    );
};

export default NotFound;
