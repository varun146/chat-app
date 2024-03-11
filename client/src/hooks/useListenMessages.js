import { useEffect } from "react";
import { useSocketContext } from "../context/socketio";
import useConversations from "../zustand/useConversation";

const useListenMessages = () => {
  const { socket, onlineUsers } = useSocketContext();
  const { messages, setMessages } = useConversations();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);

      return () => socket.off("newMessage");
    });
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
