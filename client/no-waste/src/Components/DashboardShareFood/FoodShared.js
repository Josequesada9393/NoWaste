import React, { useEffect, useState } from 'react'
import FoodSharedItem from './FoodSharedItem'
import {useContext} from 'react'
import { findFood } from '../../ApiServices/ApiServices';
import "./FoodShared.css"
import { AuthContext } from '../../State/AuthContext';
import { FoodItemsContext } from '../../State/ItemsContext';

function FoodShared({items}) {

  return (
    <div className='foodSharedContainer shadow-5 center tc'>
      {items.map((item) => <FoodSharedItem item={item} key={item._id}/>)}
    </div>
  )
}

export default FoodShared
