import React from 'react'
import moment from 'moment'
import { useState } from 'react'
import food from '../../Style/food.gif'
import { addReview } from '../../ApiServices/ApiServices';
import { AuthContext } from '../../State/AuthContext';
import { useContext } from 'react';

function FoodSharedItem({item}) {
  const {currentUser} = useContext(AuthContext)
  const [showReview, setShowReview] = useState(false)
  const [isBooked, setIsBooked] = useState(false)
  const [isSpinner, setIsSpinner] = useState(false)
  const [reviewThanks, setReviewThanks] = useState(false)
  const [review, setReview] = useState('')
  const showReviewBox = () => {
    setShowReview(!showReview)
  }

  const onSubmitReview = async () => {
    const itemOwnerId = item.ownerId;
    const itemName = item.title;
    const reviewerId = currentUser.id;//
    const reviewerName = currentUser.name;
    const itemId = item._id;
    const itemOwnerName = item.ownerName;//
    const photo = item.photo;
    setIsSpinner(true)
    setTimeout(() => {
    setShowReview(false)
      setIsSpinner(false)
      setReviewThanks(true)
      alert(`${item.ownerName} will see your review in their profile`)

    }, 2500)
    await addReview(itemOwnerId, itemName, reviewerId, reviewerName, itemId, itemOwnerName, review, photo)

  }

  const onBooking = () => {
    if (!isBooked) {
      setIsBooked(true)
      return
    }
  }

  return (
    <div className='foodContain'>
    <div className='contain'>

        {isBooked ? <>
          <div className='itemShare tc center ma1 b pa2 br2 bg-light-pink grow o-40 '><h4>{item.title} <a className='i white'> by {item.ownerName}</a></h4></div>
          <div className='itemShare tc center ma1 pa2 br2 bg-white grow o-40'><h4><span className="b">Pick up by:</span>{item.date}</h4></div>
          <div className='itemShare tc center ma1 pa2 br2 bg-white grow o-40'><h4><span className="b">Pick up in:</span>{item.address}</h4></div>
          <div className='itemShare tc center ma1 pa2 br2 bg-white grow o-40'><img className="tc center" src={item.photo.url} width="150px" height="auto"></img></div>
          <div className='itemShare tc center ma1 pa2 br2 bg-black white grow  o-40'><h4>Taken</h4></div>
        </> :
          <>
          <div className='itemShare tc center  b pa1 br2 black bg-light-pink grow'><h4>{item.title} <a className='i black'> by {item.ownerName}</a></h4></div>
          <div className='itemShare tc center ma1 pa1 br2 bg-white grow'><h4><span className="b">Pick up by:</span>{'date'}</h4></div>
          <div className='itemShare tc center pa1 br2 bg-white grow'><h4><span className="b">Pick up in:</span>{item.address}</h4></div>
          <div className='itemShare tc center ma1 pa1 br2 bg-white grow'><img className="tc center" src={item.photo.url} width="150px" height="auto"></img></div>
          <div className='itemShare tc center pa1 br2 bg-black white grow' onClick={onBooking}><h4>Book</h4></div>
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
          <input onChange={(e) => setReview(e.target.value)} className ="br2 ma2 pa2" placeholder='add review'></input>
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
