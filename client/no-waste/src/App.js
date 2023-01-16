
import './App.css';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import NavBar from './Components/NavBar/NavBar';
import { Router } from 'react-router-dom';
import { LoginContext } from './LoginContext/LoginContext';
import { useState} from 'react';
function App() {

const [isLoggedIn, setLoggedIn] = useState(false)
const [user, setUser] = useState({
})

  return (
    <div className="App">
      <LoginContext.Provider value={{ user, setUser, setLoggedIn }}>
     <NavBar isLoggedIn={isLoggedIn} />
      {isLoggedIn ? <Profile/> :
      <Login />}
      </LoginContext.Provider>
      </div>
  );
}
export default App;
