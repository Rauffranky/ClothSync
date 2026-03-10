import React from "react";
import AdminDashboard from "../../section/admin/dashboard";
import Chat from "../../section/chat";

const AdminChatPage = () => {
    return (
        <div className="mt-5">
            <h4 className="font-bold">Inbox</h4>
            <Chat />
        </div>
    );
};

export default AdminChatPage;
