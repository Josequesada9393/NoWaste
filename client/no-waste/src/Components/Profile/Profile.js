import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './Profile.css'
import ShareFood from '../ShareFood/ShareFood'
import FindFood from '../FindFood/FindFood'
import ProfileOptions from '../ProfileOptions/ProfileOptions'
import Login from '../Login/Login'

function Profile({}) {
  return (
<Router>
      <Routes>
      <Route path="/" element={<ProfileOptions/>}/>
      <Route path="/sharefood" element={<ShareFood/>}/>
      <Route path="/findfood" element={<FindFood />} />
      </Routes>
    </Router>
  )
}

export default Profile