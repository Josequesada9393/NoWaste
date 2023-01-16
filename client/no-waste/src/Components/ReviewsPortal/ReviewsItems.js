import React from 'react'

function ReviewsItems({review}) {
  return (
    <div className='mainReviewsContainer'>
      <div className='ReviewsContainer'>
<article class="center br3 mw5 mw6-ns hidden ba mv4 ">
          <h1 class="f4 br3 bg-near-black white mv0 pv2 ph3">by {review.userThatPostsReviewName}</h1>
  <div class="pa3 bt">
            <p class="f6 f5-ns lh-copy measure mv0">
              {review.review}
    </p>
  </div>
        </article>
        </div>
    </div>
  )
}

export default ReviewsItems