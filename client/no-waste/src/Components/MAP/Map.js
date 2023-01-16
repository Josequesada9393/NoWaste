import React from 'react'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"




function Map() {

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
          center={{ lat: 34, lng: -118 }}
          mapContainerClassName="map-container center tc ma3">
           <Marker position={{center}}/>
        </GoogleMap>

}    </div>
  )
}

export default Map