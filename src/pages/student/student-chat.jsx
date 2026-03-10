import React from "react";
import Chat from "../../section/chat";
import SocialIcons from "../../components/UI/SocialIcons";


const StudentChatPage = () => {
    return (
        <div className="">
            <div className="flex items-center justify-between">

                <h4 className="font-bold my-4">Inbox</h4>
                <div className="flex gap-2 items-center">
                    <h6>Share your profile:</h6>
                    <SocialIcons />
                </div>
            </div>
            <Chat />
        </div>
    );
};

export default StudentChatPage;