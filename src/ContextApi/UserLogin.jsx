import { createContext, useState } from "react";

export const UserLoginContext = createContext();

const UserLoginContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
 

  return (
    <UserLoginContext.Provider value={{ setUser, user }}>
      {children}
    </UserLoginContext.Provider>
  );
};

export default UserLoginContextProvider;
