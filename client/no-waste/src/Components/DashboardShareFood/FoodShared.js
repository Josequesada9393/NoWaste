import React, { useEffect } from 'react'
import FoodSharedItem from './FoodSharedItem'
import {useContext} from 'react'
import { findFood } from '../../ApiServices/ApiServices';
import { LoginContext } from '../../State/LoginContext';
import "./FoodShared.css"
import { AuthContext } from '../../State/AuthContext';


function FoodShared({}) {
  const { currentUser } = useContext(AuthContext);

  // const id = user._id;
  const showFood = async () => {
    // const itemsShared = await findFood(id)
    // setItemsShared(itemsShared)
    // return itemsShared
  }

  useEffect(() => {
    showFood()
  },[])

  return (
    <div className='foodSharedContainer shadow-5 center tc'>

    <FoodSharedItem/>
    <FoodSharedItem/>
    <FoodSharedItem/>

    </div>
  )
}

export default FoodShared
