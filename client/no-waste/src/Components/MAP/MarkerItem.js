import React from 'react'
import {MarkerF} from "@react-google-maps/api"

function MarkerItem({ item }) {



  const latitude = item.coordinates[0].lat;
  const longitude = item.coordinates[0].lng;
  const position = {
    lat: Number(latitude),
    lng: Number(longitude)
  }

  return (
    <>
      <MarkerF position={position} />
      </>
  )
}

export default MarkerItem