import React from 'react'
import FoodShared from '../DashboardShareFood/FoodShared'
import { useState, useContext, useEffect } from 'react'
import dining from '../../Style/dining.gif'
import './FindFoodPortal.css'
import RouteButtons from '../RouteButtons/RouteButtons'
import Map from '../MAP/Map'
import { AuthContext } from '../../State/AuthContext'
import { findFood } from '../../ApiServices/ApiServices'
import { FoodItemsContext } from '../../State/ItemsContext'

function FindFood() {

  const { currentUser } = useContext(AuthContext);
  const {setFoodItems } = useContext(FoodItemsContext);

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const getCurr = async () => {
    const currentId = await currentUser.id;
    const allFood = await findFood();
     setFoodItems(allFood)
    const currentUserItems = await allFood.filter((item) => currentId != item.ownerId);
    setFiltered(currentUserItems)
  }
    getCurr()
  }, [])


  return (
    <div className="pgBG">
      <div className='title br4 w-80 tc center b h2 w5 '>
      <img className="tc center ma1" style={{ borderRadius: '10px', opacity: 0.7, width: '80px' }} src={dining}></img>
      <h1 className='tc center niceFont consolas'>Food near you</h1></div>
      <FoodShared items={filtered} />
      <Map items={filtered} />


      <RouteButtons route={"../sharefood"} text={'Share food with your community'}></RouteButtons>
      <RouteButtons route={"../reviews"} text={'Check your reviews'}></RouteButtons>

    </div>
  )
}

export default FindFood