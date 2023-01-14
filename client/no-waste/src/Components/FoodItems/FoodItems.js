import React from 'react'
import FoodItem from '../FoodItem/FoodItem'
import { getItems } from '../../ApiServices/ApiServices'
import { LoginContext } from '../../LoginContext/LoginContext'

import './FoodItems.css'
import { useEffect, useState, useContext } from 'react'
function FoodItems({  }) {

  const {setUser, user} = useContext(LoginContext)

  return (
    <div className='container br2'>
      {user.posts.map((foodItem) => <FoodItem item={foodItem}/>)}
    </div>
  )
}

export default FoodItems