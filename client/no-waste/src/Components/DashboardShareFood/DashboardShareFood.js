import React from 'react'
import FoodItems from '../DashboardFindFood/FoodItems'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import AddFoodItem from './AddFoodItemForm/AddFoodItem';
import './DashboardShareFood.css'
import { useState, useContext } from 'react';
import { LoginContext } from '../../LoginContext/LoginContext';
import dining from '../../Style/dining.gif'

function ShareFood({}) {
  const { user } = useContext(LoginContext)
  const name = user.name;
  return (
    <div className='shareFood'>
        <div className='myheader br4 w-80 tc center b h2 w5 ma5'>
        <img className="tc center ma1" style={{ borderRadius: '10px', opacity: 0.7, width: '80px' }} src={dining}></img>

          <h1 className='tc center niceFont consolas'>Hi {name}, what do you want to share today?</h1></div>
      <AddFoodItem />

    <FoodItems/>
   <section class="ph3 ph5-ns pv5">
  <article class="mw8 br4 center br2 ba light-pink grow">
    <div class="dt-ns dt--fixed-ns w-100">
      <div class="pa3 pa4-ns dtc-ns v-mid">
        <div>
          <h2 class="fw4 f3 black mt0 mb3">Wonder if somenone wants to share? </h2>
          <p class="black-70 measure lh-copy mv0">
            It is the end of the month, inflation is crazy and you know someone people do too much, check out if someone has something to share
          </p>
        </div>
      </div>
      <div class="pa3 pa4-ns dtc-ns v-mid">
             <Link to="../findfood"><p href="#" class="no-underline f6 tc db w-100 pv3 bg-animate bg-light-yellow hover-bg-yellow black br2">Find food now!</p></Link>
            </div>
    </div>
  </article>
</section>
    </div>
  )
}

export default ShareFood