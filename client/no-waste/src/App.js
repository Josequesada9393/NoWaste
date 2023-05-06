
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter} from 'react-router-dom';
import { LoginContext } from './State/LoginContext';
import { useContext, useState } from 'react';
import Profile from './Components/Profile/Profile';
import { AuthProvider } from './State/AuthContext';
import LoginUpdate from './Components/Login/LoginUpdate';


function App() {


const [isLoggedIn, setLoggedIn] = useState(false)
const [user, setUser] = useState({
})


 return (
    <div className="App">
     <BrowserRouter>
       <AuthProvider>
       <LoginContext.Provider value={{ user, setUser, setLoggedIn }}>
        <NavBar isLoggedIn={isLoggedIn} />
       {isLoggedIn ? <Profile/> :
           (
             <>
        <Login />
        <LoginUpdate/></>
             )}
         </LoginContext.Provider>
         </AuthProvider>
     </BrowserRouter>
  </div>
  );
}
export default App;
