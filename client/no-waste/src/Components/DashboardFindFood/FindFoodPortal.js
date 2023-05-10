import React from 'react'
import { Link } from 'react-router-dom'
import FoodShared from '../DashboardShareFood/FoodShared'
import { useState, useContext, useEffect } from 'react'
import dining from '../../Style/dining.gif'
import './FindFoodPortal.css'
import Map from '../MAP/Map'
import { AuthContext } from '../../State/AuthContext'
import { FoodItemsContext } from '../../State/ItemsContext'


function FindFood({ }) {

  const { currentUser } = useContext(AuthContext);
  const { foodItems } = useContext(FoodItemsContext);

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const getCurr = async () => {
    const currentId = await currentUser.id;
    const currentUserItems = await foodItems.filter((item) => currentId != item.ownerId);
    setFiltered(currentUserItems)
  }
    getCurr()
  }, [])
  console.log(filtered)

  return (

    <div>
      <div className='title br4 w-80 tc center b h2 w5 ma5'>
      <img className="tc center ma1" style={{ borderRadius: '10px', opacity: 0.7, width: '80px' }} src={dining}></img>
      <h1 className='tc center niceFont consolas'>Food near you</h1></div>
      <FoodShared items={filtered} />
      <Map items={filtered} />

  <section className="ph3 ph5-ns pv5">
  <article className="mw8 br4 center br2 ba grow light-pink">
    <div className="dt-ns dt--fixed-ns w-100">
      <div className="pa3 pa4-ns dtc-ns v-mid">
        <div>
          <h2 className="fw4 f3 black mt0 mb3">Would you like to share something? </h2>
          <p className="black-70 measure lh-copy mv0">
         </p>
        </div>
      </div>
      <div className="pa3 pa4-ns dtc-ns v-mid">
        <Link to="../sharefood"><p href="#" className="no-underline f6 tc db w-100 pv3 bg-animate bg-light-yellow hover-bg-yellow black br2">Share Food now!</p></Link>
            </div>
    </div>
  </article>
      </section>

       <section className="ph3 ph5-ns pv5">
  <article className="mw8 br4 center br2 ba grow light-pink">
    <div className="dt-ns dt--fixed-ns w-100">
      <div className="pa3 pa4-ns dtc-ns v-mid">
        <div>
          <h2 className="fw4 f3 black mt0 mb3">See what others say about you </h2>
          <p className="black-70 measure lh-copy mv0">
         </p>
        </div>
      </div>
      <div className="pa3 pa4-ns dtc-ns v-mid">
        <Link to="../reviews"><p href="#" className="no-underline f6 tc db w-100 pv3 bg-animate bg-light-yellow hover-bg-yellow black br2">Check out your reviews!</p></Link>
            </div>
    </div>
  </article>
</section>
    </div>
  )
}

export default FindFood