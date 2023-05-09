import React from 'react'
import { useState, useContext, useEffect } from 'react'
import './AddFoodItem.css'
import { addItem } from '../../../ApiServices/ApiServices';
import {AuthContext} from '../../../State/AuthContext'
import AutoComplete from 'react-google-autocomplete'

function AddFoodItem() {
  const { currentUser } = useContext(AuthContext);
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [photo, setPhoto] = useState('')
  const id = currentUser.id;
  const ownerName = currentUser.name;
  console.log('ownerName', ownerName)

 const [address, setAddress] = useState('')
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
  })
  const onSubmit = async (e) => {
    console.log(title, date, photo, address)
    if (title === '' || date === '' || photo === '' || address === '') return

  const dateNow = new Date(Date.now())
  const dateEntered = new Date(date)
    if (dateNow >= dateEntered) {
       alert("you can't go back in time");
    } else {

      e.preventDefault();
    await addItem(id, title, date, ownerName, photo, address, coordinates)
      setTitle('');
      setDate('');
      setPhoto('');
      setAddress('')
      }
  }

  //handle and conver it in base 64
  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
    console.log(file)
}

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
    setPhoto(reader.result)
    }
  }

  return (
        <div className='AddItemForm shadow-5 br4 '>
         <button onClick={onSubmit} className="formButton ma2 bg-light-yellow f5 grow pv2 br2" type='submit'>Add a new food item!</button>
        <input className="formInput ma1 pa2 br2 hover-bg-dark-blue " type="text" placeholder='Insert' name='title' value={title}
        onChange={(e) => setTitle(e.target.value)} required/>
        <input className='formInput ma1 pa2 br2 hover-bg-dark-blue' type="datetime-local" placeholder="date" name="date" value={date}
        onChange={(e) => setDate(e.target.value)} required/>
        <input className='formInput ma1 pa3 br2 hover-bg-dark-blue inputFile' type="file" title="" name="photo"
        onChange={handleImage} required/>
      {/* <AutoComplete address={address} coordinates={coordinates} setAddress={setAddress} setCoordinates={setCoordinates} /> */}

      <AutoComplete
        className='formInput ma1 pa2 br2 hover-bg-dark-blue'
        apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        onPlaceSelected={(place) => {
          setCoordinates({
          lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
          })
          setAddress(place.formatted_address)
        }
  }
/>
    </div>
  )
}

export default AddFoodItem