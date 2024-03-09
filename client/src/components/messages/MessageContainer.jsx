import React, { useEffect } from "react";

import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useConversations from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversations();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, []);

  return (
    <div className="md:min-w-[700px]  flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-neutral-500 px-4 py-2 mb-2">
            <span className="font-bold text-white ">
              {selectedConversation.fullName}
            </span>
          </div>

          <div style={{ marginTop: "auto" }}>
            <Messages />
          </div>

          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome {authUser.fullName}</p>
        <p>Select a chat to start messaging</p>
      </div>
    </div>
  );
};

export default MessageContainer;
