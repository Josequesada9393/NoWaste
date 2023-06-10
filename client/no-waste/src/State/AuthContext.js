import { createContext, useEffect, useState } from "react";
import { registerUser } from "../ApiServices/ApiServices";
import Cookies from "universal-cookie";
const cookies = new Cookies();


//auth0 logic, if user does not exist, reject, please register

//if user exists, then set the new userState

export const AuthContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
  logout: () => null,
  auth: Boolean,
  setAuth: () => null
});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false)

  const logout = () => {
    setIsAuth(false)
    setCurrentUser(null)
  }

  useEffect(() => {
    if (currentUser) {
      cookies.set("userToken", currentUser.token);
      setIsAuth(true)
  
    } else {
      cookies.remove("userToken");
      setIsAuth(false)
    }
  }, [currentUser])


  const value = { currentUser, setCurrentUser, logout, isAuth, setIsAuth};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}