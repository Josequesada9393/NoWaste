import React from 'react'
import FoodItems from '../FoodItems/FoodItems'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import AddFoodItem from '../AddFoodItem/AddFoodItem';
import './ShareFood.css'
import { useState, useContext } from 'react';
import { LoginContext } from '../../LoginContext/LoginContext';


function ShareFood({}) {
const {user} = useContext(LoginContext)

  return (
    <div className='shareFood'>
            <div className='itemShare tc w-20 center ma1  pa2 br2 bg-black white grow o-80'><h4>{user.name.toUpperCase()}'S FOOD PORTAL</h4></div>

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