import React from 'react';

const NotificationDrawer = ({ open, onClose, positionClass }) => {
    if (!open) return null;
    return (
        <div className={`fixed z-[10001] bg-white text-black p-4 rounded-lg shadow-2xl ${positionClass}`}>
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">Notifications</h3>
                <button onClick={onClose} className="text-gray-500">×</button>
            </div>
            <div className="space-y-2">
                <p className="text-sm">No new notifications</p>
            </div>
        </div>
    );
};

export default NotificationDrawer;
