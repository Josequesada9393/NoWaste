import React, { useEffect } from 'react'
import { LoginContext } from '../../State/LoginContext';
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
    console.log(reviews)
    getReviews()

  }, [])

  return (
    <div className='fatherOfAll'>
      {reviews.map((review) => <ReviewsItems review={review} />)}
      {/* <ReviewsItems/>
      <ReviewsItems/>
      <ReviewsItems/> */}
    </div>
  )
}

export default ReviewsPortal