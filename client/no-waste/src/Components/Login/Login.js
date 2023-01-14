import React from 'react'
import { useState, useContext } from 'react'
import Profile from '../Profile/Profile'

import { loginIn } from '../../ApiServices/ApiServices'
import { LoginContext } from '../../LoginContext/LoginContext'

function Login({}) {

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
        <div className="br2 ba dark-gray mv6 mw5 center">
          <main className="pa4 black-80 tc">
            <div className="measure">
              <div id="register" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0 center">Login</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" HtmlFor="email">Email</label>
                  <input
                    className="pa2 input-reset ba hover-bg-light-purple w-100"
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => setUser({...user, ...{email: e.target.value}})}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" HtmlFor="password">Password</label>
                  <input
                    className="b pa2 input-reset ba bg-white hover-bg-light-purple hover-white w-100"
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