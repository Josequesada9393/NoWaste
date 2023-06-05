import React from 'react'
import { GoogleMap, MarkerF, useLoadScript, InfoWindow, useJsApiLoader } from "@react-google-maps/api";
import MarkerItem from './MarkerItem';
import homeIcon from './place.png'
import { useState } from 'react';
import './Map.css'

function Map({items}) {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,

  })

  const home = { lat: 33.6189, lng: -117.9298 };



  return (
    <div className='mainCont'>
      {!isLoaded ?
        <div>Loading...</div>
        :
        <GoogleMap
          zoom={10}
          center={home}
          mapContainerClassName="map-container center tc ma3"
          >
          <MarkerF position={home}>

          <InfoWindow position={home}
          >
          <img className="center tc" style={{width: '50px', height: '50px', marginRight: "11px"}} src="https://static.vecteezy.com/system/resources/previews/004/416/880/original/simple-house-icon-on-white-background-free-vector.jpg"></img>
          </InfoWindow>

          </MarkerF>

            {

            items.map((item) => <MarkerItem key={item._id} item={item} />)
}
        </GoogleMap>
      }
    </div>
  )
}

export default Map
