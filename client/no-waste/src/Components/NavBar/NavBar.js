import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../../LoginContext/LoginContext'
import {  Link } from 'react-router-dom'

function NavBar({ isLoggedIn }) {
  const {setLoggedIn} = useContext(LoginContext)
  return (
  <div>
  {isLoggedIn === false ? (
 <></>
  ) : (
    <nav className="pa3 pa4-ns shadow-3 light-pink">
     <Link to="/"> <a className="link f6 black grow b f5-ns dib mr3" href="#" title="NoWaste">
        NoWaste
      </a></Link>
      <Link to="/reviews"><a className="link dim grow black f6 f5-ns dib mr3" href="#" title="Reviews">
        Your Reviews
      </a></Link>
      <Link to="/findfood"><a className="link dim grow black f6 f5-ns dib mr3" href="#" title="Shared">
        Shared
      </a></Link>
      <Link to="/about" ><a className="link dim grow black f6 f5-ns dib mr3" title="About">About</a></Link>
      <button
        onClick={() => setLoggedIn(false)}
        className="link dim black f6 f5-ns dib mr3"
        title="logout"
      >
        Logout
      </button>
    </nav>
  )}
</div>

  )
}

export default NavBar