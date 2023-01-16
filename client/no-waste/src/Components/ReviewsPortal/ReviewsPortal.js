import React from 'react'
import { LoginContext } from '../../LoginContext/LoginContext';
import { useContext } from 'react';
import ReviewsItems from './ReviewsItems';
function ReviewsPortal() {

  const { user } = useContext(LoginContext);

  return (
    <div className='fatherOfAll'>
      {user.reviews.map((review) => <ReviewsItems review={review} />)}
    </div>
  )
}

export default ReviewsPortal