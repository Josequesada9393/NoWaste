import React from 'react'
import { Link} from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../../../LoginContext/LoginContext'
import Icon from '../../../Style/Icon'
function ProfileOptions({ }) {
    const {user} = useContext(LoginContext)

  return (
    <div>
      <section className="ph3 ph5-ns pv1 shadow-5 tc center">
        <h1>Welcome back <h2 className='b grow'>{user.name}</h2></h1>
        <article className="mw8 br4 center br2 ba">
          <div className="dt-ns dt--fixed-ns w-100">
<Icon/>


      <div className="pa3 pa4-ns  dtc-ns v-mid">
        <div>
          <h2 className="fw4 f3 black mt0 mb3">Did you cook too much? </h2>
          <p className="black-70 measure lh-copy mv0">
            If you have way too much food or you bought extra fresh produce that will go to waste, please do someone a favor a share it
          </p>
        </div>
      </div>
      <div className="pa3 pa4-ns dtc-ns v-mid">
      <Link to="sharefood"> <p className="no-underline f6 tc db w-100 pv3 bg-animate b ba bw2 br3 b--light-pink bg-transparent hover-bg-light-yellow hover-black">Share food Now!</p></Link>
       </div>
    </div>
  </article>
      </section>

          <section className="ph3 ph5-ns pv5">
  <article className="mw8 br4 center br2 ba  ">
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
       <Link to="findfood"> <p className="no-underline f6 tc db w-100 pv3 bg-animate b ba bw2 br3 b--light-pink bg-transparent hover-bg-light-yellow hover-black">Find food now!</p></Link>
            </div>
    </div>
  </article>
      </section>


      <article className="mw8 br4 center br2 ba light-pink">
          <div className="dt-ns dt--fixed-ns w-100">
      <div className="pa3 pa4-ns  dtc-ns v-mid">
        <div>
          <h2 className="fw4 f3 black mt0 mb3">Check out what other users say about your food! </h2>
          <p className="black-70 measure lh-copy mv0">
            Others are talking about you! Every time someone books your food, they get to write a review!
          </p>
        </div>
      </div>
      <div className="pa3 pa4-ns dtc-ns v-mid">
      <Link to="reviews"><p className="no-underline f6 tc db w-100 b pv3 bg-animate bg-washed-blue hover-bg-light-yellow black br2">See your reviews!</p></Link>
       </div>
    </div>
  </article>
    </div>
  )
}

export default ProfileOptions