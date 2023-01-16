import React from 'react'
import moment from 'moment'
import { useState } from 'react'
import food from '../../Style/food.gif'
import { addReview } from '../../ApiServices/ApiServices';

function FoodSharedItem({ item, name, userThatShared, userThatPostsReview}) {

  const [showReview, setShowReview] = useState(false)
  const [isBooked, setIsBooked] = useState(false)
  const [isSpinner, setIsSpinner] = useState(false)
  const [reviewThanks, setReviewThanks] = useState(false)
  const [review, setReview] = useState('')

  const showReviewBox = () => {
    console.log('make it true')
    setShowReview(!showReview)
  }

  const onSubmitReview = () => {
    const userThatPostsReviewName = userThatPostsReview.name;
    const id = userThatShared;
    const photo = item.photo;
    const name = item.title
    setIsSpinner(true)
    setTimeout(() => {
    setShowReview(false)
      setIsSpinner(false)
      setReviewThanks(true)
    }, 2500)
    addReview(review, userThatPostsReviewName, photo, name, id)
  }

  const onBooking = () => {
    console.log('got clicked')
    setIsBooked(!isBooked)
  }




  return (
    <div className='foodContain'>
    <div className='contain'>

      {/* <div className='ma1 b pa2 br2 bg-red grow'><h3>{item.title}</h3></div>
      <div className='ma1 b pa2 br2 bg-red grow'><h3>{item.address}</h3></div>
       <div className='ma1 pa2 br2 bg-white grow'><h3>{item.date}</h3></div>
      <div className='ma1 pa2 br2 bg-white grow'><img src={item.photo} width="150px" height="auto"></img></div> */}

        {isBooked ? <>
          <div className='itemShare tc center ma1 b pa2 br2 bg-red grow o-40 '><h4>{item.title} <a className='i white'>by {name}</a></h4></div>
          <div className='itemShare tc center ma1 pa2 br2 bg-white grow o-40'><h4><h4 className="b">Pick up by:</h4>{moment(item.date).format('MMMM Do YYYY, h:mm a')}</h4></div>
          <div className='itemShare tc center ma1 pa2 br2 bg-white grow o-40'><h4><h4 className="b">Pick up in:</h4>{item.address}</h4></div>
          <div className='itemShare tc center ma1 pa2 br2 bg-white grow o-40'><img className="tc center" src={item.photo} width="150px" height="auto"></img></div>
          <div className='itemShare tc center ma1 pa2 br2 bg-black white grow  o-40'><h4>Taken</h4></div>
        </> :
          <>
          <div className='itemShare tc center ma1 b pa2 br2 bg-red grow'><h4>{item.title} <a className='i white'>by {name}</a></h4></div>
          <div className='itemShare tc center ma1 pa2 br2 bg-white grow'><h4><h4 className="b">Pick up by:</h4>{moment(item.date).format('MMMM Do YYYY, h:mm a')}</h4></div>
          <div className='itemShare tc center ma1 pa2 br2 bg-white grow'><h4><h4 className="b">Pick up in:</h4>{item.address}</h4></div>
          <div className='itemShare tc center ma1 pa2 br2 bg-white grow'><img className="tc center" src={item.photo} width="150px" height="auto"></img></div>
          <div className='itemShare tc center ma1 pa2 br2 bg-black white grow' onClick={onBooking}><h4>Book</h4></div>
          </>
        }

        {reviewThanks ?
          <div onClick={showReviewBox} className='itemShare tc center ma1 pa2 br2 bg-dark-blue white grow'><h4>Thank you</h4></div>
          :
          <div onClick={showReviewBox} className='itemShare tc center ma1 pa2 br2 bg-dark-blue white grow'><h4>Review</h4></div>
        }

        {!showReview
          ?
          <></> :
          <div className='BookAndReview'>
          <input onChange={(e) => setReview(e.target.value)}className ="br2 ma2 pa2" placeholder='add review'></input>
          <button onClick={onSubmitReview} className='br2 bg-white pa2 grow'>submit</button>
          </div>
        }

        {
          isSpinner
          ?
            <img  className="center ma2 tc"style={{borderRadius: '10px', opacity: 0.8, width: '50px'}} src={food}></img> :
            <></>
        }
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