import React from 'react'
import {  useContext } from 'react'
import IconLogin from '../../Style/IconLogin'
import { loginIn } from '../../ApiServices/ApiServices'
import { LoginContext } from '../../State/LoginContext'
import { AuthContext } from '../../State/AuthContext';
import { registerUser } from '../../ApiServices/ApiServices'

function LoginUpdate({ }) {
  const {setCurrentUser, currentUser} = useContext(AuthContext)

  const handleRegister = async (e) => {
    e.preventDefault();

    const newUser = await registerUser(currentUser);
    console.log('aaaa', newUser)
  }

  return (
    <>

    <form className='tc pa3'>
       <p>new login</p>
        <label>Email</label>
        <input type='text'></input>
        <label>Password</label>
        <input type='password'></input>

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