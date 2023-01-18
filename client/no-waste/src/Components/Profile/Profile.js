import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './Profile.css'
import ShareFood from '../DashboardShareFood/DashboardShareFood'
import FindFood from '../DashboardFindFood/FindFoodPortal'
import ProfileOptions from './ProfileOptions/ProfileOptions'
import About from '../About/About'
import ReviewsPortal from '../DashboardReviews/ReviewsPortal'
function Profile({}) {
  return (
<div>
      <Routes>
      <Route path="/" element={<ProfileOptions/>}/>
      <Route path="/sharefood" element={<ShareFood/>}/>
      <Route path="/findfood" element={<FindFood />} />
      <Route path="/reviews" element={<ReviewsPortal />} />
      <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default Profile