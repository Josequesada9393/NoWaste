import React from 'react'

function FoodItem({item}) {
  return (
    <div>
      <div className='ma1 b pa2 br2 bg-red grow'><h3>{item.title}</h3></div>
      <div className='ma1 pa2 br2 bg-white grow'><h3>{item.date}</h3></div>
      <div className='ma1 pa2 br2 bg-white grow'><h3>{item.address}</h3></div>
      <div className='ma1 pa2 br2 bg-white grow'><img src={item.photos[0]} width="150px" height="auto"></img></div>
      <div className='ma1 pa2 br2 bg-black grow'><h3></h3></div>

    </div>
  )
}

export default FoodItem