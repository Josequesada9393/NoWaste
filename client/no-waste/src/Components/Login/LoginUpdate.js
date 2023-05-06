import React from 'react'
import {  useContext } from 'react'
import IconLogin from '../../Style/IconLogin'
import { loginIn } from '../../ApiServices/ApiServices'
import { LoginContext } from '../../State/LoginContext'

function LoginUpdate({ }) {
  const handleRegister = () => {

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
        <input type='text'></input>
        <label>Email</label>
        <input type='text'></input>
        <label>Password</label>
        <input type='password'></input>
        <button type='submit' onClick={handleRegister}></button>
    </form>

      </>
  )
}

export default LoginUpdate