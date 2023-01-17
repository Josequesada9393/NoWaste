import React from 'react'
import { useState, useContext, useEffect } from 'react'
import './AddFoodItem.css'
import { addItem, fetchUser } from '../../ApiServices/ApiServices';
import { LoginContext } from '../../LoginContext/LoginContext'
import AutoComplete from '../../Autocomplete/AutoComplete';

function AddFoodItem() {

  const { setUser, user } = useContext(LoginContext)
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [photo, setPhoto] = useState('')
  // const [address, setAddress] = useState('')
  const id = user._id;

 const [address, setAddress] = useState("")
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng:null
  })

  const onSubmit = async (e) => {
  const dateNow = new Date(Date.now())
  const dateEntered = new Date(date)
    if (dateNow >= dateEntered) {
       alert("you can't go back in time");
   } else {
    e.preventDefault();
    const response = await addItem(id, title, date, photo, address, coordinates)
    console.log(response)
    setUser(response)
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
    setImage(reader.result)
    }
  }

  return (
    //original
    // <div className='AddItemForm shadow-5 br4 '>
    //      <button onClick={onSubmit} className="formButton ma2 bg-light-yellow f5 grow pv2 br2" type='submit'>Add a new food item!</button>
    //     <input className="formInput ma1 pa2 br2 hover-bg-dark-blue " type="text" placeholder='Insert' name='title' value={title}
    //     onChange={(e) => setTitle(e.target.value)} required/>
    //     <input className='formInput ma1 pa2 br2 hover-bg-dark-blue' type="datetime-local" placeholder="date" name="date" value={date}
    //     onChange={(e) => setDate(e.target.value)} required/>
    //     <input className='formInput ma1 pa2 br2 hover-bg-dark-blue' type="text" placeholder="photo" name="photo" value={photo}
    //     onChange={(e) => setPhoto(e.target.value)} required />
    //   <AutoComplete address={address} coordinates={coordinates} setAddress={setAddress} setCoordinates={setCoordinates} />

    //     {/* <input className='formInput ma1 pa2 br2 hover-bg-dark-blue' type="text" placeholder="address" name="address" value={address}
    //     onChange={(e) => setAddress(e.target.value)} required/> */}
    // </div>



        <div className='AddItemForm shadow-5 br4 '>
         <button onClick={onSubmit} className="formButton ma2 bg-light-yellow f5 grow pv2 br2" type='submit'>Add a new food item!</button>
        <input className="formInput ma1 pa2 br2 hover-bg-dark-blue " type="text" placeholder='Insert' name='title' value={title}
        onChange={(e) => setTitle(e.target.value)} required/>
        <input className='formInput ma1 pa2 br2 hover-bg-dark-blue' type="datetime-local" placeholder="date" name="date" value={date}
        onChange={(e) => setDate(e.target.value)} required/>
        <input className='formInput ma1 pa2 br2 hover-bg-dark-blue' type="file" placeholder="photo" name="photo" value={photo}
        onChange={(e) => setPhoto(e.target.value)} required />
      <AutoComplete address={address} coordinates={coordinates} setAddress={setAddress} setCoordinates={setCoordinates} />

        {/* <input className='formInput ma1 pa2 br2 hover-bg-dark-blue' type="text" placeholder="address" name="address" value={address}
        onChange={(e) => setAddress(e.target.value)} required/> */}
    </div>
  )
}

export default AddFoodItem