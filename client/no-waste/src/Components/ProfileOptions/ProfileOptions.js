import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../../LoginContext/LoginContext'
import Icon from '../../Style/Icon'
function ProfileOptions({ }) {
    const {user} = useContext(LoginContext)

  return (
    <div>
      <section class="ph3 ph5-ns pv1 tc center">
        <h1>Welcome back {user.name}</h1>
        <article class="mw8 br4 center br2 ba b--red bg-light-red">
          <div class="dt-ns dt--fixed-ns w-100">
<Icon/>


      <div class="pa3 pa4-ns  dtc-ns v-mid">
        <div>
          <h2 class="fw4 f3 black mt0 mb3">Did you cook too much? </h2>
          <p class="black-70 measure lh-copy mv0">
            If you have way too much food or you bought extra fresh produce that will go to waste, please do someone a favor a share it
          </p>
        </div>
      </div>
      <div class="pa3 pa4-ns dtc-ns v-mid">
      <Link to="sharefood"> <p class="no-underline f6 tc db w-100 pv3 bg-animate bg-light-yellow hover-bg-yellow black br2">Share food Now!</p></Link>
       </div>
    </div>
  </article>
      </section>

          <section class="ph3 ph5-ns pv5">
  <article class="mw8 br4 center br2 ba b--red bg-light-red">
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
       <Link to="findfood"> <p class="no-underline f6 tc db w-100 pv3 bg-animate bg-light-yellow hover-bg-yellow black br2">Find food now!</p></Link>
            </div>
    </div>
  </article>
      </section>
    </div>
  )
}

export default ProfileOptions