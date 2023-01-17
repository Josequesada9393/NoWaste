import React from 'react'
import { GoogleMap, MarkerF, useLoadScript, InfoWindow } from "@react-google-maps/api";
import MarkerItem from './MarkerItem';
import homeIcon from './place.png'
import { useState } from 'react';

function Map({itemsShared}) {

  const {isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBQWlb7R2WqmHa_UqFegIPdyFXs3hbYz3M"
  })

  const home = { lat: 33.6189, lng: -117.9298 };
  const [infoHome, setInfoHome] = useState(true)

const divStyle = {
  background: `white`,
}

  return (
    <div>
      {!isLoaded ?
        <div>Loading...</div>
        :
        <GoogleMap
          zoom={10}
          center={home}
          mapContainerClassName="map-container center tc ma3">
          <MarkerF position={home}>

          <InfoWindow position={home}
          >
          <img className="center bg-white tc" style={{width: '50px', height: '50px', marginRight: "11px"}} src="https://static.vecteezy.com/system/resources/previews/004/416/880/original/simple-house-icon-on-white-background-free-vector.jpg"></img>
          </InfoWindow>
        }
          </MarkerF>

            {
  itemsShared.length > 0 ? itemsShared.map((outerObject) => outerObject.posts.map((foodItem) =>
    <MarkerItem
      userThatSharedName={outerObject.name}
      userThatShared={outerObject._id} name={outerObject.name}
      key={foodItem._id} item={foodItem} />)) : "no food yet"
}
        </GoogleMap>
      }
    </div>
  )
}

export default Map
