import React from 'react'
import './ReviewsItems.css'

function ReviewsItems({review}) {
  return (
    <container className="mainReviewsContainer hoverPink grow pa2 br4 shadow-5">
      <h3 className="bg-black o-90 white  br3 center tc pa3">
        <h2 className='yellow'>{review.reviewerName}
        </h2> reviewed your <h2 className='yellow'>{review.itemName}</h2></h3>
    <div className="">
    <p className="ma3">
          {review.review}
    </p>
        <img className="br4 o-70 pa1 center" width="150px" height="auto" src={review.photo.url}></img>
    </div>
   </container>
  )
}

export default ReviewsItems