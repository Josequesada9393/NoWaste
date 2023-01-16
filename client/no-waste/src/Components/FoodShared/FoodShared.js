import React, { useEffect } from 'react'
import FoodSharedItem from '../FoodSharedItem/FoodSharedItem'
import {useContext} from 'react'
import { findFood } from '../../ApiServices/ApiServices';
import { LoginContext } from '../../LoginContext/LoginContext';
import "./FoodShared.css"


function FoodShared({itemsShared, setItemsShared}) {
const { user } = useContext(LoginContext);

  const id = user._id;

  const showFood = async () => {
    const itemsShared = await findFood(id)
    setItemsShared(itemsShared)
    return itemsShared
  }

  useEffect(() => {
    showFood()
  },[])

  return (
    <div className='foodSharedContainer shadow-5 center tc'>

      {itemsShared.length > 0 ? itemsShared.map((outerObject) => outerObject.posts.map((foodItem) => <FoodSharedItem userThatPostsReview={user} userThatShared={outerObject._id} name={outerObject.name} key={foodItem._id} item={foodItem} /> )) : "no food yet"}

    </div>
  )
}

export default FoodShared
