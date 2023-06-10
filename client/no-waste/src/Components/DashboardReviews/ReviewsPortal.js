import React, { useEffect } from 'react'
import { useContext } from 'react';
import ReviewsItems from './ReviewsItems';
import { FoodItemsContext } from '../../State/ItemsContext';
import { AuthContext } from '../../State/AuthContext';
import { findReviews } from '../../ApiServices/ApiServices';
function ReviewsPortal() {

  // const { user } = useContext(LoginContext);
  const {currentUser} = useContext(AuthContext)
  const {reviews, setReviews} = useContext(FoodItemsContext)

  useEffect(() => {
    const getReviews = async () => {
      const id = await currentUser.id;

      const currentUserReviews = await findReviews(id);
      setReviews(currentUserReviews)
    };
    getReviews()

  }, [])

  return (
    <div className='reviewContainer pgBG'>
      {reviews ? reviews.map((review) => <ReviewsItems review={review} />): [].map((review) => <ReviewsItems review={review} />)}
    </div>
  )
}

export default ReviewsPortal