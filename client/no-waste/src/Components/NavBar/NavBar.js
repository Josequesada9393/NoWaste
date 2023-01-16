import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../../LoginContext/LoginContext'

function NavBar({ isLoggedIn }) {
  const {setLoggedIn} = useContext(LoginContext)


  return (
  <div>
  {isLoggedIn === false ? (
    <nav className="pa3 pa4-ns shadow-2">
      <h1 className="link f6 black grow b f5-ns dib mr3" href="#" title="NoWaste">
        NoWaste
      </h1>
      <a className="link dim black f6 f5-ns dib mr3" title="About">About</a>
    </nav>
  ) : (
    <nav className="pa3 pa4-ns shadow-2">
      <a className="link f6 black grow b f5-ns dib mr3" href="#" title="NoWaste">
        NoWaste
      </a>
      <a className="link dim black f6 f5-ns dib mr3" href="#" title="Reviews">
        Your Reviews
      </a>
      <a className="link dim black f6 f5-ns dib mr3" href="#" title="Shared">
        Shared
      </a>
      <a className="link dim black f6 f5-ns dib mr3" title="About">About</a>
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