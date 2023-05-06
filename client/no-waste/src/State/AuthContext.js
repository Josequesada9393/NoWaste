import { createContext, useEffect, useState } from "react";
import { registerUser } from "../ApiServices/ApiServices";
//auth0 logic, if user does not exist, reject, please register

//if user exists, then set the new userState




export const AuthContext = createContext({
  setCurrentUser: () => null,
  currentUser: null
});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const value = { currentUser, setCurrentUser };

 


  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}