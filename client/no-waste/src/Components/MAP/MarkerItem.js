import React from 'react'
import { MarkerF, InfoWindow } from "@react-google-maps/api"
import { useState } from 'react'


function MarkerItem({ item, userThatSharedName }) {


  const latitude = item.coordinates[0].lat;
  const longitude = item.coordinates[0].lng;
  const position = {
    lat: Number(latitude),
    lng: Number(longitude)
  }

const divStyle = {
  background: `white`,

  padding: 13
}

  const [infoWindowState, setInfoWindowState] = useState(false)
  const showMe = () => {
      setInfoWindowState(!infoWindowState)
  }


  return (
    <>
        <MarkerF position={position} onClick={showMe}>

        { infoWindowState &&
          <InfoWindow position={position}
          >
            <div style={divStyle}>
              <h2 className='b pa2'>{item.title}</h2>
              <h4 className='b pa2'> Pick up at {item.address}</h4>
              <h4 className='b pa2'>Pick up by {item.date}</h4>
              <h4 className='b pa2'>Speak to {userThatSharedName}</h4>

              <img className="center br2"style={{width: '100px', height: '100px'}} src={item.photo}></img>
            </div>

          </InfoWindow>
        }
        </MarkerF>
      </>
  )
}

export default MarkerItem