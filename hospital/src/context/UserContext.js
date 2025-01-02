import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username1, setUsername1] = useState("");

  return (
    <UserContext.Provider value={{ username1, setUsername1 }}>
      {children}
    </UserContext.Provider>
  );
};
