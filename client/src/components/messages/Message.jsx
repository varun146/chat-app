import React from "react";

import { useAuthContext } from "../../context/AuthContext.jsx";
import useConversations from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime.js";

const Message = ({ message }) => {
  const { authUser } = useAuthContext(); // get logged in user (for senderId)
  const { selectedConversation } = useConversations(); // get selectedConversation (for receiver Id)

  console.log("here is message object: ", message);

  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const formattedTime = extractTime(message.createdAt);
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleColor = fromMe ? "bg-purple-600" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleColor}  pb-2`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
