import React, { useEffect } from 'react'
import FoodSharedItem from '../FoodSharedItem/FoodSharedItem'
import { useState, useContext } from 'react'
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
  // function getData(mainArray) {
  // mainArray.forEach(function(outerObject) {
  //   outerObject.posts.map(function(innerObject) {
  //     return innerObject;
  //   });
  // });
  // }

  return (
    <div className='foodSharedContainer shadow-5 center tc'>

      {/* {itemsShared.length > 0 ? <FoodSharedItem email={itemsShared[0].email} /> : "no food yet"} */}
     {/* {itemsShared.length > 0 ? <FoodSharedItem email={itemsShared.map((email) => email={email})}/> : "no food yet"} */}

      {/* {<p>show this if data does not render</p>} */}
      {/* {itemsShared.length > 0 ? itemsShared[0].posts.map((foodItem) => <FoodSharedItem item={foodItem}/>) : "no food yet"} */}
      {itemsShared.length > 0 ? itemsShared.map((outerObject) => outerObject.posts.map((foodItem) => <FoodSharedItem name={outerObject.name} key={foodItem._id} item={foodItem} /> )) : "no food yet"}
      {/* {itemsShared.map((foodItem) =>  <FoodSharedItem key={foodItem._id} item={foodItem}/>)} */}
      {/* <p onClick={() => showFood} className="formButton ma2 bg-light-yellow f5 grow pv2 br2" type='submit'>show food</p> */}
      {/* <FoodSharedItem/> */}
    </div>
  )
}

export default FoodShared