import React from 'react'
import {  useContext, useState } from 'react'
import IconLogin from '../../Style/IconLogin'
import { loginIn, loginUser } from '../../ApiServices/ApiServices'
import { LoginContext } from '../../State/LoginContext'
import { AuthContext } from '../../State/AuthContext';
import { registerUser } from '../../ApiServices/ApiServices'

function LoginUpdate({ }) {
  const { setCurrentUser, currentUser } = useContext(AuthContext);
  const [logUser, setLogUser] = useState(null)

  const handleRegister = async (e) => {
    e.preventDefault();
    const newUser = await registerUser(currentUser);
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const loggedUser = await loginUser(logUser);
    console.log(loggedUser)
  }

  return (
    <>

    <form className='tc pa3'>
       <p>new login</p>
        <label>Email</label>
        <input
          type='text'
          onChange={(e) => setLogUser({...logUser, ...{email: e.target.value}})}
        ></input>
        <label>Password</label>
        <input type='password'
          onChange={(e) => setLogUser({...logUser, ...{password: e.target.value}})}
        ></input>
        <button onClick={handleLogin}>Log IN</button>
      </form>

    <form className='tc'>
        <p>new register</p>
        <label>Name</label>
        <input
          type='text'
       onChange={(e) => setCurrentUser({...currentUser, ...{name: e.target.value}})}

        ></input>
        <label>Email</label>
        <input
          type='text'
         onChange={(e) => setCurrentUser({...currentUser, ...{email: e.target.value}})}
></input>
        <label>Password</label>
        <input
          type='password'
          onChange={(e) => setCurrentUser({...currentUser, ...{password: e.target.value}})}

        ></input>
        <button type='submit' onClick={handleRegister}>Register</button>
    </form>

      </>
  )
}

export default LoginUpdate