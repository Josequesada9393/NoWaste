import React from 'react'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import IconLogin from '../../Style/IconLogin'
import { AuthContext } from '../../State/AuthContext'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../ApiServices/ApiServices'

function Login({ }) {

  const { setCurrentUser, currentUser, isAuth, logout } = useContext(AuthContext);
  const [logUser, setLogUser] = useState(null);
  const navigate = useNavigate()

    const handleLogin = async (e) => {
    e.preventDefault();
    const loggedUser = await loginUser(logUser);
    if (loggedUser) {
      setCurrentUser(loggedUser);
      navigate('/')
    }
  }

  return (
    <div className='pgBG'>
      <div id="tsparticles "></div>
        <div id="alegreya" className="br2 ba dark-gray mv4 mw5 center">
          <main className="pa4 black-80 tc">
            <div className="measure">
              <form id="register" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0 center"><h1>NoWaste</h1></legend>
              <IconLogin/>
              <div className="mt3">
                  <label className="db fw6 lh-copy  f6" htmlFor="email">Email</label>
                  <input
                    className="pa2 input-reset ba hoverPink w-100"
                    type="email"
                    name="email"
                    id="email"
                     onChange={(e) => setLogUser({...logUser, ...{email: e.target.value}})}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy  f6" htmlFor="password">Password</label>
                  <input
                    className="b pa2 input-reset ba bg-white hoverPink hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
               onChange={(e) => setLogUser({...logUser, ...{password: e.target.value}})}
                  />
                </div>
              </form>
              <div className="">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit" value="Login" onClick={handleLogin} />
              </div>

              <div className="lh-copy mt3">

          <Link to="../register"><p className="f6 link dim black db pointer">Register</p></Link>

              </div>
            </div>
          </main>
            </div>

      </div>
  )
}

export default Login