import React, { useContext } from 'react'
import moment from 'moment'
import './FoodItem.css'
import { deleteItemById, findFood } from '../../ApiServices/ApiServices';
import { AuthContext } from '../../State/AuthContext';
import { FoodItemsContext } from '../../State/ItemsContext';

function FoodItem({item}) {
  const {foodItems, setFoodItems} = useContext(FoodItemsContext)
  const {currentUser} = useContext(AuthContext)


  const onDelete = async () => {
     await deleteItemById(currentUser.id, item._id);
     const updatedItems = await findFood(currentUser.id);
    setFoodItems(updatedItems)

  }


  return (

    < div className = 'foodContain' >
    <div className='contain'>
      <div className='itemShare tc center ma1 b pa2 br2 bg-light-pink  grow'><h4 className='bg-white'>{item.title}</h4></div>
      <div className='itemShare tc center ma1 pa2 br2 bg-white grow'><h4 className="b bg-white">Pick up by:{moment(item.date).format('DD/MM/YYYY HH:mm')}</h4></div>
      <div className='itemShare tc center ma1 pa2 br2 bg-white grow'><h4 className="b bg-white">Pick up in:{item.address}</h4></div>
      <div id="imgContainer" className=' tc center ma1 pa2 br2 bg-white grow'><img className="tc imgFit center" src={(item.photo.url)} ></img></div>
      <div onClick={onDelete} className='itemShare tc center ma1 pa2 br2 bg-black white grow'>delete</div>
    </div>

    </div>

  )
}

export default FoodItem