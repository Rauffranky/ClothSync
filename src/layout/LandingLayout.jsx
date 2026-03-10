import React, { useState } from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const LandingLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col app-theme-bg app-theme-text">
            <Header onHamburger={() => setSidebarOpen(true)} />

            {/* <SideBar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            /> */}

            {sidebarOpen && (
                <button
                    aria-label="Close sidebar overlay"
                    className="fixed inset-0 z-9999 bg-black/40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <main className="flex-1">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default LandingLayout;
