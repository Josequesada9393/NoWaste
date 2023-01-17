import React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';
import { useState } from 'react';
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete'

function AutoComplete({address, setAddress, coordinates, setCoordinates}) {

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const ll = await getLatLng(results[0])
    console.log('ll', ll);
    setAddress(value);
    setCoordinates(ll)
  }
  return (
    <div>

<PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div
          key={suggestions.description}>
            <input
              {...getInputProps({
                placeholder: 'Pick up address',
                className: 'location-search-input formInput ma1 pa2 br2 hover-bg-dark-blue',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { margin: "2px", borderRadius: '10px',  backgroundColor: 'transparent', cursor: 'pointer' }
                  : { margin: "2px", borderRadius: '10px', backgroundColor: 'yellow', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
      {/* <p>lat: {coordinates.lat}</p>
      <p>long: {coordinates.lng}</p>
      <p>Address: {address}</p> */}
          </div>
        )}

      </PlacesAutocomplete>
    </div>
  )
}

export default AutoComplete


// done with the help of https://github.com/hibiken/react-places-autocomplete#load-google-library