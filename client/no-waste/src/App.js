
import './App.css';
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter} from 'react-router-dom';
import { LoginContext } from './LoginContext/LoginContext';
import { useState } from 'react';
import Profile from './Components/Profile/Profile';

function App() {


const [isLoggedIn, setLoggedIn] = useState(false)
const [user, setUser] = useState({
})

 return (
    <div className="App">
      <BrowserRouter>
      <LoginContext.Provider value={{ user, setUser, setLoggedIn }}>
     <NavBar isLoggedIn={isLoggedIn} />
      {isLoggedIn ? <Profile/> :
      <Login />}
        </LoginContext.Provider>
        </BrowserRouter>
      </div>
  );
}
export default App;
