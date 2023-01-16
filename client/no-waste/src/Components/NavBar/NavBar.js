import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../../LoginContext/LoginContext'

function NavBar({ isLoggedIn }) {
  const {setLoggedIn} = useContext(LoginContext)


  return (
    <div>
      {
        isLoggedIn === false
?
  <nav class="pa3 pa4-ns shadow-2">
  <h1 class="link f6 black grow b f5-ns dib mr3" href="#" title="NoWaste">NoWaste</h1>
 <a class="link dim black f6 f5-ns dib mr3"  title="About">About</a>
    </nav>
          :
  <nav class="pa3 pa4-ns shadow-2">
  <a class="link f6 black grow b f5-ns dib mr3" href="#" title="NoWaste">NoWaste</a>
  <a class="link dim black f6 f5-ns dib mr3" href="#" title="Reviews">Your Reviews</a>
  <a class="link dim black f6 f5-ns dib mr3" href="#" title="Shared">Shared</a>
 <a class="link dim black f6 f5-ns dib mr3"  title="About">About</a>
  <p onClick={() => setLoggedIn(false)}class="link dim black f6 f5-ns dib mr3" href="#" title="logout" type="button">Logout</p>
    </nav>
        }

    </div>

  )
}

export default NavBar