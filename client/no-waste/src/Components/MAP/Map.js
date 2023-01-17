import React from 'react'
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import MarkerItem from './MarkerItem';

function Map({itemsShared}) {

  const {isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBQWlb7R2WqmHa_UqFegIPdyFXs3hbYz3M"
  })

  const center = { lat: 34, lng: -118 };


  return (
    <div>
      {!isLoaded ?
        <div>Loading...</div>
        :
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="map-container center tc ma3">

            {
  itemsShared.length > 0 ? itemsShared.map((outerObject) => outerObject.posts.map((foodItem) =>
    <MarkerItem
      userThatShared={outerObject._id} name={outerObject.name}
      key={foodItem._id} item={foodItem} />)) : "no food yet"
}
        </GoogleMap>
      }
    </div>
  )
}

export default Map
