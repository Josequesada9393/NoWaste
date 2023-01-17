import React from 'react'
import { GoogleMap, MarkerF, useLoadScript, InfoWindow } from "@react-google-maps/api";
import MarkerItem from './MarkerItem';
import homeIcon from './place.png'

function Map({itemsShared}) {

  const {isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBQWlb7R2WqmHa_UqFegIPdyFXs3hbYz3M"
  })

  const home = { lat: 33.6189, lng: -117.9298 };

  //   const image = {
  //   url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/house.png",
  //   // This marker is 20 pixels wide by 32 pixels high.
  //   size: new google.maps.Size(20, 32),
  //   // The origin for this image is (0, 0).
  //   origin: new google.maps.Point(0, 0),
  //   // The anchor for this image is the base of the flagpole at (0, 32).
  //   anchor: new google.maps.Point(0, 32),
  // };


  return (
    <div>
      {!isLoaded ?
        <div>Loading...</div>
        :
        <GoogleMap
          zoom={10}
          center={home}
          mapContainerClassName="map-container center tc ma3">
          <MarkerF position={home}  />

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
