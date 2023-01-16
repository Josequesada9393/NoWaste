import React from 'react'
import 'tachyons'

function Register() {
  
  return (
  <div className="br2 ba dark-gray mv6 mw5 center">
  <main className="pa4 black-80 tc">
  <div className="measure">
    <div id="register" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" HtmlFor="email">Email</label>
              <input
                className="pa2 input-reset ba hover-bg-light-purple w-100"
                type="email"
                name="email"
                id="email"
             />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" HtmlFor="password">Password</label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-light-purple hover-white w-100"
                type="password"
                name="password"
                id="password"
            />
      </div>
    </div>
    <div className="">
            <input

              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit" value="Register" />
    </div>
  </div>
</main>
</div>
  )
}

export default Register