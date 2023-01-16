import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import FoodShared from '../FoodShared/FoodShared'
import { LoginContext } from '../../LoginContext/LoginContext'
import { useContext, useState } from 'react'
import './FindFood.css'
import Map from '../MAP/Map'


function FindFood({ }) {

const [itemsShared, setItemsShared] = useState({})

  const {user} = useContext(LoginContext);

  return (

    <div>

      <div className='title br4 tc center b h2 w5 ma3'><h2 className='tc center'>Find delicious food near you</h2></div>

      <FoodShared itemsShared={itemsShared} setItemsShared={setItemsShared} />
    <Map/>


  <section class="ph3 ph5-ns pv5">
  <article class="mw8 br4 center br2 ba b--red bg-light-red">
    <div class="dt-ns dt--fixed-ns w-100">
      <div class="pa3 pa4-ns dtc-ns v-mid">
        <div>
          <h2 class="fw4 f3 black mt0 mb3">Would you like to share something? </h2>
          <p class="black-70 measure lh-copy mv0">
         </p>
        </div>
      </div>
      <div class="pa3 pa4-ns dtc-ns v-mid">
        <Link to="../sharefood"><p href="#" class="no-underline f6 tc db w-100 pv3 bg-animate bg-light-yellow hover-bg-yellow black br2">Share Food now!</p></Link>
            </div>
    </div>
  </article>
</section>
    </div>
  )
}

export default FindFood