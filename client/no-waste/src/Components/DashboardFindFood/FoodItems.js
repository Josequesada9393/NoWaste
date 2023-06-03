import React, { useEffect, useState } from 'react'
import FoodItem from './FoodItem'
import './FoodItems.css'
import { useContext } from 'react'
import { FoodItemsContext } from '../../State/ItemsContext'
function FoodItems() {

  const { foodItems } = useContext(FoodItemsContext);

  useEffect(() => {
    
  }, [foodItems])
  
  return (

    <div className='container shadow-5 br2 bg-transparent w-70 '>
      hello
      {/* {user.posts.map((foodItem) => <FoodItem setUser={setUser } user={user} key={user._id} item={foodItem} />)} */}
      {foodItems.map((item) => <FoodItem key={item._id} item={item} />)}
    </div>

  )
}

export default FoodItems