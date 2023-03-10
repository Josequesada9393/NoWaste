import React from 'react'
import FoodItem from './FoodItem'
import { LoginContext } from '../../LoginContext/LoginContext'
import './FoodItems.css'
import {useContext } from 'react'

function FoodItems() {

  const { setUser, user } = useContext(LoginContext);


  return (

    <div className='container shadow-5 br2 bg-transparent w-70 '>
      {user.posts.map((foodItem) => <FoodItem setUser={setUser } user={user} key={user._id} item={foodItem} />)}
    </div>

  )
}

export default FoodItems