import React, { useEffect, useState } from 'react'
import FoodItem from './FoodItem'
import './FoodItems.css'
import { useContext } from 'react'
import { FoodItemsContext } from '../../State/ItemsContext'
import { AuthContext } from '../../State/AuthContext'
function FoodItems() {

  const { foodItems } = useContext(FoodItemsContext);
  const { currentUser } = useContext(AuthContext);

  const [currUserItems, setCurrUserItems] = useState([])

  useEffect(() => {
    const getCurr = async () => {
      const currentId = await currentUser.id;
      const currentUserItems = await foodItems.filter((item) => currentId === item.ownerId);
      setCurrUserItems(currentUserItems)
    }
    getCurr()
  }, [foodItems])
  
  return (

    <div className='container shadow-5 br2 bg-transparent w-70 '>
      {currUserItems.map((item) => <FoodItem key={item._id} item={item} />)}
    </div>

  )
}

export default FoodItems