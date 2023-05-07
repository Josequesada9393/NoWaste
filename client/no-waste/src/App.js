
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, RedirectFunction, Routes, Route } from 'react-router-dom';
import ShareFood from './Components/DashboardShareFood/DashboardShareFood';
import FindFood from './Components/DashboardFindFood/FindFoodPortal';
import About from './Components/About/About';

import { LoginContext } from './State/LoginContext';
import { useContext, useState } from 'react';
import Profile from './Components/Profile/Profile';
import { AuthContext, AuthProvider } from './State/AuthContext';
import LoginUpdate from './Components/Login/LoginUpdate';
// import PrivateRoute from './Components/RouteUtils/ProtectedRoute';
import ProfileOptions from './Components/Profile/ProfileOptions/ProfileOptions';
import { Navigate } from 'react-router-dom';



function App() {

  const { setCurrentUser, currentUser, isAuth, logout } = useContext(AuthContext);
 return (
    <div className="App">
     <BrowserRouter>
       <NavBar/>
       <Routes>
         <Route path="/login" element={<LoginUpdate />} />
         <Route exact path='/' element={isAuth ? <ProfileOptions /> : <LoginUpdate />} />
          <Route path="/sharefood" element={isAuth ? <ShareFood/> : <LoginUpdate />}/>
          <Route path="/findfood" element={isAuth ? <FindFood /> : <LoginUpdate />} />
          <Route path="/reviews" element={isAuth ? <ReviewsPortal /> : <LoginUpdate />} />
        <Route path="/about" element={<About />} />
         </Routes>
     </BrowserRouter>
  </div>
  );
}
export default App;


      // <PrivateRoute exact path='/dashboard' component={DashboardPage} />
