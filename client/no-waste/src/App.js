
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShareFood from './Components/DashboardShareFood/DashboardShareFood';
import FindFood from './Components/DashboardFindFood/FindFoodPortal';
import About from './Components/About/About';
import ReviewsPortal from './Components/DashboardReviews/ReviewsPortal';
import { LoginContext } from './State/LoginContext';
import { useContext, useState } from 'react';
import Profile from './Components/Profile/Profile';
import { AuthContext, AuthProvider } from './State/AuthContext';
import LoginUpdate from './Components/Login/LoginUpdate';
// import PrivateRoute from './Components/RouteUtils/ProtectedRoute';
import ProfileOptions from './Components/Profile/ProfileOptions/ProfileOptions';
import { Navigate } from 'react-router-dom';
import Register from './Components/Register/Register';


function App() {

  const { setCurrentUser, currentUser, isAuth, logout } = useContext(AuthContext);
 return (
    <div className="App">
     <BrowserRouter>
       <NavBar/>
       <Routes>
        <Route exact path='/' element={isAuth ? <ProfileOptions /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sharefood" element={isAuth ? <ShareFood/> : <Login />}/>
        <Route path="/findfood" element={isAuth ? <FindFood /> : <Login />} />
        <Route path="/reviews" element={isAuth ? <ReviewsPortal /> : <Login />} />
        <Route path="/about" element={<About />} />
         </Routes>
     </BrowserRouter>
  </div>
  );
}
export default App;


      // <PrivateRoute exact path='/dashboard' component={DashboardPage} />
