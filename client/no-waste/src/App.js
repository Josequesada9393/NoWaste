
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter} from 'react-router-dom';
import { LoginContext } from './State/LoginContext';
import { useContext, useState } from 'react';
import Profile from './Components/Profile/Profile';
import { AuthContext } from './State/AuthContext';

function App() {


const [isLoggedIn, setLoggedIn] = useState(false)
const [user, setUser] = useState({
})

  const currentUser = useContext(AuthContext)
  
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
