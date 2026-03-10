import React from "react";
import { Calendar, Message, Notification, Setting, Support } from "../UI/icon";
import StatusBubble from "../UI/StatusBubble";

const HeaderIcon = () => {
  return (
    <>
      <StatusBubble
        src={Setting}
        alt="Settings"
        size="sm"
        iconSize="md"
        bg="bg-[#FE94964D] "
        showDot={false}
      />
      <StatusBubble
        src={Support}
        alt="Settings"
        size="sm"
        iconSize="xs"
        bg="bg-[#A05AFF4D] "
        dotColor="bg-[#A05AFF]"
      />
      <StatusBubble
        src={Notification}
        alt="Settings"
        size="sm"
        iconSize="md"
        bg="bg-[#1BCFB44D] "
        dotColor="bg-[#1BCFB4]"
      />
      <StatusBubble
        src={Message}
        alt="Settings"
        size="sm"
        iconSize="xs"
        bg="bg-[#2D9CDB4D] "
        dotColor="bg-[#2D9CDB]"
      />
      <StatusBubble
        src={Calendar}
        alt="Settings"
        size="sm"
        iconSize="xs"
        bg="bg-[#5E6C934D] "
        dotColor="bg-[#5E6C93]"
      />
    </>
  );
};

export default HeaderIcon;
