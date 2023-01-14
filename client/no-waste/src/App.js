
import './App.css';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginContext } from './LoginContext/LoginContext';
import { useState, useEffect } from 'react';
function App() {

  //states
const [isLoggedIn, setLoggedIn] = useState(false)
const [user, setUser] = useState({
})

  return (
    <div className="App">
      <LoginContext.Provider value={{user, setUser, setLoggedIn}}>
      <NavBar isLoggedIn={isLoggedIn}  />
      {isLoggedIn ? <Profile/> :
      <Login />}
      </LoginContext.Provider>

    </div>
  );
}

export default App;
