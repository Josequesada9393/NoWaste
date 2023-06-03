import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../../State/LoginContext'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../State/AuthContext';

function NavBar({ isLoggedIn }) {
  const { setLoggedIn } = useContext(LoginContext)
  const {isAuth, logout} = useContext(AuthContext)
  return (
  <div>
  {!isAuth ? (
 <></>
  ) : (
    <nav className="pa3 pa4-ns shadow-3 light-pink">
     {/* <Link to="/"> <a className="link f6 black grow b f5-ns dib mr3" href="#" title="NoWaste">
        NoWaste
      </a></Link> */}

      <Link className="link f6 black grow b f5-ns dib mr3" href="#" title="NoWaste" to="/">
        NoWaste
      </Link>

      <Link className="link dim grow black f6 f5-ns dib mr3" href="#" title="Reviews" to="/reviews">
        Your Reviews
     </Link>
      <Link className="link dim grow black f6 f5-ns dib mr3" href="#" title="Shared" to="/findfood">
        Shared
      </Link>
      <Link className="link dim grow black f6 f5-ns dib mr3" title="About" to="/about" >About</Link>
      <button
        onClick={logout}
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