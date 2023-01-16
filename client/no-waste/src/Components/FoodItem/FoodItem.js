import React from 'react'
import moment from 'moment'
import './FoodItem.css'
import { deleteItemById } from '../../ApiServices/ApiServices'



function FoodItem({ item, user }) {
  const itemId = item._id
  const userId = user._id



  return (
    <div className='foodContain'>
    <div className='contain'>
      <div className='itemShare tc center ma1 b pa2 br2 bg-red grow'><h4>{item.title}</h4></div>
      <div className='itemShare tc center ma1 pa2 br2 bg-white grow'><h4><h4 className="b">Pick up by:</h4>{moment(item.date).format('MMMM Do YYYY, h:mm a')}</h4></div>
      <div className='itemShare tc center ma1 pa2 br2 bg-white grow'><h4><h4 className="b">Pick up in:</h4>{item.address}</h4></div>
      <div className='itemShare tc center ma1 pa2 br2 bg-white grow'><img className="tc center"src={item.photo} width="150px" height="auto"></img></div>
      <div onClick={() => deleteItemById(userId, itemId)} className='itemShare tc center ma1 pa2 br2 bg-black white grow'><h4></h4>delete</div>
      </div>
      </div>
  )
}

export default FoodItem