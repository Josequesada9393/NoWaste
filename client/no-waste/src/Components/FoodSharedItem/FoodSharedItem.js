import React from 'react'
import moment from 'moment'

function FoodSharedItem({item, name}) {
  return (
    <div className='foodContain'>
    <div className='contain'>

      {/* <div className='ma1 b pa2 br2 bg-red grow'><h3>{item.title}</h3></div>
      <div className='ma1 b pa2 br2 bg-red grow'><h3>{item.address}</h3></div>
       <div className='ma1 pa2 br2 bg-white grow'><h3>{item.date}</h3></div>
      <div className='ma1 pa2 br2 bg-white grow'><img src={item.photo} width="150px" height="auto"></img></div> */}
       <div className='itemShare tc center ma1 b pa2 br2 bg-red grow'><h4>{item.title}</h4></div>
      <div className='itemShare tc center ma1 pa2 br2 bg-white grow'><h4><h4 className="b">Pick up by:</h4>{moment(item.date).format('MMMM Do YYYY, h:mm a')}</h4></div>
      <div className='itemShare tc center ma1 pa2 br2 bg-white grow'><h4><h4 className="b">Pick up in:</h4>{item.address}</h4></div>
      <div className='itemShare tc center ma1 pa2 br2 bg-white grow'><img className="tc center"src={item.photo} width="150px" height="auto"></img></div>
      <div className='itemShare tc center ma1 pa2 br2 bg-black white grow'><h4>by {name}</h4></div>
      </div>
      </div>
  )
}

export default FoodSharedItem



//  <div className='itemShare tc center ma1 b pa2 br2 bg-red grow'><h4>{item.title}</h4></div>
//       <div className='itemShare tc center ma1 pa2 br2 bg-white grow'><h4><h4 className="b">Pick up by:</h4>{moment(item.date).format('MMMM Do YYYY, h:mm a')}</h4></div>
//       <div className='itemShare tc center ma1 pa2 br2 bg-white grow'><h4><h4 className="b">Pick up in:</h4>{item.address}</h4></div>
//       <div className='itemShare tc center ma1 pa2 br2 bg-white grow'><img className="tc center"src={item.photo} width="150px" height="auto"></img></div>
//       <div className='itemShare tc center ma1 pa2 br2 bg-black grow'><h4></h4></div>