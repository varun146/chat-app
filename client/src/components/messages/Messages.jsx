import React, { useEffect, useRef } from "react";

import Message from "./Message";
import useGetMessage from "../../hooks/useGetMessage";
import MessageSkeleton from "../../components/skeletons/MessageSkeleton.jsx";
import useListenMessages from "../../hooks/useListenMessages.js";

const Messages = () => {
  const { messages, loading } = useGetMessage();
  useListenMessages();

  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="flex-1 overflow-auto p-4" style={{ maxHeight: "400px" }}>
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
