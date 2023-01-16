import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './Profile.css'
import ShareFood from '../ShareFood/ShareFood'
import FindFood from '../FindFood/FindFood'
import ProfileOptions from '../ProfileOptions/ProfileOptions'
import About from '../About/About'
import ReviewsPortal from '../ReviewsPortal/ReviewsPortal'
function Profile({}) {
  return (
<Router>
      <Routes>
      <Route path="/" element={<ProfileOptions/>}/>
      <Route path="/sharefood" element={<ShareFood/>}/>
      <Route path="/findfood" element={<FindFood />} />
      <Route path="/reviews" element={<ReviewsPortal />} />
      <Route path="/about" element={<About />} />

      </Routes>
    </Router>
  )
}

export default Profile