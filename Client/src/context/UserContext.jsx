import { createContext, useState } from "react";

export const userContextData = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});

  const value = {
    user,
    setUser,
  };

  return (
    <userContextData.Provider value={value}>
      {children}
    </userContextData.Provider>
  );
};

export default UserContext;
