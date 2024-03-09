import { createContext, useEffect, useState } from "react";

export const socketContext = createContext();

export const socketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {});
  return <socketContext.Provider value={{}}>{children}</socketContext.Provider>;
};
