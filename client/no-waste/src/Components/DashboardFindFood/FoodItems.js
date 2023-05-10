import React, { useEffect, useState } from 'react'
import FoodItem from './FoodItem'
import { LoginContext } from '../../State/LoginContext'
import './FoodItems.css'
import { useContext } from 'react'
import { AuthContext } from '../../State/AuthContext'
import { findFood } from '../../ApiServices/ApiServices'
import { FoodItemsContext } from '../../State/ItemsContext'
function FoodItems() {

  // const { setUser, user } = useContext(LoginContext);
  const { currentUser } = useContext(AuthContext);
  const { foodItems } = useContext(FoodItemsContext);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const getCurr = async () => {
    const currentId = await currentUser.id;
    const currentUserItems = await foodItems.filter((item) => currentId === item.ownerId);
    setFiltered(currentUserItems)
  }
    getCurr()
  }, [])

  return (

    <div className='container shadow-5 br2 bg-transparent w-70 '>
      {/* {user.posts.map((foodItem) => <FoodItem setUser={setUser } user={user} key={user._id} item={foodItem} />)} */}

      {filtered.map((item) => <FoodItem key={item._id} item={item} />)}
    </div>

  )
}

export default FoodItems