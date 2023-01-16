import React from 'react'
import Tilt from 'react-parallax-tilt'
import food from './food.gif'

function Icon() {
  return (
  <div className='ma4 mt0'>
      <Tilt reset={false} gyroscope={true} tiltMaxAngleX={25} tiltMaxAngleY={25} glareColor={'#afdc'}>
        <div className="Tilt br4 grow shadow-2" options={{max: 55}} style={{ marginTop: "10%", marginLeft: "auto", height: '120px', width: '120px', backgroundColor: 'transparent', border: 'none', opacity: 0.5}}>
          <div className="Tilt-inner" style={{ margin: 'auto' }}><img style={{paddingTop: '', background: 'grey', borderRadius: '10px', opacity: 0.5, width: '100%'}} src={food}></img></div>
      </div>
    </Tilt>
   </div>
  )
}

export default Icon