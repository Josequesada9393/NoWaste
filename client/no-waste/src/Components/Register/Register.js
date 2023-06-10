import React from 'react'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import IconLogin from '../../Style/IconLogin'
import { loginIn } from '../../ApiServices/ApiServices'
import { AuthContext } from '../../State/AuthContext'
import { registerUser } from '../../ApiServices/ApiServices'

function Register({ }) {

 const { setCurrentUser, currentUser, isAuth, logout } = useContext(AuthContext);
const [logUser, setLogUser] = useState(null);
const [loading, setLoading] = useState(false)
const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true)
     setCurrentUser(logUser);
    setTimeout(() => {
      registerUser(logUser);
      setLoading(false)
      navigate('/')
    }, 2000); // Executes the callback function after a 2000ms (2 seconds) delay
    
  }

  return (
    <div className='pgBG'>
      <div id="tsparticles"></div>
        <div id="alegreya" className="br2 ba dark-gray mv4 mw5 center">
          <main className="pa4 black-80 tc">
            <div className="measure">
              <form id="register" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0 center"><h1>NoWaste</h1></legend>
              <IconLogin/>
              <div className="mt3 mb3">
                     <label className="db fw6 lh-copy  f6" htmlFor="name">Name</label>
                  <input
                    className="pa2 input-reset ba hoverPink w-100"
                    type="name"
                    name="name"
                    id="name"
                     onChange={(e) => setLogUser({...logUser, ...{name: e.target.value}})}
                  />
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
              {loading ? <h1>loading...</h1> : <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit" value="Register" onClick={handleRegister} />}  
              </div>

              <div className="lh-copy mt3">

          <Link to="../login"><p className="f6 link dim black db pointer">Login</p></Link>

              </div>
            </div>
          </main>
            </div>

     </div>
  )
}

export default Register