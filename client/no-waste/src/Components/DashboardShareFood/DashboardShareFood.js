import React, {useEffect} from 'react'
import FoodItems from '../DashboardFindFood/FoodItems'
import {Link as ReachLink} from 'react-router-dom'
import AddFoodItem from './AddFoodItemForm/AddFoodItem';
import './DashboardShareFood.css'
import {useContext } from 'react';
import { AuthContext } from '../../State/AuthContext';
import dining from '../../Style/dining.gif'
import { FoodItemsContext } from '../../State/ItemsContext';
import { findFood } from '../../ApiServices/ApiServices';
import {Box, Link} from '@chakra-ui/react';
import RouteButtons from '../RouteButtons/RouteButtons';


function ShareFood({}) {
  const { currentUser } = useContext(AuthContext);
  const {setFoodItems} = useContext(FoodItemsContext);

  
 async function getItems() {
    const items = await findFood();
    setFoodItems(items);
  }
  useEffect(() => {
    getItems()
  }, [])

  return (
    <div className='shareFood pgBG'>
        <div className='pa3 br4 b'>
        <img className="tc center ma1" style={{ borderRadius: '10px', opacity: 0.7, width: '80px' }} src={dining}></img>
        <h1 className='tc center  niceFont consolas'>Hi {currentUser && currentUser.name}, what do you want to share today?</h1>
         </div>
      <AddFoodItem />

      <FoodItems/>
    
              <RouteButtons route={"../findfood"} text={'Find food near you'}></RouteButtons>
    </div>
  )
}

export default ShareFood