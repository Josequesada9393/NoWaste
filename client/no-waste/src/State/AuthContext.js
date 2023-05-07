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
  const [currentUser, setCurrentUser] = useState({});
  const [auth, setAuth] = useState(false)

  const logout = () => {
    cookies.remove("userToken");
    setCurrentUser(null)
  }

  const authCheck = async () => {
    // if (await currentUser.token && await cookies.get("userToken") === await currentUser.token) {
    //   setAuth(true)
    // } setAuth(false)
    console.log(currentUser.token)
    console.log(cookies.get("userToken"))

  }

  const value = { currentUser, setCurrentUser, logout, authCheck, auth, setAuth };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}