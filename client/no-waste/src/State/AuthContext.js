import { createContext, useState } from "react";

//auth0 logic, if user does not exist, reject, please register

//if user exists, then set the new userState 




export const AuthContext = createContext({
  setCurrentUser: () => null,
  currentUser: null
});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };





  return <AuthContext.Provider value={value}> {children}</AuthContext.Provider>
}