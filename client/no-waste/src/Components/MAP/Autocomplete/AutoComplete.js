import React, { Children } from 'react'
import PlacesAutocomplete, {Autocomplete} from 'react-places-autocomplete';
import { useState } from 'react';
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete'

function AutoComplete({address, setAddress, coordinates, setCoordinates}) {

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const ll = await getLatLng(results[0])
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
                className: 'formInput ma1 pa2 br2 hover-bg-dark-blue',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active ma0 b autocomplete'
                  : 'suggestion-item autocomplete b ma0';
                const style = suggestion.active
                  ? { borderRadius: '1px', padding: '4px', cursor: 'pointer', backgroundColor: 'black', color: 'white'}
                  : { borderRadius: '1px', padding: '4px', cursor: 'pointer'};
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
          </div>
        )}

      </PlacesAutocomplete>
    </div>
  )
}

export default AutoComplete


// done with the help of https://github.com/hibiken/react-places-autocomplete#load-google-library