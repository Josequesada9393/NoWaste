import React from 'react'
import moment from 'moment'
import './FoodItem.css'
import { deleteItemById } from '../../ApiServices/ApiServices'


function FoodItem({ item, user, setUser}) {
  const itemId = item._id
  const userId = user._id

  const onDelete = async () => {
    console.log('deleting')
    const newUser = await deleteItemById(userId, itemId)
    setUser(newUser)
  }


  return (

    < div className = 'foodContain' >
    <div className='contain'>
      <div className='itemShare tc center ma1 b pa2 br2 bg-light-pink  grow'><h4>{item.title}</h4></div>
      <div className='itemShare tc center ma1 pa2 br2 bg-white grow'><h4><h4 className="b">Pick up by:</h4>{moment(item.date).format('MMMM Do YYYY, h:mm a')}</h4></div>
      <div className='itemShare tc center ma1 pa2 br2 bg-white grow'><h4><h4 className="b">Pick up in:</h4>{item.address}</h4></div>
      <div id="imgContainer" className=' tc center ma1 pa2 br2 bg-white grow'><img className="tc imgFit center" src={(item.photo.url)} ></img></div>
      <div onClick={onDelete} className='itemShare tc center ma1 pa2 br2 bg-black white grow'>delete</div>
    </div>

    </div>

  )
}

export default FoodItem