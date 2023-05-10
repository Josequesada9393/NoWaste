import React, { useEffect, useState } from 'react'
import FoodSharedItem from './FoodSharedItem'
import {useContext} from 'react'
import { findFood } from '../../ApiServices/ApiServices';
import { LoginContext } from '../../State/LoginContext';
import "./FoodShared.css"
import { AuthContext } from '../../State/AuthContext';
import { FoodItemsContext } from '../../State/ItemsContext';

function FoodShared({}) {
  const { currentUser } = useContext(AuthContext);
  const { foodItems } = useContext(FoodItemsContext);

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const getCurr = async () => {
    const currentId = await currentUser.id;
    const currentUserItems = await foodItems.filter((item) => currentId != item.ownerId);
    setFiltered(currentUserItems)
  }
    getCurr()
  }, [])
  console.log(filtered)
  return (
    <div className='foodSharedContainer shadow-5 center tc'>
      {filtered.map((item) => <FoodSharedItem item={item} key={item._id}/>)}
    </div>
  )
}

export default FoodShared
