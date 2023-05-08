import React from 'react'
import FoodItems from '../DashboardFindFood/FoodItems'
import {Link} from 'react-router-dom'
import AddFoodItem from './AddFoodItemForm/AddFoodItem';
import './DashboardShareFood.css'
import {useContext } from 'react';
import { AuthContext } from '../../State/AuthContext';
import dining from '../../Style/dining.gif'

function ShareFood({}) {
  const { currentUser } = useContext(AuthContext)
  const name = currentUser.name;
  return (
    <div className='shareFood'>
        <div className='myheader br4 w-80 tc center b h2 w5 ma5'>
        <img className="tc center ma1" style={{ borderRadius: '10px', opacity: 0.7, width: '80px' }} src={dining}></img>
         <h1 className='tc center niceFont consolas'>Hi {name}, what do you want to share today?</h1></div>
      <AddFoodItem />

    {/* <FoodItems/> */}
   <section className="ph3 ph5-ns pv5">
  <article className="mw8 br4 center br2 ba light-pink grow">
    <div className="dt-ns dt--fixed-ns w-100">
      <div className="pa3 pa4-ns dtc-ns v-mid">
        <div>
          <h2 className="fw4 f3 black mt0 mb3">Wonder if somenone wants to share? </h2>
          <p className="black-70 measure lh-copy mv0">
            It is the end of the month, inflation is crazy and you know someone people do too much, check out if someone has something to share
          </p>
        </div>
      </div>
      <div className="pa3 pa4-ns dtc-ns v-mid">
             <Link to="../findfood"><p href="#" className="no-underline f6 tc db w-100 pv3 bg-animate bg-light-yellow hover-bg-yellow black br2">Find food now!</p></Link>
            </div>
    </div>
  </article>
</section>
    </div>
  )
}

export default ShareFood