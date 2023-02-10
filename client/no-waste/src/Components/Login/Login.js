import React from 'react'
import {  useContext } from 'react'
import IconLogin from '../../Style/IconLogin'
import { loginIn } from '../../ApiServices/ApiServices'
import { LoginContext } from '../../LoginContext/LoginContext'

function Login({ }) {


  const {setUser, user, setLoggedIn} = useContext(LoginContext)
  const onSubmit = (event) => {
  event.preventDefault();
  loginIn(user.email, user.password).then((data) => {
      setUser(data)
      setLoggedIn(true)
    })
    .catch((error) => {
    console.log('there was an error', error)
  })
}

  return (
    <>
      <div id="tsparticles"></div>
        <div id="alegreya" className="br2 ba dark-gray mv4 mw5 center">
          <main className="pa4 black-80 tc">
            <div className="measure">
              <div id="register" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0 center"><h1>NoWaste</h1></legend>
              <IconLogin/>
              <div className="mt3">
                  <label className="db fw6 lh-copy  f6" htmlFor="email">Email</label>
                  <input
                    className="pa2 input-reset ba hoverPink w-100"
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => setUser({...user, ...{email: e.target.value}})}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy  f6" htmlFor="password">Password</label>
                  <input
                    className="b pa2 input-reset ba bg-white hoverPink hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => setUser({...user, ...{password: e.target.value}})}
                  />
                </div>
              </div>
              <div className="">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit" value="Login" onClick={onSubmit} />
              </div>

              <div className="lh-copy mt3">
                <p className="f6 link dim black db pointer">Register</p>
              </div>
            </div>
          </main>
            </div>

      </>
  )
}

export default Login