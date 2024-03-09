import { createContext, useState, useContext } from "react";

// context
export const AuthContext = createContext();

// creating userAuthContext hook
export const useAuthContext = () => {
  return useContext(AuthContext);
};

// context provider
export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null,
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
