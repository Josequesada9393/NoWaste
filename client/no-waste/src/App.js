
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShareFood from './Components/DashboardShareFood/DashboardShareFood';
import FindFood from './Components/DashboardFindFood/FindFoodPortal';
import About from './Components/About/About';
import ReviewsPortal from './Components/DashboardReviews/ReviewsPortal';
import { useContext } from 'react';
import { AuthContext } from './State/AuthContext';
import ProfileOptions from './Components/Profile/ProfileOptions/ProfileOptions';
import Register from './Components/Register/Register';


function App() {

  const {isAuth} = useContext(AuthContext);
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


