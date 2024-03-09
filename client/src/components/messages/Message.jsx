import React from "react";

import { useAuthContext } from "../../context/AuthContext.jsx";
import useConversations from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime.js";

const Message = ({ message }) => {
  const { authUser } = useAuthContext(); // get logged in user (for senderId)
  const { selectedConversation } = useConversations(); // get selectedConversation (for receiver Id)

  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const formattedTime = extractTime(message.createdAt);
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleColor = fromMe ? "bg-purple-600" : "";
  return (
    <div className={`chat ${chatClassName} mt-2`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div
        className={`chat-bubble  ${bubbleColor} text-white text-sm font-bold`}
      >
        {message.message}
      </div>
      <div className="chat-header">
        <time className="text-xs text-white">{formattedTime}</time>
      </div>
    </div>
  );
};

export default Message;
